import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import { getResult } from '../redux/actions';
import TableRes from './TableRes';

class ResultTable extends React.Component {
  componentDidMount() {
    this.props.getResult();
  }

  render() {
    const { result } = this.props;
    return(
      <div className="result-view">
        <Header as="h5">VM</Header>
        {result && <TableRes result={result} /> }
      </div>
    );
  }
}

ResultTable.propTypes = {
  result: PropTypes.array
};

const mapDispatchToProps = (dispatch) => ({
  getResult: getResult(dispatch),
});

const mapStateToProps = ({ result }) => ({
  result
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
