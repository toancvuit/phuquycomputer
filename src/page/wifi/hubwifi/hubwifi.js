import React from 'react';
import './hubwifi.css'
import {Col,Row} from 'react-bootstrap';
class Hubwifi extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/wifi/hubwifi/tlwa850re.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Router Wifi Chuẩn Wifi 6 AX1500 TP-Link Archer AX10 Đen</h6>
                                <ul>
                                    <li>Tốc độ: 300 Mbps</li>
                                    <li>Băng tần: 2.4GHz</li>
                                    <li>Số ăng-ten: 2 Anten ngầm</li>
                                    <li>Truy cập tối đa: 10 user</li>
                                    <li>Mật độ phủ sóng: 28 m</li>
                                    <li> Hãng: TP-Link</li>
                                </ul>
                                <p className="card-text">289.000đ</p>
                        </div>
                    </Col>
                    
                    
                    
             </Row>  
            </div>
        );
    }
}

export default Hubwifi;