import React, {Component} from 'react';
// import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';

// function mapStateToProps(state) {
//   return {};
// }

class Login extends Component {
  render() {
    return (
      <View>
        <Text>I m login screen</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

export default Login;
