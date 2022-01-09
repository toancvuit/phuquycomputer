import React from 'react';
import './baotrinet.css'
import {Col,Row} from 'react-bootstrap';
class Baotrinet extends React.Component {
    render () {
        return (
            <div className='container'>
                <Row>
                    <h3 className='color-title'>Bảo trì phòng net</h3>
                    <ul className='no-list-item'>
                        <li>Liên hệ: 0908 689898</li>
                        
                    </ul>
                    
             </Row>  
            </div>
        );
    }
}

export default Baotrinet;