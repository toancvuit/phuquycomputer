import * as React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }) => (
//   <p>
//     Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>{' '}
//     <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
//     <button onClick={onIncrementAsync}>Increment async</button>
//   </p>
// )
class Counter extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   value: 0
    // };
  }
  render() {
    let {value,onIncrementIfOdd,onIncrementAsync,onDecrement}=this.props;
    return (
      <p>
    Clicked: {value} times <button onClick={()=>this.props.onIncrement()}>+</button> <button onClick={onDecrement}>-</button>{' '}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
    <button onClick={onIncrementAsync}>Increment async</button>
  </p>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onIncrement: () => {
      dispatch({type: 'INCREMENT'});
    },
    
  }
}
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
//   onIncrementAsync: PropTypes.func.isRequired,
//   onIncrementIfOdd: PropTypes.func.isRequired,
// }


export default connect(mapStateToProps,mapDispatchToProps)(Counter)
