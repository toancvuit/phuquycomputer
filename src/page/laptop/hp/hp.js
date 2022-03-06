import React from 'react';
import './hp.css'
import {Col,Row,Modal,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {openHpModel,hpgetlist} from '../../../action';
const _ = require("lodash");
class Hp extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.hpgetlist();
    }
   
    render () {
        console.log(this.props.isOpenModel);
        // console.log(this.props.data.attributeSpecItems);
        let arraytemp = this.props.data.attributeSpecItems;
        let tentemp = this.props.data.listDefault?.list;
        // console.log(tentemp);
        let showItemp = _.filter(arraytemp,(obj)=>obj.attributeID == 33);
        
        return (
            <div className='container'>
                <Row>
                    {
                        showItemp.map(item => {
                            let itemtemp = _.filter(arraytemp, (itemtemp) => itemtemp.productID===item.productID);
                            let manhinh = _.find(itemtemp, (el) => el.cssClass==='icon-screen-size')?.specName;
                            let tenobject = _.find(tentemp,el => {
                                // console.log(el?.id);
                                return el.id===item.productID
                            })
                            let ten = tenobject.name;
                            let gia = tenobject.productVariant.price;
                            // console.log(gia)
                            let cpu = _.find(itemtemp, (el) => el.cssClass==='icon-cpu')?.specName;
                            let ram = _.find(itemtemp, (el) => el.cssClass==='icon-ram')?.specName;
                            let ocung = _.find(itemtemp, (el) => el.cssClass==='icon-hdd-black')?.specName;
                            let trongluong = _.find(itemtemp, (el) => el.cssClass==='icon-weight')?.specName;
                            // console.log(_.find(itemtemp, (el) => el.cssClass==='icon-weight')?.specName)
                            // console.log(item.productID)\
                            let picture = Math.floor(Math.random() * 3);
                            // console.log(picture);
                            return (
                                <Col key={item.productID} className='card col-12 col-md-4 col-sm-6 col-lg-3'>
                                    <ShowImageLaptop random={picture}/>
                                    {/* <img src={process.env.PUBLIC_URL + "/laptop/hp/n5030.PNG"} className="card-img-top width-image-mayin" alt="laptop"/> */}
                                        <div className="card-body">
                                            <h6 className="card-title">{ten}</h6>
                                            <ul>
                                                <li>{manhinh}</li>
                                                <li>{cpu}</li>
                                                <li>{ram}</li>
                                                <li>{ocung}</li>
                                                {/* <li>Intel UHD Graphics 605</li> */}
                                                <li> {trongluong}</li>
                                            </ul>
                                            <p className="card-text">{gia}đ</p>
                                            <Button variant="primary" onClick={this.props.openHpModel}>
                                                Open HP Model
                                            </Button>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    
                    
                    {/* <Modal show={this.props.isOpenModel} onHide={this.props.openHpModel} animation={false}>
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
                    </Modal> */}
                    
             </Row>  
            </div>
        );
    }
};
function ShowImageLaptop(props) {
    console.log(props.random)
    if(props.random ===0) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/hp/n5030.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>);
    }
    else if (props.random ===1) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/hp/hp1.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }else {
    return (<img src={process.env.PUBLIC_URL + "/laptop/hp/hp2.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>);

    }
}

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