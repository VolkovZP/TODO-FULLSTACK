import ACTION_TYPES from './types';

export const createTaskRequest = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { task },
});

export const createTaskSuccess = ({ task }) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});

export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

export const getTasksRequest = ({ page = 1, limit = 10 } = {}) => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
  payload: { page, limit },
});

export const getTasksSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: { tasks },
});

export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});
