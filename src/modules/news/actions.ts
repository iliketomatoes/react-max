import actionCreatorFactory, { Action } from 'typescript-fsa';
import { Entities } from './types';

/**
 * The action creator for this module. Note that it contains the module name.
 */
const actionCreator = actionCreatorFactory('News');

export type RequestEntitiesAction = Action<undefined>;

export const requestEntities = actionCreator
    .async<undefined, Entities, Error>('REQUEST_ENTITIES');

// export interface AddPetPayload {
//     name: string;
//     photoUrls: Array<string>;
// }

// export type AddPetAction = Action<AddPetPayload>;
// export const addPet = actionCreator.async<AddPetPayload, {}, Error>('ADD_PET');

