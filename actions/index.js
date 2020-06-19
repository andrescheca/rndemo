// Tipos
export const ADD_USER = 'ADD_USER';

// Acciones
export const addUser = user => {
  return {
    type: ADD_USER,
    user,
  };
};
