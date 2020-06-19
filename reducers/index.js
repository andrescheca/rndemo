import {REHYDRATE} from 'redux-persist';

const {ADD_USER} = require('../actions');

// Estado inicial
const initialState = {};

// Reducers para usuarios
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      // Recargar la información cuando se abre nuevamente la aplicación.
      return {user: action?.payload?.user};
    case ADD_USER:
      // Reducer para agregar un usuario a la lista
      return {user: action.user};
  }
};

export default userReducer;
