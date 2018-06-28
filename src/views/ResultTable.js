import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getResult } from '../redux/actions';
import { getFixtures } from '../redux/actions';
import TableRes from './TableRes';

class ResultTable extends React.Component {
  componentDidMount() {
    this.props.getResult();
    //this.props.getFixtures();
  }

  render() {
    const { result, fixtures } = this.props;
    //console.log(fixtures);
    return(
      <div className="result-view">
        {result && <TableRes result={result} /> }
      </div>
    );
  }
}

ResultTable.propTypes = {
  result: PropTypes.array,
  fixtures: PropTypes.any,
};

const mapDispatchToProps = (dispatch) => ({
  getResult: getResult(dispatch),
  //getFixtures: getFixtures(dispatch),
});

const mapStateToProps = ({ result, fixtures }) => ({
  result,
  //fixtures,
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
