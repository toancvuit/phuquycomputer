import React from 'react';
import './ocung.css'
import {Col,Row} from 'react-bootstrap';
class Ocung extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/ocung/128g.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">SSD 128G EEKOO V100 2.5" SATA3</h6>
                                <p className="card-text">700.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/ocung/256g.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">SSD 256GB HIKVISION HS-SSD-E100(STD)/256G</h6>
                                <p className="card-text">1.00.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Ocung;