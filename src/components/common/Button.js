import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = (props) =>{
  const { buttonStyle, textStyle } = styles;
  return(
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        Click Me!!
      </Text>
    </TouchableOpacity>
  );
};

const styles ={
  textStyle:{
    alignSelf:'center',
    color:"#007aff",
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10
  },
  buttonStyle:{
    flex:1,
    alignSelf:'stretch',
    backgroundColor:"#ddd",
    borderWidth:1,
    borderRadius:5,
    bordercolor:"#007aff",

  },
}

export { Button };
