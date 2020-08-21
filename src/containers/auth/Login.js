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
import {errorGenerator} from '../../assets/functions/errorGenerator';
import {
  AT_LEAST_4,
  NOT_EMPTY,
  USERNAME,
  PASSWORD,
} from '../../constants/inputFieldRelatedConstants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {value: '', error: ''},
      password: {value: '', error: ''},
      disable: true,
    };
  }

  sendLoginRequest() {
    const {username, password} = this.state;
    if (!this.checkError('', true)) {
      const data = {
        username: username.value,
        password: password.value,
      };
      this.props.loginRequest(data);
      this.setState({disable: false});
    } else {
      this.setState({disable: true});
    }
  }

  changeField(field, text) {
    this.setState({[field]: {...this.state[field], value: text}}, () =>
      this.checkError(field),
    );
  }
  checkError(field, total = false) {
    const {username, password} = this.state;
    let error = '';
    if (field === USERNAME.label || total) {
      if (!username.value) {
        error = errorGenerator(NOT_EMPTY, USERNAME.text);
      } else {
        error = '';
      }
    }
    if (field === PASSWORD.label || total) {
      if (!password.value) {
        error = errorGenerator(NOT_EMPTY, PASSWORD.text);
      } else if (password.value.length < 4) {
        error = errorGenerator(AT_LEAST_4, PASSWORD.text);
      } else {
        error = '';
      }
    }
    if (!total) {
      this.setState({
        [field]: {...this.state[field], error: error},
        disable: error,
      });
    } else {
      return error;
    }
  }

  render() {
    const {username, password, disable} = this.state;
    const {loading} = this.props;
    return (
      <AuthContainer>
        <Image source={require('../../assets/images/logo1.png')} />
        <InputsContainer>
          <Input
            icon="user-alt"
            error={username.error}
            value={username.value}
            onChange={(text) => this.changeField('username', text)}
            placeholder={USERNAME.text}
          />
          <View style={{height: 16}} />
          <Input
            icon="key"
            error={password.error}
            value={password.value}
            onChange={(text) => this.changeField('password', text)}
            placeholder={PASSWORD.text}
            isSecure={true}
          />
        </InputsContainer>
        <ButtonContainer>
          <Button
            color="primary"
            onPress={() => this.sendLoginRequest()}
            loading={loading}
            disabled={disable}
            title="ورود"
          />
          <TextLinkContainer
            onPress={
              !loading
                ? () => this.props.navigation.navigate(Register)
                : () => {}
            }>
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
