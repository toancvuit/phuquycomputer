import React from 'react';
import './asus.css'
import {Col,Row} from 'react-bootstrap';
class Asus extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/laptop/asus/zenbook.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Asus ZenBook</h6>
                            <ul>
                                <li>13.3 in</li>
                                <li>Core i7</li>
                                <li>Ram 16G</li>
                                <li>SSD 1T</li>
                                <li>Intel Iris Xe Graphics</li>
                                <li> 1.3 kg</li>
                            </ul>
                            <p className="card-text">26.000.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/laptop/asus/x415ae.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Laptop Asus Vivobook X415EA-EB935W i3 1115G4/8GB/256GB SSD/Win11</h6>
                            <ul>
                                <li>14 in</li>
                                <li>Intel Core i3-1115G4</li>
                                <li>Ram DDR 8G</li>
                                <li>SSD 256G</li>
                                <li>Intel Iris Xe Graphics</li>
                                <li> 1.6 kg</li>
                            </ul>
                            <p className="card-text">14.099.000đ</p>
                    </div>
                </Col>
                
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/laptop/asus/x415ae.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Laptop Asus Vivobook X515MA-BR478W N4020/4GB/256GB SSD/Win11</h6>
                            <ul>
                                <li>15.6 in</li>
                                <li>Intel Celeron N4020</li>
                                <li>Ram DDR4 4G</li>
                                <li>SSD 256G</li>
                                <li>Intel UHD Graphics</li>
                                <li> 1.8 kg</li>
                            </ul>
                            <p className="card-text">8.699.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/laptop/asus/x415ae.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Laptop Asus Vivobook X515FA-EJ007T i3 10110U/8GB/256GB SSD/Win10</h6>
                            <ul>
                                <li>15.6 in</li>
                                <li>Intel Core i3-10110U</li>
                                <li>Ram DDR4 4G</li>
                                <li>SSD 256G</li>
                                <li>Intel UHD Graphics</li>
                                <li> 1.8 kg</li>
                            </ul>
                            <p className="card-text">13.199.000đ</p>
                    </div>
                </Col>
                
             </Row>  
            </div>
        );
    }
}

export default Asus;