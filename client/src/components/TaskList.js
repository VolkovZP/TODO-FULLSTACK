import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as ActionCreators from '../actions';

function TaskList (props) {
  const { tasks, isFetching, error, getTasksAction } = props;
  useEffect(() => {
    getTasksAction();
  }, [getTasksAction]);
  return (
    <div>
      {tasks.map(t => (
        <div key={t.id}>{(JSON.stringify(t, 4))}</div>
      ))}
    </div>
  );
}

const mapStateToProps = ({ task }) => task;
const mapDispatchToProps = dispatch => ({
  getTasksAction: () => dispatch(ActionCreators.getTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
