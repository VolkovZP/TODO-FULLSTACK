import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Task from './Task';

function TaskList(props) {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  const dispatch = useDispatch()
  const { deleteTaskRequest, getTasksRequest, clearTaskError } = bindActionCreators(ActionCreators, dispatch)

  useEffect(() => {
    getTasksRequest();
  }, []);


  return (
    <div>
      {error && <div style={{ color: 'red', display: 'flex' }}>
        <p>{error.message}</p>
        <button onClick={clearTaskError}>close</button>
      </div>}
      {tasks.map(task => (
        <Task key={task.id} {...task} deleteTaskRequest={deleteTaskRequest} />
      ))}
    </div>
  );
}

export default TaskList
