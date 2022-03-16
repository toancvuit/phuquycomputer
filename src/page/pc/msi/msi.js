import React from 'react';
import './msi.css'
import {Col,Row} from 'react-bootstrap';
class Mainmsi extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/msi/h510.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard MSI H510M PRO-E</h6>
                            <ul>
                                <li>Socket: LGA1200 hỗ trợ CPU intel thế hệ 10 và thế hệ 11</li>
                                <li>Kích thước: microATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCI-E X16, 2 x PCI-E X1    </li>
                                <li>Khe cắm ổ cứng: 4 x SATAIII</li>
                            </ul>
                            <p className="card-text">1.900.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/msi/h410.png"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard MSI H410M PRO-E</h6>
                            <ul>
                                <li>Socket: Socket 1200 hỗ trợ CPU intel thế hệ 10</li>
                                <li>Kích thước: microATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCI-E X16, Gen3 x PCI-E GEN, 2 x PCI-E X1</li>
                                <li>Khe cắm ổ cứng: 4 x SATAIII</li>
                            </ul>
                            <p className="card-text">1.700.000đ</p>
                    </div>
                </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Mainmsi;