import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MessageAction} from '../../actions';
import Header from '../../components/header';
import Loading from '../../components/loading/pageLoading';
import {ParentContainer, ListContainer} from './style';
import EmptyState from '../../components/emptyState';
import Message from '../../components/message';
import MessageType from '../../constants/messageType';

class Index extends Component {
  componentDidMount() {
    this.props.getLogMessages();
  }

  render() {
    const {loading, list} = this.props;
    return (
      <ParentContainer>
        <Header
          title="اعلان‌ها"
          rightIcon={'ios-menu-sharp'}
          rightIconOnPress={() => this.props.navigation.openDrawer()}
        />
        {loading ? (
          <Loading />
        ) : list.length === 0 ? (
          <EmptyState icon="bell-off" text="اعلانی برای نمایش وجود ندارد." />
        ) : (
          <ListContainer>
            {list.map((item) => {
              return (
                <Message
                  key={item.id}
                  type={MessageType[item.type]}
                  message={item.message}
                  title="اعلان"
                />
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
    loading: store.Message.loading,
    list: store.Message.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLogMessages: () => dispatch(MessageAction.getList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
