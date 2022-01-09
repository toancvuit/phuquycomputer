import React from 'react';
import './provision.css'
import {Col,Row} from 'react-bootstrap';
class Provision extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/manhinh/provision/1.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Màn Hình Máy Tính Led 20" ProVision </h6>
                                <ul>
                                    <li>Kích thước: 19 inch</li>
                                    <li>Độ phân dải: 1920 x 1080    </li>
                                    <li>Tần số quét: 60 Hz</li>
                                    <li>Độ sáng: 250cd/cm2</li>
                                    <li>Cổng kết nối: 1  x VGA1  x HDMI</li>
                                </ul>
                                <p className="card-text">1,765,000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Provision;