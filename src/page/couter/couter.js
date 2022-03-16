import * as React from 'react';
import {forwardRef, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
import {connect, useSelector, useDispatch  } from 'react-redux';
import {increment} from '../../action';
import {useState} from 'react';
import './couter.css'
import { Tree, TreeSelect  } from 'antd';
import { Input, } from 'antd';
import {Button,Modal} from 'react-bootstrap'

//validator 

import Form from 'react-validation/build/form';
import Inputs from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { ToastContainer } from 'react-bootstrap';

const { Search } = Input;

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
    ">email hợp lệ 222</small>;
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
    this.state = {
      show: false,
      namefolder: ''
    };
    this.childFunc = React.createRef(null); //use ref to access child element
  }
  
  addFolder() {
    
  }
  onChangeNameFolder(e) {
    this.setState({namefolder: e.target.value})
  }
  handleShow (){
    this.setState({show: true})
  }
  handleClose() {
    this.setState({show: false})
  }
  onSubmit(e){
    e.preventDefault();
    this.form.validateAll();

    if ( this.checkBtn.context._errors.length === 0 ) {
      alert('success')
    }
    console.log(this.onChangeHandler);
}
onSearch=(value)=> {console.log(value);}
  render() {
    let {value,onIncrementIfOdd,onIncrementAsync,onDecrement}=this.props;
    // var demoDiv = document.getElementById("button");
    // let left = demoDiv.offsetLeft;
    // let top = demoDiv.offsetTop;
    // top +=10
    // console.log('left' +left+ 'top:'+ top);
    return (
     <div>
        <p>
          Clicked: {value} times <button onClick={()=>this.props.onIncrement()}>+</button> <button onClick={onDecrement}>-</button>{' '}
          <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
          <button onClick={onIncrementAsync}>Increment async</button>
      </p>
            <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                    <Inputs 
                        name="email" 
                        onChange={this.onChangeHandler}
                        type="text" 
                        placeholder="Email"
                        className="form-control" 
                        validations={[required, email]}
                    />
                    <Inputs
                        name="password" 
                        onChange={this.onChangeHandler}
                        type="password" 
                        placeholder="Password"
                        className="form-control" 
                        validations={[required, minLength]}
                    />
                    <button id="button" className="btn btn-info btn-block login" type="submit">Login</button>
                    <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                </Form>
                <ReactHook/>
           
                  
                   {/* <div className='test' >bbbbbbbbbbbb</div> */}
                   <div style={{display: 'inline-flex'}}>
                   <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={(e)=>this.onSearch(e)}
                  />
                  <Button className='btn-success' onClick={()=>this.handleShow()}>Add</Button>
                   {/* <Demo /> */}
                   <Modal show={this.state.show} onHide={()=>this.handleClose()}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add new folder</Modal.Title>
                    </Modal.Header>
                      <Modal.Body>
                        <Input
                          placeholder='add name folder'
                          onChange={(e)=>this.onChangeNameFolder(e)}
                          // onChange={(e)=>this.childFunc.current(e)}
                        ></Input>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={()=>this.handleClose()}>
                          Close
                        </Button>
                        <Button  variant="primary" onClick={()=>{this.childFunc.current(this.state.namefolder); this.handleClose()}}>
                          Add
                        </Button>
                    </Modal.Footer>
                  </Modal>
                   </div>
                   <div>
                     <Demo childFunc={this.childFunc}/>
                   </div>
                
                
     </div>
  
    )
  }
}

function ReactHook () {
  const counter = useSelector((state) => state.counter);
  console.log('hook couter'+ counter);
  const dispatcht = useDispatch()
  return (
    <p onClick={()=>dispatcht(increment())}>HHHHHHHHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOKKKKKKKKKKKKKK</p>
  )
}
const { DirectoryTree } = Tree;
const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      {
        title: 'leaf 0-0',
        key: '0-0-0',
        isLeaf: true,
      },
      {
        title: 'leaf 0-1',
        key: '0-0-1',
        isLeaf: true,
      },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      {
        title: 'leaf 1-0',
        key: '0-1-0',
        isLeaf: true,
      },
      {
        title: 'leaf 1-1',
        key: '0-1-1',
        isLeaf: true,
      },
    ],
  },
];

const Demo = ({ childFunc })=> {
  let [count, setCount] = useState([
    {
      title: 'parent 0',
      key: '0-0',
      children: [
        {
          title: 'leaf 0-0',
          key: '0-0-0',
          isLeaf: true,
        },
        {
          title: 'leaf 0-1',
          key: '0-0-1',
          isLeaf: true,
        },
      ],
    },
    {
      title: 'parent 1',
      key: '0-1',
      children: [
        {
          title: 'leaf 1-0',
          key: '0-1-0',
          isLeaf: true,
        },
        {
          title: 'leaf 1-1',
          key: '0-1-1',
          isLeaf: true,
        },
      ],
    },
  ]);
  React.useEffect(() => {
    // console.log(childFunc);
    childFunc.current = add
  }, [])
  const add = (e)=> {
    
    let temp =count.concat({title:e, key: e});
console.log('temp'+ temp);
    setCount(temp);
    
    setCount(temp)
    console.log('count' +count);
  }
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand = () => {
    console.log('Trigger Expand');
  };

  return (
    <div>
      <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect}
      onExpand={onExpand}
      treeData={count}
    />
    {/* <button className='btn-success' onClick={()=>add()}>Add toan</button> */}
    </div>
  );
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
