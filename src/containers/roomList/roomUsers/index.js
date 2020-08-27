import React, {Component} from 'react';
import {connect} from 'react-redux';
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

class Index extends Component {
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
    return (
      <ParentContainer>
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
                  onPress={() => {}}>
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
