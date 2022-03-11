import React from 'react';
import './acer.css'
import {Col,Row} from 'react-bootstrap';
import {getAcerList} from '../../../action';
import {connect} from 'react-redux';
import Loading from '../../../component/loading/loading';

const _ = require("lodash");

class Acer extends React.Component {
    componentDidMount() {
        this.props.getacerlist();
        //here
    }
    render () {
        console.log(this.props.data);
        let arraytemp = this.props.data?.attributeSpecItems;
        let tentemp = this.props.data.listDefault?.list;
        console.log(arraytemp);
        let showItemp = _.filter(arraytemp,(obj)=>obj.attributeID == 33);
        return (
            <div className='container'>
                {this.props.loading === true? <Loading/>: 
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
                            let picture = Math.floor(Math.random() * 4);
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
                                            {/* <Button variant="primary" onClick={this.props.openHpModel}>
                                                Open HP Model
                                            </Button> */}
                                    </div>
                                </Col>
                            )
                        })
                    }
                    {/* <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/acer/n4050.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Acer Travel Mate B3 TMB311-31-C2HB Celeron N4020/4GB/128GB SSD/11.6'' HD/Win11</h6>
                                <ul>
                                    <li>11.6 in</li>
                                    <li>Intel Celeron N4020</li>
                                    <li>RAM DDR4 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 605</li>
                                    <li> 1.4 kg</li>
                                </ul>
                                <p className="card-text">9.699.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/acer/a315.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Acer Aspire A315 57G 31YD i3 1005G1/4GB/256GB SSD/Nvidia MX330 2GB/Win10</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Intel Core i3-1005G1</li>
                                    <li>RAM DDR4 4G</li>
                                    <li>SSD 256G</li>
                                    <li>NVIDIA GeForce MX330-2GB DDR5</li>
                                    <li> 1.74 kg</li>
                                </ul>
                                <p className="card-text">13.490.000đ</p>
                        </div>
                    </Col> */}
                
             </Row> 
            } 
            </div>
        );
    }
}

function ShowImageLaptop(props) {
    console.log(props.random)
    if(props.random ===0) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/acer/a315.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>);
    }
    else if (props.random ===1) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/acer/acer1.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }else if (props.random ===2) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/acer/acer2.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }else {
        return (<img src={process.env.PUBLIC_URL + "/laptop/acer/n4050.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }
}
const mapStateToProps = (state, props) => {
    return ({
        data: state.acer.data,
        loading: state.loading.loading
    })
}

const mapDispatchToProps=(dispatch, props) => {
    return ({
        getacerlist : () => {
            return dispatch(getAcerList())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Acer);