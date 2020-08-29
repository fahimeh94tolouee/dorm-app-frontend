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
import EmptyState from '../../components/emptyState';
import Confirm from '../../components/confirm';
import {RoomsUser} from '../../constants/Navigations';
import UserState, {OK, PENDING} from '../../constants/userStateTypes';
import Avatar from '../../projectSpecificComponents/avatar';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      show: false,
      clickedButton: '',
      confirm: {show: false, messages: '', data: {}},
    };
  }

  componentDidMount() {
    this.props.getRoomsList();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.processing !== prevProps.processing &&
      !this.props.processing
    ) {
      this.setState({confirm: {show: false, message: '', data: {}}});
    }
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
    const {searchField, show, confirm} = this.state;
    const {loading, list, processing} = this.props;
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
        ) : listData.length === 0 ? (
          searchField ? (
            <EmptyState
              icon="bed-empty"
              text="اتاقی با ظرفیت انتخاب شده وجود ندارد."
            />
          ) : (
            <EmptyState icon="bed-empty" text="اتاقی ثبت نشده است." />
          )
        ) : (
          <ListContainer>
            <Confirm
              show={confirm.show}
              messages={confirm.messages}
              onClose={
                processing
                  ? () => false
                  : () => this.setState({confirm: {...confirm, show: false}})
              }
              onAccept={() => {
                this.sendMemberShipRequest(confirm.data);
              }}
              loading={processing}
            />
            {listData.map((item) => {
              let roomName = `${item.block_number}-${item.room_number}`;
              return (
                <Card
                  key={item.id}
                  colorId={item.id}
                  image={<Avatar data={{id: item.id, title: roomName}} />}
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

  renderButton(item) {
    let title = 'عضویت';
    let color = 'success';
    let data = {
      id: item.id,
      is_add: true,
    };
    let text =
      'عضویت در این اتاق به منزله‌ی تایید تمام افراد تایید شده و در حال انتظار این اتاق می‌باشد، آیا از عضویت در این اتاق اطمینان دارید؟';
    if (item.my_status === OK) {
      title = 'لغو عضویت';
      color = 'error';
      data.is_add = false;
      text = 'آیا از لغو عضویت خود در این اتاق اطمینان دارید؟';
    } else if (item.my_status === PENDING) {
      title = 'لغو درخواست';
      color = 'error';
      data.is_add = false;
      text = 'آیا از لغو درخواست خود برای عضویت در این اتاق اطمینان دارید؟';
    }

    return (
      <Button
        title={title}
        onPress={() => {
          // this.props.membershipRequest(item.id, data);
          this.setState({confirm: {show: true, messages: text, data: data}});
        }}
        color={color}
        size="small"
        border
        // littleRound={true}
        // loading={this.props.processing && item.id === this.state.clickedButton}
      />
    );
  }

  sendMemberShipRequest(data) {
    const roomId = data.id;
    const requestData = {
      is_add: data.is_add,
    };
    this.props.membershipRequest(roomId, requestData);
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
