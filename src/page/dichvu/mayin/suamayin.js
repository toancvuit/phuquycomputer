import React from 'react';
import './suamayin.css'
import {Col,Row} from 'react-bootstrap';
class Suamayin extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <h3 className='color-title'>Lắp đặt - Sửa chữa máy in</h3>
                    <ul className='no-list-item'>
                        <li>Lắp đặt máy in theo yêu cầu</li>
                        <li>Sửa chữa máy in</li>
                        <li>Bơm mực</li>
                        <li>Kiểm tra hộp mực</li>
                        
                    </ul>
                    
             </Row>  
            </div>
        );
    }
}

export default Suamayin;