import AsyncStorage from '@react-native-community/async-storage';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

// Configuración para persistir la información.
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Reducer que persiste la información.
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  // Crear store y permitir el uso de React Native Debugger
  let store = createStore(persistedReducer, composeWithDevTools());
  let persistor = persistStore(store);
  return {store, persistor};
};
