import * as types from "./actiontype";
import axios from "axios";

export const loadusers = () => {
  return function (dispatch) {
    axios.get("http://localhost:5000/user")
      .then((response) => {
        dispatch({
          type: types.GET_USERS,
          payload: response
        });
      })
      .catch((err) => console.log(err));
  };
};

export const adduser = (data) => {
  return function (dispatch) {
    axios.post("http://localhost:5000/user", data)
      .then((response) => {
        dispatch({
          type: types.ADD_USERS
        });
        dispatch(loadusers());
      })
      .catch((err) => console.log(" error ", err));
  };
};

export const deleteUsers = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:5000/user/${id}`)
      .then((response) => {
        dispatch({
          type: types.DELETE_USERS
        });
        dispatch(loadusers());
      })
      .catch((err) => console.log(err));
  };
};

export const updateUser = (info) => {
  const newr = info.id;
  return function (dispatch) {
    axios.put(`http://localhost:5000/user/${newr}`, info)
      .then((response) => {
        dispatch({
          type: types.UPDATE_USERS,
        });
        dispatch(loadusers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
