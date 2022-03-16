import React from 'react';
import './routerwifi.css'
import {Col,Row} from 'react-bootstrap';
class Routerwifi extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/wifi/routerwifi/tplinkax10.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Router Wifi Chuẩn Wifi 6 AX1500 TP-Link Archer AX10 Đen</h6>
                                <ul>
                                    <li>Tốc độ: 300 Mbps (băng tần 2.4GHz)1201 Mbps (băng tần 5GHz)</li>
                                    <li>Băng tần: 2.4GHz5GHz</li>
                                    <li>Số ăng-ten: 4 ăng ten 5dBi</li>
                                    <li>Truy cập tối đa: 30 - 40 user</li>
                                    <li>Mật độ phủ sóng: 30 - 40 m</li>
                                    <li> Hãng: TP-Link</li>
                                </ul>
                                <p className="card-text">1.299.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/wifi/routerwifi/ac750.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Router Wifi Chuẩn Wifi 6 AX1500 TP-Link Archer AX10 Đen</h6>
                                <ul>
                                    <li>Tốc độ: 300 Mbps (băng tần 2.4GHz)1201 Mbps (băng tần 5GHz)</li>
                                    <li>Băng tần: 2.4GHz5GHz</li>
                                    <li>Số ăng-ten: 4 ăng ten 5dBi</li>
                                    <li>Truy cập tối đa: 30 - 40 user</li>
                                    <li>Mật độ phủ sóng: 30 - 40 m</li>
                                    <li> Hãng: TP-Link</li>
                                </ul>
                                <p className="card-text">1.299.000đ</p>
                        </div>
                    </Col>
                    
                    
             </Row>  
            </div>
        );
    }
}

export default Routerwifi;