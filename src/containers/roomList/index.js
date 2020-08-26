import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {RoomAction} from '../../actions';
import {
  ParentContainer,
  RoomListContainer,
  CardBottomPartContainer,
  MyStatusContainer,
  StatusText,
  ButtonContainer,
} from './style';
import Header from '../../components/header';
import Card from '../../components/card';
import Button from '../../components/button';
import Loading from '../../components/loading/pageLoading';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import UserState, {OK, PENDING} from '../../constants/userStateTypes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      show: false,
    };
  }

  componentDidMount() {
    this.props.getRoomsList();
  }

  makeTitle() {
    const {searchField} = this.state;
    let title = 'لیست اتاق‌ها';
    if (!searchField) {
      return title;
    } else {
      title += `/ظرفیت:${searchField}`;
      return title;
    }
  }
  render() {
    const {searchField, show} = this.state;
    const {loading, list} = this.props;
    let listData = searchField
      ? list.filter((item) => item.capacity === parseInt(searchField))
      : list;
    return (
      <ParentContainer>
        <Header
          title={this.makeTitle()}
          rightIcon={'ios-menu-sharp'}
          rightIconOnPress={() => this.props.navigation.openDrawer()}
          leftIcon={'md-search-sharp'}
          leftIconOnPress={() => this.setState({show: !show})}
          inputField={{
            show: show,
            placeholder: 'جستجو بر اساس ظرفیت',
            onChange: (text) => this.setState({searchField: text}),
            value: searchField,
            otherProps: {keyboardType: 'numeric'},
          }}
        />
        {loading ? (
          <Loading />
        ) : (
          <RoomListContainer>
            {listData.map((item) => {
              return (
                <Card
                  colorId={item.id}
                  title={`${item.block_number}-${item.room_number}`}
                  description={`ظرفیت: ${item.capacity}`}>
                  <CardBottomPartContainer>
                    <MyStatusContainer>
                      <StatusText>وضعیت من در این اتاق: </StatusText>
                      <StatusText color={UserState[item.my_status].color}>
                        {UserState[item.my_status].text}
                      </StatusText>
                      {/*<FontAwesome5 name={'user-clock'} size={16} />*/}
                    </MyStatusContainer>
                    <ButtonContainer>{this.renderButton(item)}</ButtonContainer>
                  </CardBottomPartContainer>
                </Card>
              );
            })}
          </RoomListContainer>
        )}
      </ParentContainer>
    );
  }

  renderButton(item) {
    let title = 'عضویت';
    let color = 'success';
    let method = () => console.log('UU');
    console.log(item.my_status === OK, 'EEE');
    if (item.my_status === OK) {
      title = 'لغو عضویت';
      color = 'error';
    } else if (item.my_status === PENDING) {
      title = 'لغو درخواست';
      color = 'error';
    }

    return (
      <Button
        title={title}
        onPress={method}
        color={color}
        size="small"
        border
        littleRound={true}
        // loading={true}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Room.loading,
    list: store.Room.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomsList: () => dispatch(RoomAction.getList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
