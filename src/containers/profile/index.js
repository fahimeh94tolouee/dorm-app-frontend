import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from '../../components/loading/pageLoading';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isEmpty, isEqual} from 'lodash';
import {
  ProfileContainer,
  Space,
  SelectBoxesContainer,
  SelectBoxContainer,
  SelectBoxContainerLabel,
  ParentContainer,
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
import {AuthAction} from '../../actions';
import Header from '../../components/header';

class Index extends Component {
  constructor(props) {
    super(props);
    const {data} = props;
    const rb = RELIGIOUS_BELIEF_OPTIONS.filter(
      (item) => item.key === data.religious_belief,
    );
    const st = SLEEP_STATUS_OPTIONS.filter(
      (item) => item.key === data.sleep_type,
    );
    const ct = CLEAN_STATUS_OPTIONS.filter(
      (item) => item.key === data.clean_type,
    );
    const nt = NOISE_STATUS_OPTIONS.filter(
      (item) => item.key === data.noise_type,
    );
    const pt = PERSONALITY_STATUS_OPTIONS.filter(
      (item) => item.key === data.personality_type,
    );
    this.state = {
      first_name: {value: data.first_name || '', error: ''},
      last_name: {value: data.last_name || '', error: ''},
      city: {value: data.city || '', error: ''},
      major: {value: data.major || '', error: ''},
      phone_number: {value: data.phone_number || '', error: ''},
      note: {value: data.note || '', error: ''},
      religious_belief:
        rb.length > 0 ? rb[0] : {key: RELIGIOUS_BELIEF_TYPES.NONE, value: ''},
      sleep_type:
        st.length > 0 ? st[0] : {key: SLEEP_STATUS_TYPES.NONE, value: ''},
      clean_type:
        ct.length > 0 ? ct[0] : {key: CLEAN_STATUS_TYPES.NONE, value: ''},
      noise_type:
        nt.length > 0 ? nt[0] : {key: NOISE_STATUS_TYPES.NONE, value: ''},
      personality_type:
        pt.length > 0 ? pt[0] : {key: PERSONALITY_STATUS_TYPES.NONE, value: ''},
    };
  }

  componentDidMount() {
    if (isEmpty(this.props.data)) {
      this.props.getInfo();
    }
  }
  componentDidUpdate(prevProps) {
    const {data} = this.props;
    if (!isEmpty(data) && !isEqual(prevProps.data, data)) {
      this.setData();
    }
  }

  setData() {
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
    const {data} = this.props;
    this.setState({
      first_name: {...first_name, value: data.first_name},
      last_name: {...last_name, value: data.last_name},
      city: {...city, value: data.city},
      major: {...major, value: data.major},
      phone_number: {...phone_number, value: data.phone_number},
      note: {...note, value: data.note},
      religious_belief: {
        ...religious_belief,
        ...RELIGIOUS_BELIEF_OPTIONS.filter(
          (item) => item.key === data.religious_belief,
        )[0],
      },
      sleep_type: {
        ...sleep_type,
        ...SLEEP_STATUS_OPTIONS.filter(
          (item) => item.key === data.sleep_type,
        )[0],
      },
      clean_type: {
        ...clean_type,
        ...CLEAN_STATUS_OPTIONS.filter(
          (item) => item.key === data.clean_type,
        )[0],
      },
      noise_type: {
        ...noise_type,
        ...NOISE_STATUS_OPTIONS.filter(
          (item) => item.key === data.noise_type,
        )[0],
      },
      personality_type: {
        ...personality_type,
        ...PERSONALITY_STATUS_OPTIONS.filter(
          (item) => item.key === data.personality_type,
        )[0],
      },
    });
  }
  changeField(field, text) {
    this.setState({[field]: {...this.state[field], value: text}}, () =>
      this.checkError(field),
    );
  }
  changeSelectableField(field, value) {
    this.setState({[field]: value}, () => this.checkError(field));
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
    if (total && error) {
      return error;
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
    console.log(this.checkError(null, true), 'errrrrrrrrrrr');
    if (!this.checkError(null, true)) {
      const data = {
        first_name: first_name.value,
        last_name: last_name.value,
        city: city.value,
        major: major.value,
        phone_number: phone_number.value,
        note: note.value,
        religious_belief: religious_belief.key,
        sleep_type: sleep_type.key,
        clean_type: clean_type.key,
        noise_type: noise_type.key,
        personality_type: personality_type.key,
      };
      this.props.updateInfo(data);
    }
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
    const {loading} = this.props;
    return (
      <ParentContainer>
        <Header
          title="ویرایش اطلاعات کاربری"
          rightIcon={'checkmark-sharp'}
          rightIconOnPress={() => this.saveInfo()}
          leftIcon={'ios-arrow-back'}
          leftIconOnPress={() => this.props.navigation.goBack()}
        />
        {loading ? (
          <Loading color="primary" />
        ) : (
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
                <SelectBoxContainerLabel>
                  اعتقادات مذهبی
                </SelectBoxContainerLabel>
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
                <SelectBoxContainerLabel>
                  حساسیت در خواب
                </SelectBoxContainerLabel>
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
                <SelectBoxContainerLabel>
                  حساسیت در نظافت
                </SelectBoxContainerLabel>
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
        )}
      </ParentContainer>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Auth.processing,
    data: store.Auth.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: () => dispatch(AuthAction.getInfo()),
    updateInfo: (data) => dispatch(AuthAction.updateInfo(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
