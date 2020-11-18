import React from 'react';
import Authorization from './Auth';
import { connect } from 'react-redux';

import { setEmail, setPassword } from './AuthReducer'

const AuthorizationContainer = (props) => (<Authorization {...props} />)

const mapStateToProps = (state) => {
  return {
    email: state.authorization.email,
    password: state.authorization.password
  }
}

const mapDispatchToProps = {
	setEmail,
	setPassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationContainer)
