import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const {
        payload: { tasks },
      } = action;
      return {
        ...state,
        isFetching: false,
        tasks,
      };
    }
    case ACTION_TYPES.GET_TASKS_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.CREATE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const {
        payload: { task },
      } = action;
      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, task],
      };
    }
    case ACTION_TYPES.CREATE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    case ACTION_TYPES.DELETE_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.DELETE_TASK_SUCCESS: {
      const {
        payload: { id },
      } = action;
      return state.filter(task => task.id !== id)
    }
    case ACTION_TYPES.DELETE_TASK_ERROR: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isFetching: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default taskReducer;
