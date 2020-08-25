import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {RoomAction} from '../../actions';
import {ParentContainer, RoomListContainer} from './style';
import Header from '../../components/header';

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
        <RoomListContainer />
      </ParentContainer>
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
