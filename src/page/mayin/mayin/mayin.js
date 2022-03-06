import React from 'react';
import './mayin.css'
import {Col,Row} from 'react-bootstrap';
import canon2900 from '../../../public/mayin/canon2900.PNG'
class Mayin extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mayin/canon2900.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Máy In Laser Trắng Đen LBP2900</h6>
                            <p className="card-text">3.600.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mayin/hp4ry23a.png" } className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Máy In Laser Trắng Đen HP Neverstop Laser 1000w Wifi (4RY23A) </h6>
                            <p className="card-text">3.190.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mayin/brotherl2520d.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Máy In Laser Trắng Đen HP Neverstop Laser 1000w Wifi (4RY23A) </h6>
                            <p className="card-text">4.390.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mayin/hp4zb78a.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Máy in Laser Trắng Đen HP 107w WiFi (4ZB78A)</h6>
                            <p className="card-text">2.990.000đ</p>
                         </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/mayin/hp4zb77a.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Máy in Laser Trắng Đen HP 107a (4ZB77A)</h6>
                            <p className="card-text">2.590.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                    <img src={process.env.PUBLIC_URL + "/mayin/hp4zb82a.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                    <div className="card-body">
                        <h6 className="card-title">Máy in HP Laser Trắng đen đa năng In scan copy LaserJet 135a (4ZB82A)</h6>
                        <p className="card-text">3.490.000đ</p>
                     </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                    <img src={process.env.PUBLIC_URL + "/mayin/hpz4b53a.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                    <div className="card-body">
                        <h6 className="card-title">Máy In Phun Màu HP đa năng in scan copy Ink Tank 415 WiFi (Z4B53A)</h6>
                        <p className="card-text">3.690.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                    <img src={process.env.PUBLIC_URL + "/mayin/canonTR4570s.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                    <div className="card-body">
                        <h6 className="card-title">Máy in phun màu Canon TR4570S đa năng In-scan-copy-fax WiFi</h6>
                        <p className="card-text">3.890.000đ</p>
                    </div>
                 </Col>  
                <Col className='card col-12 col-sm-3'>
                    <img src={process.env.PUBLIC_URL + "/mayin/canonTR4570s.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                    <div className="card-body">
                        <h6 className="card-title">Máy in phun màu Canon TR4570S đa năng In-scan-copy-fax WiFi</h6>
                        <p className="card-text">3.890.000đ</p>
                </div>
                    
                </Col>
             </Row>  
            </div>
        );
    }
}

export default Mayin;