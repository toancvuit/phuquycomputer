import React from 'react';
import './tainghe.css'
import {Col,Row} from 'react-bootstrap';
class Tainghe extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/tainghe/8900l.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Tai nghe game WANGMING 8900L</h6>
                                <p className="card-text">196.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/phukien/tainghe/t138.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Tai nghe có dây choàng đầu có mic i.value T-138 </h6>
                                <p className="card-text">359.200đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Tainghe;