import React from 'react';
import './lg.css'
import {Col,Row} from 'react-bootstrap';
class LG extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/manhinh/lg/lg22mk.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Màn hình LG 22MK430H-B 21.5Inch 75Hz IPS</h6>
                                <ul>
                                    <li>Kích thước: 23 inch</li>
                                    <li>Độ phân dải: 1920 x 1080    </li>
                                    <li>Tần số quét: 75 Hz</li>
                                    <li>Độ sáng: 250cd/cm2</li>
                                    <li>Cổng kết nối: D-Sub + HDMI</li>
                                </ul>
                                <p className="card-text">2.790.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default LG;