import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Entities } from './types';

/* Import our module files */
import * as actions from './actions';

/**
 * Export the StoreState interface for this module. We always name this interface
 * `StoreState` so it is consistent across each of our modules.
 * All of the properties in the interface should be annotated `readonly`, as should
 * all of the properties down the tree.
 */
export interface StoreState {
  readonly entities: Entities;
  readonly saving: boolean;
  readonly error?: Error;
}

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = {
  entities: { data : [] },
  saving: false
};

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)
    .case(actions.requestEntities.started, (state) => ({
        ...state, entities: { data : [] },
    }))
    .case(actions.requestEntities.done, (state, { result: entities }) => ({
        ...state, entities: entities
    }))
    .case(actions.requestEntities.failed, (state, { error }) => ({
        ...state, error,
    }))
    ;
