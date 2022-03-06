import React from 'react';
import {Row,Navbar, Nav,NavDropdown} from 'react-bootstrap'
import './header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
       return (
        
            <Navbar bg="light" expand="lg" className='none-flex'>
                <Row>
                <Navbar.Brand className='header-color'>
                    <div className='display-inline'>
                        <Link to="/" className='text-decoration display-inline'>
                        <img src={process.env.PUBLIC_URL + '/logo/logo.PNG'}  height='100' width='auto' alt="logo" />
                            <h2 className='font-weigth'>TRUNG TÂM TIN HỌC ĐIỆN TỬ <br/>
                                PHÚ QUÝ</h2>
                        </Link>
                        
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='color-menu' >
                    <Nav className="me-auto d-flex justify-content-between container margin-top-bottom">
                        <NavDropdown title={<span className='title-color'>Laptop</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/laptop/asus">Asus</NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/dell">Dell</NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/acer">Acer</NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/lenovo">Lenovo</NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/hp">Hp</NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>PC-Máy bàn</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/main/asus">Main asus</NavDropdown.Item>
                            <NavDropdown.Item href="/main/gigabyte">Main gigabyte</NavDropdown.Item>
                            <NavDropdown.Item href="/main/gigabyte">Main msi</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Màn hình</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="/manhinh/lg"><Link to="/manhinh/lg" className='text-decoration'>LG</Link></NavDropdown.Item> */}
                            <NavDropdown.Item href="/manhinh/lg">LG</NavDropdown.Item>
                            <NavDropdown.Item href="/manhinh/hp">HP</NavDropdown.Item>
                            <NavDropdown.Item href="/manhinh/hp">Provision</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Phụ kiện</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/phukien/loa">Loa</NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/chuot">Chuột</NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/banphim">Bàn phím</NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/tainghe">Tai nghe</NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/ocung">Ổ cứng</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Máy in</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/mayin/mayin">Máy in</NavDropdown.Item>
                            <NavDropdown.Item href="/mayin/mucin"> Mực in</NavDropdown.Item>
                            <NavDropdown.Item href="/mayin/hopmuc">Hộp mực</NavDropdown.Item>
                            </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Camera</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/camera/coday">Có dây</NavDropdown.Item>
                            <NavDropdown.Item href="/camera/khongday">Không dây</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Wifi</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/wifi/routerwifi">Router wifi</NavDropdown.Item>
                            <NavDropdown.Item href="/wifi/hubwifi">Bộ mở rộng wifi</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={<span className='title-color'>Dịch Vụ</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/dichvu/sualaptop">Sửa laptop</NavDropdown.Item>
                            <NavDropdown.Item href="/dichvu/pc">Sửa chữa lắp đặt PC</NavDropdown.Item>
                            <NavDropdown.Item href="/dichvu/camera">Lắp đặt camera</NavDropdown.Item>
                            <NavDropdown.Item href="/dichvu/mayin">Lắp đặt - sửa chữa máy in</NavDropdown.Item>
                            <NavDropdown.Item href="/dichvu/baotrinet">Bảo trì phòng net</NavDropdown.Item>
                            <NavDropdown.Item href="/dichvu/suachuatannha">Sữa chữa máy tính tận nha</NavDropdown.Item>
                            <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
                        
                        </NavDropdown>
                    
                    </Nav>
                </Navbar.Collapse>
                </Row>
        </Navbar>
        
       );
    }
 }
 export default Header;