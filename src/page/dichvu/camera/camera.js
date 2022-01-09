import React from 'react';
import './camera.css'
import {Col,Row} from 'react-bootstrap';
class Camera extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <h3 className='color-title'>Lắp đặt camera</h3>
                    <ul className='no-list-item'>
                        <li>Lắp đặt camera theo yêu cầu</li>
                        <li>Camera dây, camera wifi</li>
                        
                    </ul>
                    
             </Row>  
            </div>
        );
    }
}

export default Camera;