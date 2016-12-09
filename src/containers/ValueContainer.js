import { connect } from 'react-redux'

import Value from '../components/Value'
import { increment } from '../actions/value'

const mapStateToProps = (state) => {
  return {
    value: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Value)
