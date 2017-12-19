import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles ={
  containerStyle:{
    backgroundColor:"fff",
    padding:5,
    borderBottomWidth:0,
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative',
  }
};

export { CardSection };
