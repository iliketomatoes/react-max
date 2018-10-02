import { ApiState } from './types';
import { ActionTypes } from '../actions';

export const defaultApiState: ApiState = {
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  data: undefined,
  err: undefined
};

export const apiReducer = (state = defaultApiState, action: any) => {
  switch (action.type) {
    case ActionTypes.api.PENDING:
      const byId = state[action.payload.nameSpace] ? state[action.payload.nameSpace] : {};

      if (action.payload.byId) {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              ...byId,
              ...{
                [action.payload.byId]: {
                  isPending: true,
                  isFulfilled: false,
                  isRejected: false
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              isPending: true,
              isFulfilled: false,
              isRejected: false
            }
          }
        };
      }

    case ActionTypes.api.FULFILLED:
      const byIdFulfilled = state[action.payload.nameSpace] ? state[action.payload.nameSpace] : {};

      if (action.payload.byId) {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              ...byIdFulfilled,
              ...{
                [action.payload.byId]: {
                  isPending: false,
                  isFulfilled: true,
                  isRejected: false,
                  data: action.payload.response
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              isPending: false,
              isFulfilled: true,
              isRejected: false,
              data: action.payload.response
            }
          }
        };
      }

    case ActionTypes.api.REJECTED:
      const byIdRejected = state[action.payload.nameSpace] ? state[action.payload.nameSpace] : {};

      if (action.payload.byId) {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              ...byIdRejected,
              ...{
                [action.payload.byId]: {
                  isPending: false,
                  isFulfilled: false,
                  isRejected: true,
                  err: action.payload.err
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          ...{
            [action.payload.nameSpace]: {
              isPending: false,
              isFulfilled: false,
              isRejected: true,
              err: action.payload.err
            }
          }
        };
      }

    case ActionTypes.api.RESET:
      return {
        ...state,
        ...{
          [action.nameSpace]: defaultApiState
        }
      };

    case ActionTypes.api.RESETALL:
      return defaultApiState;

    default:
      return state;
  }
};
