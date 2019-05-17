/* eslint-disable no-useless-constructor */
import React from 'react'
class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>child0.0{this.props.children}</div>
  }
}
export default Login
