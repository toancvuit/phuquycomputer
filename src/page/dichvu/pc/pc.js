import React from 'react';
import './pc.css'
import {Col,Row} from 'react-bootstrap';
class PC extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <h3 className='color-title'>Sửa chữa - Lắp đặt pc</h3>
                    <ul className='no-list-item'>
                        <li>Lắp đặt pc theo yêu cầu</li>
                        <li>Bảo hành miễn phí</li>
                        <li>Sửa chữa pc</li>
                    </ul>
                    
             </Row>  
            </div>
        );
    }
}

export default PC;