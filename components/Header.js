import React from 'react';
import { Text, View } from 'react-native';

//Make a components
const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    paddingTop: 15
  },
  textStyle: {
    fontSize: 20,
    color: '#000'
  }
};
//Make a Component available to other parts of the app
export default Header;
