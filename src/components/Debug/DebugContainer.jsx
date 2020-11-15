import React from 'react'

import Debug from './Debug'
import { connect } from 'react-redux'

class DebugContainer extends React.Component {
  render() {
    return <Debug {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    registration: state.registration
  }
}

export default connect(mapStateToProps)(DebugContainer)