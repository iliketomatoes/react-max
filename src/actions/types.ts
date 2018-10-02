export namespace ActionTypes {

  export const enum auth {
    LOG_IN = '@@auth/LOG_IN',
    LOG_OUT = '@@auth/LOG_OUT',
  }

  export const enum panes {
    TOGGLE_VIEW = '@@pane/TOGGLE_VIEW',
  }

  export const enum api {
    PENDING = '@@api/PENDING',
    FULFILLED = '@@api/FULFILLED',
    REJECTED = '@@api/REJECTED',
    RESET = '@@api/RESET',
    RESETALL = '@@api/RESETALL'
  }

}
