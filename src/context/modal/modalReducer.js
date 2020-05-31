import {
  SHOW_MODAL,
  HIDE_MODAL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
};
