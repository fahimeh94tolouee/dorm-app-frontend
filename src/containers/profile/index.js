import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ProfileContainer, Space} from './style';
import Input from '../../components/editText';
import SelectBox from '../../components/selectBox';
import {
  FIRST_NAME,
  LAST_NAME,
  CITY,
  MAJOR,
  PHONE_NUMBER,
  RELIGIOUS_BELIEF,
  SLEEP_TYPE,
  CLEAN_TYPE,
  NOISE_TYPE,
  NOTE,
  PERSONALITY_TYPE,
  USERNAME,
  NOT_EMPTY,
  PASSWORD,
  AT_LEAST_4,
} from '../../constants/inputFieldRelatedConstants';
import {errorGenerator} from '../../assets/functions/errorGenerator';
import {RELIGIOUS_BELIEF_OPTIONS} from '../../constants/roomMemberPropertiesTypes';
// import {connect} from 'react-redux';

// function mapStateToProps(state) {
//     return {};
// }

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: {value: '', error: ''},
      last_name: {value: '', error: ''},
      city: {value: '', error: ''},
      major: {value: '', error: ''},
      phone_number: {value: '', error: ''},
      note: {value: '', error: ''},
      religious_belief: {key: '', value: ''},
    };
  }

  changeField(field, text) {
    this.setState(
      {[field]: {...this.state[field], value: text}},
      // () => this.checkError(field),
    );
  }
  changeSelectableField(field, value) {
    this.setState(
      {[field]: value},
      // () => this.checkError(field),
    );
  }
  // checkError(field, total = false) {
  //   const {username, password} = this.state;
  //   let error = '';
  //   if (field === USERNAME.label || total) {
  //     if (!username.value) {
  //       error = errorGenerator(NOT_EMPTY, USERNAME.text);
  //     } else {
  //       error = '';
  //     }
  //   }
  //   if (field === PASSWORD.label || total) {
  //     if (!password.value) {
  //       error = errorGenerator(NOT_EMPTY, PASSWORD.text);
  //     } else if (password.value.length < 4) {
  //       error = errorGenerator(AT_LEAST_4, PASSWORD.text);
  //     } else {
  //       error = '';
  //     }
  //   }
  //   if (!total) {
  //     this.setState({
  //       [field]: {...this.state[field], error: error},
  //       disable: error,
  //     });
  //   } else {
  //     return error;
  //   }
  // }
  render() {
    const {
      first_name,
      last_name,
      city,
      major,
      phone_number,
      religious_belief,
      note,
    } = this.state;
    return (
      <ProfileContainer>
        <Input
          icon="user-alt"
          error={first_name.error}
          value={first_name.value}
          onChange={(text) => this.changeField(FIRST_NAME.label, text)}
          placeholder={FIRST_NAME.text}
        />
        <Space />
        <Input
          icon="user-alt"
          error={last_name.error}
          value={last_name.value}
          onChange={(text) => this.changeField(LAST_NAME.label, text)}
          placeholder={LAST_NAME.text}
        />
        <Space />
        <Input
          icon="map-marker-alt"
          error={city.error}
          value={city.value}
          onChange={(text) => this.changeField(CITY.label, text)}
          placeholder={CITY.text}
        />
        <Space />
        <Input
          icon="mobile-alt"
          error={phone_number.error}
          value={phone_number.value}
          onChange={(text) => this.changeField(PHONE_NUMBER.label, text)}
          placeholder={PHONE_NUMBER.text}
        />
        <Space />
        <Input
          icon="book"
          error={major.error}
          value={major.value}
          onChange={(text) => this.changeField(MAJOR.label, text)}
          placeholder={MAJOR.text}
        />
        <SelectBox
          options={RELIGIOUS_BELIEF_OPTIONS}
          value={religious_belief}
          label="از لحاظ مذهبی بودن/نبودن چه نوع آدمی هستید؟"
          onChange={(value) =>
            this.changeSelectableField(RELIGIOUS_BELIEF.label, value)
          }
        />
      </ProfileContainer>
    );
  }
}

export default Index;
