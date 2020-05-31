import React, { useReducer } from "react";
import ModalContext from "./modalContext";
import modalReducer from "./modalReducer";

import {
  SHOW_MODAL,
  HIDE_MODAL
} from "../types";

const ModalState = (props) => {
  const initialState = {
    modal: false
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  //set show modal
  const showModal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  //set hide modal
  const hideModal = () => {
    dispatch({ type: HIDE_MODAL });
  };


  return (
    <ModalContext.Provider
      value={{
        modal: state.modal,
        showModal,
        hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
