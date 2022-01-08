import React from 'react';
import './hopmuc.css'
import {Col,Row} from 'react-bootstrap';
class Hopmuc extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/hopmuc/canon2900.PNG"} className="card-img-top width-image-hopmuc" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Hộp mực/Cartridge máy in Canon 2900 (12A)</h6>
                            <p className="card-text">210.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/hopmuc/canon6030.PNG" } className="card-img-top width-image-hopmuc" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Hộp mực CanonLbp 6030/ 6030w Hàng nhập khẩu chất lượng cao </h6>
                            <p className="card-text">115.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/hopmuc/canon223dw.PNG"} className="card-img-top width-image-hopmuc" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Hộp mực Canon LBP 223dw, 226dw, MF445dw, MF449x (Mã mực Canon 057/ HP76A)</h6>
                            <p className="card-text">248.000đ</p>
                    </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/hopmuc/hpm404dn.PNG"} className="card-img-top width-image-hopmuc" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Hộp mực in HP 76A (CF276A) KHÔNG CHIP cho máy in HP Pro M404dn / M404DW / M428dnw</h6>
                            <p className="card-text">175.000đ</p>
                         </div>
                </Col>
                <Col className='card col-12 col-sm-3'>
                     <img src={process.env.PUBLIC_URL + "/hopmuc/brotherl2321d.PNG"} className="card-img-top width-image-hopmuc" alt="laptop"/>
                        <div className="card-body">
                            <h6 className="card-title">Mực in Brother Laser TN-2385 (dành cho HL-L2321D)</h6>
                            <p className="card-text">490.000đ</p>
                    </div>
                </Col>
             </Row>  
            </div>
        );
    }
}

export default Hopmuc;