import React from 'react';
import './acer.css'
import {Col,Row} from 'react-bootstrap';
class Acer extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
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
                    </Col>
                
             </Row>  
            </div>
        );
    }
}

export default Acer;