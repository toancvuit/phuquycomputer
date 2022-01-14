import React from 'react';
import './gigabyte.css'
import {Col,Row} from 'react-bootstrap';
class Maingigabyte extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/gigabyte/h510m.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard GIGABYTE H510M S2H</h6>
                            <ul>
                                <li>Socket: LGA1200 hỗ trợ CPU intel thế hệ 10 và thế hệ 11</li>
                                <li>Kích thước: microATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCI Express x16 slot, 1 x PCI Express x1 slot</li>
                                <li>Khe cắm ổ cứng: 1 x M.2 connector, 4 x SATA 6Gb/s</li>
                            </ul>
                            <p className="card-text">2.000.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/main/gigabyte/h410m.PNG"} className="card-img-top width-image-mayin" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mainboard GIGABYTE H410M DS2V V3</h6>
                            <ul>
                                <li>Socket: Socket 1200 hỗ trợ CPU intel thế hệ 10</li>
                                <li>Kích thước: microATX</li>
                                <li>Khe cắm RAM: 2 khe (Tối đa 64GB)</li>
                                <li>Khe cắm mở rộng: 1 x PCI Express x16 slot, 1 x PCI Express x1 slot</li>
                                <li>Khe cắm ổ cứng: 1 x M.2 connector, 4 x SATA 6Gb/s</li>
                            </ul>
                            <p className="card-text">1.700.000đ</p>
                    </div>
                </Col>
                    
             </Row>  
            </div>
        );
    }
}

export default Maingigabyte;