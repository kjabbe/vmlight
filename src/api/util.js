import { merge } from 'lodash';

const anyRequest = (api_url, url, additionalOptions) => {
  const options = {
    headers: {}
  };

  return fetch(`${api_url}${url}`, merge(options, additionalOptions))
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


const getRequest = (api_url, url, additionalOptions) =>
  anyRequest(api_url, url, {
    method: 'GET',
    ...additionalOptions
  })
  .then(res => res.json());


const postRequest = (api_url, url, body, additionalOptions) =>
  anyRequest(api_url, url, {
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

const putRequest = (api_url, url, body, additionalOptions) =>
  anyRequest(api_url, url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/JSON'
    },
    body: JSON.stringify(body),
    ...additionalOptions
  });

const deleteRequest = (api_url, url, additionalOptions) =>
  anyRequest(api_url, url, {
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
