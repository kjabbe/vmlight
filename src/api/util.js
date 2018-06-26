import { merge } from 'lodash';

const API_URL = 'http://localhost:5000'

const anyRequest = (url, additionalOptions) => {
  const options = {
    headers: {}
  };

  return fetch(`${API_URL}${url}`, merge(options, additionalOptions))
  .then(res => {
    if (Math.floor(res.status / 100) === 5) { // 5XX
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        res.json().then(json => handleError(res, json));
      } else {
        handleError(res);
      }
    }
    return res;
  });
};


const getRequest = (url, additionalOptions) =>
  anyRequest(url, {
    method: 'GET',
    ...additionalOptions
  })
  .then(res => res.json());


const postRequest = (url, body, additionalOptions) =>
  anyRequest(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify(body),
    ...additionalOptions
  })
  .then(res => {
    const contentType = res.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) return res.json();
  });

const putRequest = (url, body, additionalOptions) =>
  anyRequest(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify(body),
    ...additionalOptions
  });

const deleteRequest = (url, additionalOptions) =>
  anyRequest(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    ...additionalOptions
  });

const handleError = (response, json = {}) => {
  throw new Error({ response, json });
}

export {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};
