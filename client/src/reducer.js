import ACTION_TYPES from './actions/actionTypes';

const initialState = {
    user: null,
    tasks: [],
    isFetching: false,
    error: null
};

const reducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case ACTION_TYPES.AUTH_USER_ERROR:    
            case ACTION_TYPES.LOGIN_USER_ERROR:
                    case ACTION_TYPES.REGISTER_USER_ERROR:
                        case ACTION_TYPES.GET_TASKS_ERROR:
                            case ACTION_TYPES.CREATE_TASK_ERROR:
                                case ACTION_TYPES.DELETE_TASK_ERROR: 
                                    case ACTION_TYPES.AUTH_QR_USER_ERROR: {
                                        const { error } = action;
                                        return {
                                            ...state,
                                            error
                                        }
                                    }

            case ACTION_TYPES.LOGIN_USER_SUCCESS:
                case ACTION_TYPES.AUTH_USER_SUCCESS:
                    case ACTION_TYPES.REGISTER_USER_SUCCESS:
                        case ACTION_TYPES.AUTH_QR_USER_SUCCESS: {
                            const { data } = action;
                            return {
                                ...state,
                                user: data,
                                error: null
                            }
                        }

            case ACTION_TYPES.GET_TASKS_SUCCESS: {
                const { data } = action;
                return {
                    ...state,
                    tasks: data,
                    error: null
                }
            }

            case ACTION_TYPES.CREATE_TASK_SUCCESS: {
                const { data } = action;
                return {
                    ...state,
                    error: null
                }
            }

            case ACTION_TYPES.DELETE_TASK_SUCCESS: {
                const { data } = action;
                return {
                    ...state,
                    error: null
                }
            }

            case ACTION_TYPES.LOG_OUT_REQUEST: {
                return {
                    ...initialState
                }
            }

            case 'NOTIFICATION': {
                const { data } = action;
                return {
                    ...state,
                    notification: data
                }
            }

            case ACTION_TYPES.EMPTY_USER_OBJECT_REQUEST: {
                return {
                    ...state,
                    user: {}
                }
            }

            default: {
                return state;
            }
        }
};

export default reducer;
