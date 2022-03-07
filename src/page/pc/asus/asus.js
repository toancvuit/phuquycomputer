import React from 'react';
import './asus.css'
import {Col,Row} from 'react-bootstrap';
class Mainasus extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/asus/h510m.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard Asus EX-H510M-V3</h6>
                            <ul>
                                <li>Socket: LGA1200 hỗ trợ CPU intel thế hệ 10 và thế hệ 11</li>
                                <li>Kích thước: microATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCIe 4.0/3.0 x16 slot, 1 x PCIe 3.0 x1 slot</li>
                                <li>Khe cắm ổ cứng: 3 x SATA 6Gb/s ports</li>
                            </ul>
                            <p className="card-text">2.000.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/asus/h410m.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard ASUS PRIME H410M-K</h6>
                            <ul>
                                <li>Socket: Socket 1200 hỗ trợ CPU intel thế hệ 10</li>
                                <li>Kích thước: m-ATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCIe 3.0 x16 (x16 mode), 2 x PCIe 3.0 x1</li>
                                <li>Khe cắm ổ cứng: 4 x SATA 6Gb/s port(s)</li>
                            </ul>
                            <p className="card-text">1.800.000đ</p>
                    </div>
                </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Mainasus;