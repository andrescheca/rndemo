import React from 'react';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.buttonHolder}>
        <FontAwesomeIcon icon={faBars} />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Título',
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
  },
  buttonHolder: {
    padding: 5,
  },
});

export default Header;
