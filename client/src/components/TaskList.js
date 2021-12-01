import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../actions';
import Task from './Task';

function TaskList(props) {
  const { tasks, isFetching, error } = useSelector(({ task }) => task);
  console.log(tasks)
  const dispatch = useDispatch()
  const { deleteTaskRequest, getTasksRequest } = bindActionCreators(ActionCreators, dispatch)

  useEffect(() => {
    getTasksRequest();
  }, []);


  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} {...task} deleteTaskRequest={deleteTaskRequest} />
      ))}
    </div>
  );
}

export default TaskList
