import React from 'react';
import './banphim.css'
import {Col,Row} from 'react-bootstrap';
class Banphim extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/banphim/k120.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Bàn phím Logitech K120</h6>
                                <p className="card-text">159.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/banphim/lk145.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Bà̀n phím giả cơ Dareu LK145 Gaming</h6>
                                <p className="card-text">289.000đ</p>
                        </div>
                    </Col>
                    
              
             </Row>  
             
            </div>
        );
    }
}

export default Banphim;