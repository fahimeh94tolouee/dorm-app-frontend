import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import Button from '../../components/button';
import Input from '../../components/editText';
import {
  AuthContainer,
  InputsContainer,
  ButtonContainer,
  TextLinkContainer,
  Image,
} from './style';
import {Register} from '../../constants/Navigations';
import {AuthAction} from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  sendLoginRequest() {
    const {username, password} = this.state;
    const data = {
      username: username,
      password: password,
    };
    this.props.loginRequest(data);
  }

  render() {
    const {username, password} = this.state;
    const {loading} = this.props;
    return (
      <AuthContainer>
        <Image source={require('../../assets/images/logo1.png')} />
        <InputsContainer>
          <Input
            icon="user-alt"
            value={username}
            onChange={(text) => this.setState({username: text})}
            placeholder="نام کاربری"
          />
          <View style={{height: 32}} />
          <Input
            icon="key"
            value={password}
            onChange={(text) => this.setState({password: text})}
            placeholder="رمز عبور"
            isSecure={true}
          />
        </InputsContainer>
        <ButtonContainer>
          <Button
            color="primary"
            onPress={() => this.sendLoginRequest()}
            title="ورود"
          />
          <TextLinkContainer
            onPress={() => this.props.navigation.navigate(Register)}
            loading={loading}>
            ثبت نام
          </TextLinkContainer>
        </ButtonContainer>
      </AuthContainer>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (data) => dispatch(AuthAction.login(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
