import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {RoomAction} from '../../../actions';
import Header from '../../../components/header';
import Loading from '../../../components/loading/pageLoading';
import Card from '../../../components/card';
import UserState from '../../../constants/userStateTypes';
import {
  ParentContainer,
  ListContainer,
  CardBottomPartContainer,
  MyStatusContainer,
  StatusText,
} from '../style';
import Button from '../../../components/button';
import Modal from '../../../components/modal';
import UserProperties from './userProperties';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userModal: {show: false, data: {}},
    };
  }

  componentDidMount() {
    this.props.getRoomUsersInfo(this.props.route.params.roomId);
  }

  render() {
    const {
      route: {
        params: {roomName},
      },
      loading,
      userList,
    } = this.props;
    const {userModal} = this.state;
    return (
      <ParentContainer>
        {userModal.show && (
          <Modal
            show={userModal.show}
            title={`مشخصات ${userModal.data.user}`}
            onClose={() =>
              this.setState({userModal: {...userModal, show: false}})
            }>
            <UserProperties user={userModal.data} />
          </Modal>
        )}
        <Header
          title={`اتاق ${roomName}`}
          rightIcon={'ios-menu-sharp'}
          rightIconOnPress={() => this.props.navigation.openDrawer()}
          leftIcon={'ios-arrow-back'}
          leftIconOnPress={() => this.props.navigation.goBack()}
        />
        {loading ? (
          <Loading />
        ) : (
          <ListContainer>
            {userList.map((item) => {
              let userState = UserState[item.user_state];
              return (
                <Card
                  // colorId={item.id}
                  icon={{
                    name: userState.icon,
                    color: userState.color,
                  }}
                  description={`نام کاربری: ${item.user.user}`}
                  onPress={() =>
                    this.setState({userModal: {data: item.user, show: true}})
                  }>
                  <CardBottomPartContainer>
                    <MyStatusContainer>
                      <StatusText>وضعیت کاربر: </StatusText>
                      <StatusText color={userState.color}>
                        {userState.text}
                      </StatusText>
                    </MyStatusContainer>
                    <Button
                      title="مشاهده‌ی گراف وضعیت"
                      onPress={() => {}}
                      color="secondary"
                      size="small"
                      // border
                      littleRound={true}
                      // loading={true}
                    />
                  </CardBottomPartContainer>
                </Card>
              );
            })}
          </ListContainer>
        )}
      </ParentContainer>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Room.loading,
    userList: store.Room.userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRoomUsersInfo: (id) => dispatch(RoomAction.getUsersList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
