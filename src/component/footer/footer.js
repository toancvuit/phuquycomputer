import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './footer.css'

class Footer extends React.Component{
  render() {
    return  (
      <div className='footer-color'>
          <div className="row">
            <div className="col">
              <h5>
                TRUNG TÂM TIN HỌC ĐIỆN TỬ PHÚ QUÝ
              </h5>
            </div>
            <div className="col">
              <div className="d-flex justify-content-start">Di Động: 0908 689898</div>
              <div className="d-flex justify-content-start">Điện thoại: 056 3865 456</div>
              <div className="d-flex justify-content-start">Email: phulv2001@yahoo.com</div>
              <div className="d-flex justify-content-start">
                Địa chỉ: Tân Thành - Tam Quan Bắc - Hoài Nhơn - Bình Định
              </div>
            </div>
          </div>
</div>
    )
  }
}

export default Footer;