import React, {Component} from "react";
import {ImageBackground, Text, StatusBar, View} from 'react-native'
import { Container, Item, Input, Icon, Button } from 'native-base';

import text_style from "EagleEyes/app/styles/text"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Container>
          <StatusBar backgroundColor={"transparent"} translucent={true}/>
          <ImageBackground
            style={{backgroundColor: "#29384E",flex: 1, padding: 20}}>

            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontSize: 24, color: "white", marginBottom: 10}}>Login</Text>
              <Text style={{fontSize: 32, color: "white", marginBottom: 10}}>EagleEyes</Text>
            </View>

            <View style={{flex: 2}}>
              <Item rounded style={{marginBottom: 10, borderColor: "white"}}>
                <Icon style={{color: "white"}} active name='ios-phone-portrait-outline' />
                <Input style={{color: "white"}} keyboardType='numeric' placeholderTextColor='white' placeholder='Số điện thoại'/>
              </Item>

              <Item rounded style={{marginBottom: 10, borderColor: "white"}}>
                <Icon style={{color: "white"}} active name='ios-code-outline' />
                <Input style={{color: "white"}} keyboardType='numeric' placeholderTextColor='white' placeholder='OTP'/>
              </Item>

              <Button full rounded success>
                <Text style={{color: "white", fontSize: 16}}>Login</Text>
              </Button>
            </View>
          </ImageBackground>
      </Container>
    );
  }
}

function onPressLearnMore() {

}
