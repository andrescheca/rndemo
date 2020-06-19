import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Layout from '../components/Layout';

const Home = ({navigation}) => {
  // Obtiene la información del estado
  const currentState = useSelector(state => state);
  return (
    <Layout title={'Inicio'}>
      <View style={styles.sectionContainer}>
        {(!currentState || !currentState.user) && (
          <Text style={styles.title}>No existen registros</Text>
        )}
        {currentState && currentState.user && (
          <>
            <Text style={styles.title}>Último usuario agregado</Text>
            <Text style={styles.title}>
              {currentState.user.name} {currentState.user.lastName}
            </Text>
          </>
        )}
        <View style={styles.buttonHolder}>
          <Button
            onPress={() => navigation.navigate('Formulario')}
            title="Ir al formulario"
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 5,
  },
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 20,
  },
  buttonHolder: {
    marginTop: 20,
  },
});

export default Home;
