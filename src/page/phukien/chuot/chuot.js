import React from 'react';
import './chuot.css'
import {Col,Row} from 'react-bootstrap';
class Chuot extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/chuot/eblue.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Chuột E-Blue EMS146 Pro</h6>
                                <p className="card-text">95.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/chuot/logitech.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Chuột Không Dây Logitech B175</h6>
                                <p className="card-text">176.000đ</p>
                        </div>
                    </Col>
                    
              
             </Row>  
             
            </div>
        );
    }
}

export default Chuot;