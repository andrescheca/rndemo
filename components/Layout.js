import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';

const Layout = ({title, children}) => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.sectionContainer}>
        <View style={styles.viewContainer}>
          <Header title={title} />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  sectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  viewContainer: {
    width: '100%',
    flex: 1,
    marginTop: 0,
  },
});

export default Layout;
