import 'react-native-gesture-handler';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import configureStore from './configureStore';

// Crear drawer para menu.
const Drawer = createDrawerNavigator();

// Configurar y obtener el store y el objeto para persistir información cuando se cierra la aplicación.
const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Inicio" drawerPosition="right">
            <Drawer.Screen name="Inicio" component={HomePage} />
            <Drawer.Screen name="Formulario" component={SettingsPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
