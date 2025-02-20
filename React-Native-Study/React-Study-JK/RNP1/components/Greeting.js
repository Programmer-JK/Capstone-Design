import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}! </Text>
      </View>
      <Text> Extra Text! </Text>
    </>
  );
}

Greeting.defaultProps = {
  name: 'react native',
};

export default Greeting;
