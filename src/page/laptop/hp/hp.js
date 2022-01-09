import React from 'react';
import './hp.css'
import {Col,Row} from 'react-bootstrap';
class Hp extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/hp/n5030.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop HP 240 G8 Pentium N5030/4GB/256GB/14.0"HD/Win 10</h6>
                                <ul>
                                    <li>14 in</li>
                                    <li>Intel Pentium N5030</li>
                                    <li>RAM DDR4 4G</li>
                                    <li>SSD 256G</li>
                                    <li>Intel UHD Graphics 605</li>
                                    <li> 1.47 kg</li>
                                </ul>
                                <p className="card-text">10.390.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Hp;