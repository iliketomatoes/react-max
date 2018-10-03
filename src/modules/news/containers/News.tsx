/**
 * Container template for a component.
 */

 /* Import the component from the component path */
 import Component from '../components/News';

 import { connect } from 'react-redux';
 import { Dispatch } from 'redux';

 /* Import RootStoreState */
 import { RootStoreState } from '../../index';

 /* Import module files */
 import * as actions from '../actions';
 import { Entities } from '../types';

 /**
  * Interface for properties that the container passes to the component.
  */
 export interface Props {
    entities: Entities;
    saving: boolean;
    error?: Error;
 }

 /**
  * Interface for action callbacks that the container exposes to the component.
  * The component's `this.props` is typed `Props & Actions`.
  */
 export interface Actions {
     loadEntities: () => void;
 }

 /** Populate the Props from the store state. */
 const mapStateToProps = ({ news }: RootStoreState): Props => {
     return {
        entities: news.entities,
        saving: news.saving,
        error: news.error,
     };
 };

 /** Populate the Actions with the callbacks for the component. */
 const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
     loadEntities: () => {
        dispatch(actions.requestEntities.started(undefined));
     },
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Component);
