import React from 'react';
import './lenovo.css'
import {Col,Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {lenovoGetList} from '../../../action';
import Loading from '../../../component/loading/loading';
const _ = require('lodash');
class Lenovo extends React.Component {
    componentDidMount() {
        this.props.lenovogetlist();
    }
    render () {
        console.log(this.props.data);
        let arraytemp = this.props.data?.attributeSpecItems;
        let tentemp = this.props.data.listDefault?.list;
        console.log(arraytemp);
        let showItemp = _.filter(arraytemp,(obj)=>obj.attributeID == 33);
        return (
            <div className='container'>
                {this.props.loading === true ? <Loading/> :
                <Row>
                    {/* <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/lenovo/ideapad.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Lenovo IdeaPad Slim 3 15ADA05 R5 3500U/8GB/512GB SSD/15.6HD Touch/Win 10</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>AMD Ryzen 5-3500U</li>
                                    <li>RAM DDR4 8G</li>
                                    <li>SSD 512G</li>
                                    <li>AMD Radeon Graphics Vega 8</li>
                                    <li> 1.85 kg</li>
                                </ul>
                                <p className="card-text">13.499.000đ</p>
                        </div>
                    </Col> */}
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
                                    {/* <img src={process.env.PUBLIC_URL + "/laptop/hp/n5030.png"} className="card-img-top width-image-mayin" alt="laptop"/> */}
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
             </Row>  
            }
            </div>
        );
    }
}
function ShowImageLaptop(props) {
    console.log(props.random)
    if(props.random ===0) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/lenovo/ideapad.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>);
    }
    else if (props.random ===1) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/lenovo/lenovo1.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }else if (props.random ===2) {
    return (<img src={process.env.PUBLIC_URL + "/laptop/lenovo/lenovo2.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }else {
        return (<img src={process.env.PUBLIC_URL + "/laptop/lenovo/lenovo3.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>)
    }
}

const mapStateToProps= (state,props)=> {
    return {
        data: state.lenovo.data,
        loading: state.loading.loading
    }
}
const mapDispatchToProps= (dispatch, props) => {
    return {
        lenovogetlist: ()=> {
            dispatch(lenovoGetList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Lenovo);