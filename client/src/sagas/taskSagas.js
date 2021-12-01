import { put } from 'redux-saga/effects';
import * as ActionCreators from '../actions';
import * as API from '../api';

export function * getTasksSaga ({ page, limit }) {
  try {
    const {
      data: { data: tasks },
    } = yield API.getTasks({ page, limit });

    yield put(ActionCreators.getTasksSuccess({ tasks }));
  } catch (error) {
    yield put(ActionCreators.getTasksError({ error }));
  }
}

export function * createTaskSaga (action) {
  try {
    const { payload } = action;
    const {
      data: { data: task },
    } = yield API.createTask(payload.task);
    yield put(ActionCreators.createTaskSuccess({ task }));
  } catch (error) {
    yield put(ActionCreators.createTaskError({ error }));
  }
}
