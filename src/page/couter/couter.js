import * as React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../../action'

//validator 

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';


// const Counter = ({ value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd }) => (
//   <p>
//     Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>{' '}
//     <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
//     <button onClick={onIncrementAsync}>Increment async</button>
//   </p>
// )
const required = (value) => {
  if (isEmpty(value)) {
      return <small className="form-text text-danger">This field is required</small>;
  }
}

const email = (value) => {
  // if (!isEmail(value)) {
  //     return <small className="form-text text-danger">Invalid email format</small>;
  // }
  if (value.indexOf(index => index='@')==1) {
    return <small className="form-text text-danger">email hợp lệ</small>;
  }
  else {
    return <small className="form-text text-success
    ">email hợp lệ</small>;
  }
}

const minLength = (value) => {
  if (value.trim().length < 6) {
      return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
  }
}
class Counter extends React.Component{
  constructor(props){
    super(props);
    // this.state = {
    //   value: 0
    // };
  }
  onSubmit(e){
    e.preventDefault();
    this.form.validateAll();

    if ( this.checkBtn.context._errors.length === 0 ) {
      alert('success')
    }
    console.log(this.onChangeHandler);
}
  render() {
    let {value,onIncrementIfOdd,onIncrementAsync,onDecrement}=this.props;
    return (
     <div>
        <p>
          Clicked: {value} times <button onClick={()=>this.props.onIncrement()}>+</button> <button onClick={onDecrement}>-</button>{' '}
          <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
          <button onClick={onIncrementAsync}>Increment async</button>
      </p>
      <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                    <Input 
                        name="email" 
                        onChange={this.onChangeHandler}
                        type="text" 
                        placeholder="Email"
                        className="form-control" 
                        validations={[required, email]}
                    />
                    <Input 
                        name="password" 
                        onChange={this.onChangeHandler}
                        type="password" 
                        placeholder="Password"
                        className="form-control" 
                        validations={[required, minLength]}
                    />
                    <button className="btn btn-info btn-block login" type="submit">Login</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
     </div>
  
    )
  }
}
const mapStateToProps = (state,props) => {
  console.log(state.counter);
  return {
    value: state.counter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onIncrement: () => {
      // dispatch({type: 'INCREMENT'});
      //di thang den reducer
      dispatch(increment());
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
