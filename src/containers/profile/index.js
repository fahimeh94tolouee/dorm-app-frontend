import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  ProfileContainer,
  Space,
  SelectBoxesContainer,
  SelectBoxContainer,
  SelectBoxContainerLabel,
  ParentContainer,
  Header,
  HeaderText,
} from './style';
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
  NOT_EMPTY,
} from '../../constants/inputFieldRelatedConstants';
import {errorGenerator} from '../../assets/functions/errorGenerator';
import {
  CLEAN_STATUS_OPTIONS,
  CLEAN_STATUS_TYPES,
  NOISE_STATUS_OPTIONS,
  NOISE_STATUS_TYPES,
  PERSONALITY_STATUS_OPTIONS,
  PERSONALITY_STATUS_TYPES,
  RELIGIOUS_BELIEF_OPTIONS,
  RELIGIOUS_BELIEF_TYPES,
  SLEEP_STATUS_OPTIONS,
  SLEEP_STATUS_TYPES,
} from '../../constants/roomMemberPropertiesTypes';
import {DrawerActions} from '@react-navigation/routers/src/DrawerRouter';
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
      religious_belief: RELIGIOUS_BELIEF_TYPES.NONE,
      sleep_type: SLEEP_STATUS_TYPES.NONE,
      clean_type: CLEAN_STATUS_TYPES.NONE,
      noise_type: NOISE_STATUS_TYPES.NONE,
      personality_type: PERSONALITY_STATUS_TYPES.NONE,
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
  checkError(field, total = false) {
    const {first_name, last_name} = this.state;
    let error = '';
    if (field === FIRST_NAME.label || total) {
      if (!first_name.value) {
        error = errorGenerator(NOT_EMPTY, FIRST_NAME.text);
      } else {
        error = '';
      }
    }
    if (field === LAST_NAME.label || total) {
      if (!last_name.value) {
        error = errorGenerator(NOT_EMPTY, LAST_NAME.text);
      } else {
        error = '';
      }
    }
    if (!total) {
      this.setState({
        [field]: {...this.state[field], error: error},
      });
    } else {
      return error;
    }
  }

  saveInfo() {
    const {
      first_name,
      last_name,
      city,
      major,
      phone_number,
      religious_belief,
      sleep_type,
      clean_type,
      noise_type,
      personality_type,
      note,
    } = this.state;
  }
  render() {
    const {
      first_name,
      last_name,
      city,
      major,
      phone_number,
      religious_belief,
      sleep_type,
      clean_type,
      noise_type,
      personality_type,
      note,
    } = this.state;
    return (
      <ParentContainer>
        <Header>
          <Ionicons
            name={'checkmark-sharp'}
            color="white"
            size={32}
            onPress={() => this.saveInfo()}
          />
          <HeaderText>ویرایش اطلاعات کاربری</HeaderText>
          <Ionicons
            name={'ios-arrow-back'}
            color="white"
            size={32}
            onPress={() => this.props.navigation.goBack()}
          />
        </Header>
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
          <SelectBoxesContainer>
            <SelectBoxContainer>
              <SelectBoxContainerLabel>اعتقادات مذهبی</SelectBoxContainerLabel>
              <SelectBox
                options={RELIGIOUS_BELIEF_OPTIONS}
                value={religious_belief}
                label="از لحاظ مذهبی بودن/نبودن چه نوع آدمی هستید؟"
                onChange={(value) =>
                  this.changeSelectableField(RELIGIOUS_BELIEF.label, value)
                }
              />
            </SelectBoxContainer>
            <SelectBoxContainer>
              <SelectBoxContainerLabel>حساسیت در خواب</SelectBoxContainerLabel>
              <SelectBox
                options={SLEEP_STATUS_OPTIONS}
                value={sleep_type}
                label="حساسیت شما در زمان خواب چگونه است؟"
                onChange={(value) =>
                  this.changeSelectableField(SLEEP_TYPE.label, value)
                }
              />
            </SelectBoxContainer>
            <SelectBoxContainer>
              <SelectBoxContainerLabel>حساسیت در نظافت</SelectBoxContainerLabel>
              <SelectBox
                options={CLEAN_STATUS_OPTIONS}
                value={clean_type}
                label="حساسیت شما نسبت به نظافت چگونه است؟"
                onChange={(value) =>
                  this.changeSelectableField(CLEAN_TYPE.label, value)
                }
              />
            </SelectBoxContainer>
            <SelectBoxContainer>
              <SelectBoxContainerLabel>
                حساسیت به سر و صدا
              </SelectBoxContainerLabel>
              <SelectBox
                options={NOISE_STATUS_OPTIONS}
                value={noise_type}
                label="حساسیت شما نسبت به سر و صدا در اتاق چگونه است؟"
                onChange={(value) =>
                  this.changeSelectableField(NOISE_TYPE.label, value)
                }
              />
            </SelectBoxContainer>
            <SelectBoxContainer>
              <SelectBoxContainerLabel>تیپ شخصیتی</SelectBoxContainerLabel>
              <SelectBox
                options={PERSONALITY_STATUS_OPTIONS}
                value={personality_type}
                label="خود را بیشتر درون‌گرا می‌دانید یا برون‌گرا؟"
                onChange={(value) =>
                  this.changeSelectableField(PERSONALITY_TYPE.label, value)
                }
              />
            </SelectBoxContainer>
          </SelectBoxesContainer>
          <Space />
          <Input
            icon="paperclip"
            error={note.error}
            value={note.value}
            onChange={(text) => this.changeField(NOTE.label, text)}
            placeholder={NOTE.text}
            multiline={true}
            numberOfLines={4}
          />
        </ProfileContainer>
      </ParentContainer>
    );
  }
}

export default Index;
