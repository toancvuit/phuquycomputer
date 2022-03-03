import React from 'react';
import './hp.css'
import {Col,Row,Modal,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {openHpModel,hpgetlist} from '../../../action'
class Hp extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.hpgetlist();
    }
   
    render () {
        console.log(this.props.isOpenModel);
        console.log(this.props.data);
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/hp/n5030.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop HP 240 G8 Pentium N5030/4GB/256GB/14.0"HD/Win 10</h6>
                                <ul>
                                    <li>14 in</li>
                                    <li>Intel Pentium N5030</li>
                                    <li>RAM DDR4 4G</li>
                                    <li>SSD 256G</li>
                                    <li>Intel UHD Graphics 605</li>
                                    <li> 1.47 kg</li>
                                </ul>
                                <p className="card-text">10.390.000đ</p>
                                <Button variant="primary" onClick={this.props.openHpModel}>
                                    Open HP Model
                                </Button>
                        </div>
                    </Col>
                    
                    <Modal show={this.props.isOpenModel} onHide={this.props.openHpModel} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.openHpModel}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.openHpModel}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
             </Row>  
            </div>
        );
    }
};
const mapStateToProps = (state,props) => {
    return {
        isOpenModel: state.hp.isOpenModel,
        data: state.hp.data //listDefault atributeSpectItem
    }
}
const mapDispatchToProps= (dispatch, props) => {
    return {
        openHpModel: ()=> {
            dispatch(openHpModel())
        },
        hpgetlist: ()=> {
            dispatch(hpgetlist())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hp);