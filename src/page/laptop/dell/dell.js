import React from 'react';
import './dell.css'
import {Col,Row} from 'react-bootstrap';
class Dell extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron 15 N3511 i3 </h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Core i3</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 256G</li>
                                    <li>Intel UHD Graphics</li>
                                    <li> 1.33 kg</li>
                                </ul>
                                <p className="card-text">14.799.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron N3510 N4020</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Celeron</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 600</li>
                                    <li> 1.65 kg</li>
                                </ul>
                                <p className="card-text">10.699.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron N3510 Pentium N5030</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Pentium</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 605</li>
                                    <li> 1.65 kg</li>
                                </ul>
                                <p className="card-text">11.299.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron N3510 Celeron N4020</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Cleron</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 600</li>
                                    <li> 1.65 kg</li>
                                </ul>
                                <p className="card-text">10.699.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron N3502 N4020</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Cleron</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 600</li>
                                    <li> 1.83 kg</li>
                                </ul>
                                <p className="card-text">10.699.000đ</p>
                        </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/dell/n3511.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Dell Inspiron N3502 Pentium N5030</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>Pentium</li>
                                    <li>Ram 4G</li>
                                    <li>SSD 128G</li>
                                    <li>Intel UHD Graphics 605</li>
                                    <li> 1.83 kg</li>
                                </ul>
                                <p className="card-text">10.699.000đ</p>
                        </div>
                    </Col>
             </Row>  
            </div>
        );
    }
}

export default Dell;