import React, {Component} from 'react';
import {connect} from 'react-redux';
import {RoomAction} from '../../actions';
import {
  ParentContainer,
  ListContainer,
  CardBottomPartContainer,
  MyStatusContainer,
  StatusText,
  ButtonContainer,
} from './style';
import Header from '../../components/header';
import Card from '../../components/card';
import Button from '../../components/button';
import Loading from '../../components/loading/pageLoading';
import {RoomsUser} from '../../constants/Navigations';
import UserState, {OK, PENDING} from '../../constants/userStateTypes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      show: false,
      clickedButton: '',
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
          <ListContainer>
            {listData.map((item) => {
              let roomName = `${item.block_number}-${item.room_number}`;
              return (
                <Card
                  key={item.id}
                  colorId={item.id}
                  title={roomName}
                  description={`ظرفیت: ${item.capacity}`}
                  onPress={() =>
                    this.props.navigation.navigate(RoomsUser, {
                      roomId: item.id,
                      roomName: roomName,
                    })
                  }>
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
          </ListContainer>
        )}
      </ParentContainer>
    );
  }
  //TODO EMPTY STATE

  renderButton(item) {
    let title = 'عضویت';
    let color = 'success';
    let data = {
      is_add: true,
    };
    if (item.my_status === OK) {
      title = 'لغو عضویت';
      color = 'error';
      data.is_add = false;
    } else if (item.my_status === PENDING) {
      title = 'لغو درخواست';
      color = 'error';
      data.is_add = false;
    }

    return (
      <Button
        title={title}
        onPress={() => {
          this.props.membershipRequest(item.id, data);
          this.setState({clickedButton: item.id});
        }}
        color={color}
        size="small"
        border
        littleRound={true}
        loading={this.props.processing && item.id === this.state.clickedButton}
      />
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Room.loading,
    list: store.Room.list,
    processing: store.Room.processing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomsList: () => dispatch(RoomAction.getList()),
    membershipRequest: (id, data) =>
      dispatch(RoomAction.applyMembership(id, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
