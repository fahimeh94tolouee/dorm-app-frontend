import React from 'react';
import UserProperties from './userProperties';
import Modal from '../../components/modal';

const UserDataModal = (props) => {
  return (
    <Modal
      show={props.show}
      title={`مشخصات ${props.user.user}`}
      onClose={() => props.onClose()}>
      <UserProperties user={props.user} />
    </Modal>
  );
};

export default UserDataModal;
