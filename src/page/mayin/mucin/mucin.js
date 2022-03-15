import React from 'react';
import './mucin.css'
import {Col,Row} from 'react-bootstrap';

class Mucin extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mucin/canon12a.jpg"} class="card-img-top width-image-mucin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mực in nạp chuyên dụng cho phôi chính hãng Canon 6230- hộp mực 78A-12A</h6>
                            <p className="card-text">70.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mucin/canong1010.png"} class="card-img-top width-image-mucin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">In Canon G1010</h6>
                            <p className="card-text">200.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mucin/hpm402.png"} class="card-img-top width-image-mucin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mực chai Hp M402</h6>
                            <p className="card-text">90.000đ</p>
                    </div>
                </Col>
             </Row>  
            </div>
        );
    }
}

export default Mucin;