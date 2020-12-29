import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
 
  render() {
    return <Button 
    color={this.props.color}
    title={this.props.title}
    onPress={this.props.onPress}
     />;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 100 }}>
      <Text style={{marginBottom:20 , fontSize:24 , textAlign: "center"}}>Choose Your Team ......</Text>
      <View style={{ marginBottom: 50 , width:150, marginLeft:100 }}>
        <AnyColorButton
        color="purple"
        title="Team - 1"
        onPress={()=>alert("Team - 1")}
         />
        </View>
        <View style={{ marginBottom: 50 , width:150, marginLeft:100 }}>
        <AnyColorButton
        color="green"
        title="Team - 2"
        onPress={()=>alert("Team - 2")}
        />
        </View>
         <View style={{ marginBottom: 50 , width:150, marginLeft:100 }}>
        <AnyColorButton
        color="red"
        title="Team - 3"
        onPress={()=>alert("Team - 3")}
         />
        </View>
        <View style={{ marginBottom: 50 , width:150, marginLeft:100 }}>
        <AnyColorButton
        color="blue"
        title="Team - 4"
        onPress={()=>alert("Team - 4")}
        />
        </View>
        
      </View>
    );
  }
}
