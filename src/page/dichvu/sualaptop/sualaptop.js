import React from 'react';
import './sualaptop.css'
import {Col,Row} from 'react-bootstrap';
class Sualaptop extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <h3 className='color-title'>Chuyên sửa chữa laptop</h3>
                    <ul className='no-list-item'>
                        <li>Thay màn hình</li>
                        <li>Thay pin</li>
                        <li>Sửa nguồn</li>
                        <li>Sửa loa, wifi, camera</li>
                        <li>Thay bàn phím</li>
                    </ul>
                    
             </Row>  
            </div>
        );
    }
}

export default Sualaptop;