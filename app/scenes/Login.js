import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Button
} from "react-native";

import background_style from "EagleEyes/app/styles/background"
import text_style from "EagleEyes/app/styles/text"
import input_style from "EagleEyes/app/styles/inputText"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <ImageBackground
        source={require('EagleEyes/app/img/bg_login.jpg')}
        style={background_style.login}>

        <Text style={text_style.welcome}>Login Eagle</Text>

        <TextInput
          keyboardType = {"numeric"}
          placeholder="Số điện thoại"
          placeholderTextColor={'white'}
          style={input_style.login}
          />

        <TextInput
          keyboardType = {"numeric"}
          placeholder="OTP"
          placeholderTextColor={'white'}
          style={input_style.login}
          />

        <Button
          title="Login"
          onPress={onPressLearnMore}/>
      </ImageBackground>
    );
  }
}

function onPressLearnMore() {

}
