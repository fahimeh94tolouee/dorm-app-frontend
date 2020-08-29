import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {DemandAction} from '../../actions';
import {
  ParentContainer,
  DemandsListContainer,
  ButtonInnerContainer,
  ButtonsContainer,
} from './style';
import Header from '../../components/header';
import Loading from '../../components/loading/pageLoading';
import EmptyState from '../../components/emptyState';
import Confirm from '../../components/confirm';
import Card from '../../components/card';
import UserDataModal from '../../projectSpecificComponents/userData';
import Avatar from '../../projectSpecificComponents/avatar';
import Buttom from '../../components/button';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: {show: false, message: '', data: {}},
      userModal: {show: false, data: {}},
    };
  }

  componentDidMount() {
    this.props.getAllDemands();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.processing !== prevProps.processing &&
      !this.props.processing
    ) {
      this.setState({confirm: {show: false, message: '', data: {}}});
    }
  }
  render() {
    const {loading, list, isStableRoomUser, processing} = this.props;
    const {confirm, userModal} = this.state;
    return (
      <ParentContainer>
        <UserDataModal
          show={userModal.show}
          user={userModal.data}
          onClose={() =>
            this.setState({userModal: {...userModal, show: false}})
          }
        />
        <Header
          title="کاربران منتظر تایید شما"
          rightIcon={'ios-menu-sharp'}
          rightIconOnPress={() => this.props.navigation.openDrawer()}
          // leftIcon={'md-search-sharp'}
        />
        {loading ? (
          <Loading />
        ) : list.length === 0 ? (
          <EmptyState
            icon="frequently-asked-questions"
            text="کاربری که برای پیوستن به اتاق منتظر تایید شما باشد وجود ندارد."
          />
        ) : (
          <DemandsListContainer>
            <Confirm
              show={confirm.show}
              messages={confirm.message}
              onClose={
                processing
                  ? () => false
                  : () => this.setState({confirm: {...confirm, show: false}})
              }
              onAccept={() => {
                this.props.sendAnswerDemand(confirm.data);
              }}
              loading={processing}
            />
            {list.map((item) => {
              return (
                <Card
                  key={item.id}
                  onPress={() =>
                    this.setState({userModal: {data: item, show: true}})
                  }
                  description={`آیا ${item.user} را به عنوان هم‌اتاقی می‌پذیری؟`}
                  image={<Avatar data={item} />}>
                  <ButtonsContainer>
                    <ButtonInnerContainer>
                      <Buttom
                        title="بله"
                        loading={processing}
                        onPress={() => {
                          this.answerRequest(true, item.id);
                        }}
                        color={'success'}
                        littleRound
                        border
                      />
                    </ButtonInnerContainer>
                    <ButtonInnerContainer>
                      <Buttom
                        title="خیر"
                        onPress={() => {
                          this.answerRequest(false, item.id);
                        }}
                        color={'secondary'}
                        littleRound
                        border
                      />
                    </ButtonInnerContainer>
                  </ButtonsContainer>
                </Card>
              );
            })}
          </DemandsListContainer>
        )}
      </ParentContainer>
    );
  }

  answerRequest(ans, userId) {
    const data = {
      pended_account_id: userId,
      answer: ans,
    };
    let message = '';
    if (ans) {
      message = 'آیا مطمئن هستید که با این کاربر سازگارید؟';
    } else {
      message = 'آیا مطمئن هستید که با این کاربر سازگار نیستید؟';
    }
    this.setState({confirm: {show: true, message: message, data: data}});
  }
}

const mapStateToProps = (store) => {
  return {
    loading: store.Demand.loading,
    processing: store.Demand.processing,
    list: store.Demand.list,
    isStableRoomUser: store.Demand.isStableRoomUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDemands: () => dispatch(DemandAction.getList()),
    sendAnswerDemand: (data) => dispatch(DemandAction.answerDemand(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
