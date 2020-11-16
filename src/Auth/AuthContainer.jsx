import React from 'react';
import Auth from './Auth';
import { connect } from 'react-redux';

import { setEmail, setPassword } from './AuthReducer'

class AuthContainer extends React.Component {
  render() {
    return (
      <Auth {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.authorization.email,
    password: state.authorization.password
  }
}

const mapDispatchToProps = {
  setEmail, setPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)