import React from 'react';
import './lenovo.css'
import {Col,Row} from 'react-bootstrap';
class Lenovo extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <Col className='card col-12 col-sm-3'>
                        <img src={process.env.PUBLIC_URL + "/laptop/lenovo/ideapad.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                            <div className="card-body">
                                <h6 className="card-title">Laptop Lenovo IdeaPad Slim 3 15ADA05 R5 3500U/8GB/512GB SSD/15.6HD Touch/Win 10</h6>
                                <ul>
                                    <li>15.6 in</li>
                                    <li>AMD Ryzen 5-3500U</li>
                                    <li>RAM DDR4 8G</li>
                                    <li>SSD 512G</li>
                                    <li>AMD Radeon Graphics Vega 8</li>
                                    <li> 1.85 kg</li>
                                </ul>
                                <p className="card-text">13.499.000đ</p>
                        </div>
                    </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Lenovo;