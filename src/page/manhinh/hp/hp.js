import React from 'react';
import './hp.css'
import {Col,Row} from 'react-bootstrap';
class HP extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/manhinh/hp/hp2y.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Màn hình máy tính HP 22Y 21.5 inch Display (1PX47AA)</h6>
                                <ul>
                                    <li>Kích thước: 21.5 inch</li>
                                    <li>Độ phân dải: 1920 x 1080    </li>
                                    <li>Tần số quét: 60 Hz</li>
                                    <li>Độ sáng: 250cd/cm2</li>
                                    <li>Cổng kết nối: 1  x VGA1  x DVI</li>
                                </ul>
                                <p className="card-text">2.790.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default HP;