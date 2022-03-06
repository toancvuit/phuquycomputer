import React from 'react';
import {Row, Col} from 'react-bootstrap';
import logo from '../../public/logo.PNG';
import './home.css'

class Home extends React.Component {
    render () {
        return (
            <div className='margin-home container'>
                <h4>SẢN PHẨM VÀ DỊCH VỤ</h4>
                <br/>
                <br/>
                <Row >
                    <Col className='card col-12 col-sm-3'>
                        <img src='./home/laptop.png' className="card-img-top width-image" alt="laptop"/>
                        <div className="card-body">
                            <h5 className="card-title">Laptop</h5>
                            <p className="card-text">Chuyên mua bán các loại laptop</p>
                         </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/pc.png" className="card-img-top width-image" alt="pc"/>
                        <div className="card-body">
                            <h5 className="card-title">PC - Máy bàn</h5>
                            <p className="card-text">Lắp đặt các loại máy bàn theo yêu cầu ...</p>
                             </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/manhinh.png" className="card-img-top width-image" alt="manhinh"/>
                        <div className="card-body">
                            <h5 className="card-title">Màn hình</h5>
                            <p className="card-text">Cung cấp các loại màn hình ...</p>
                             </div>
                    </Col>
                    
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/phukien.PNG" className="card-img-top width-image" alt="phukien"/>
                        <div className="card-body">
                            <h5 className="card-title">Phụ kiện</h5>
                            <p className="card-text">Bán các loại chuột, bàn phím, loa, tai nghe (các loại thiết bị ngoại vi)</p>
                         </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/mayin.png" className="card-img-top width-image" alt="mayin"/>
                        <div className="card-body">
                            <h5 className="card-title">Máy in</h5>
                            <p className="card-text">Bán các loại máy in canon, hp, brother ...</p>
                             </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/camera.png" className="card-img-top width-image" alt="camera"/>
                        <div className="card-body">
                            <h5 className="card-title">Camera</h5>
                            <p className="card-text">Lắp đặt các loại camera ...</p>
                             </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <img src="./home/wifi.png" className="card-img-top width-image" alt="wifi"/>
                        <div className="card-body">
                            <h5 className="card-title">Wifi</h5>
                            <p className="card-text">Bán các loại wifi ...</p>
                         </div>
                    </Col>
                    <Col className='card col-12 col-sm-3'>
                        <div className="card-body">
                            <h5 className="card-title">Dịch vụ</h5>
                            <ul>
                                <li>Sửa chữa laptop</li>
                                <li>Sửa chữa máy tính bàn - màn hình</li>
                                <li>Lắp đặt camera</li>
                                <li>Lắp đặt sửa chữa máy in</li>
                                <li>Sửa chữa bảo thì tiệm net</li>
                                <li>Sửa chữa tận nhà</li>
                            </ul>
                         </div>
                        
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Home;