import React from 'react';
import './loa.css'
import {Col,Row} from 'react-bootstrap';
class Loa extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/loa/b26.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Loa vi tính Microlab B26 </h6>
                                <ul>
                                    <li>Tổng công suất: 4W</li>
                                    <li>Nguồn: Cắm điện dùng</li>
                                    <li>Số lượng kênh: 2.0 kênh</li>
                                    <li>Kết nối khác: AUX, USB</li>
                                    <li> Hãng: Microlab</li>
                                </ul>
                                <p className="card-text">269.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Loa;