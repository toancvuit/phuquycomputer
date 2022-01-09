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
                            <NavDropdown.Item href="/laptop/asus"><Link to="/laptop/asus" className='text-decoration'>Asus</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/dell"><Link to="/laptop/dell" className='text-decoration'>Dell</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/acer"><Link to="/laptop/acer" className='text-decoration'>Acer</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/lenovo"><Link to="/laptop/lenovo" className='text-decoration'>Lenovo</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/laptop/hp"><Link to="/laptop/hp" className='text-decoration'>Hp</Link></NavDropdown.Item>
                            
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>PC-Máy bàn</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Main Asus</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Main gigabyte</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Main Intel</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Main msi</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Màn hình</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/manhinh/lg"><Link to="/manhinh/lg" className='text-decoration'>LG</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/manhinh/hp"><Link to="/manhinh/hp" className='text-decoration'>HP</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/manhinh/hp"><Link to="/manhinh/provision" className='text-decoration'>Provision</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Phụ kiện</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/phukien/loa"><Link to="/phukien/loa" className='text-decoration'>Loa</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/chuot"><Link to="/phukien/chuot" className='text-decoration'>Chuột</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/banphim"><Link to="/phukien/banphim" className='text-decoration'>Bàn phím</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/tainghe"><Link to="/phukien/tainghe" className='text-decoration'>Tai nghe</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/phukien/ocung"><Link to="/phukien/ocung" className='text-decoration'>Ổ cứng</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Máy in</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/mayin/mayin"><Link to="/mayin/mayin" className='text-decoration'>Máy in</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/mayin/mucin"><Link to="/mayin/mucin" className='text-decoration'> Mực in</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/mayin/hopmuc"><Link to="/mayin/hopmuc" className='text-decoration'>Hộp mực</Link></NavDropdown.Item>
                            </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Camera</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/camera/coday"><Link to="/camera/coday" className='text-decoration'>Có dây</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/camera/khongday"><Link to="/camera/khongday" className='text-decoration'>Không dây</Link></NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Wifi</span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                            <NavDropdown.Item href="/wifi/routerwifi"><Link to="/wifi/routerwifi" className='text-decoration'>Router wifi</Link></NavDropdown.Item>
                            <NavDropdown.Item href="/wifi/hubwifi"><Link to="/wifi/hubwifi" className='text-decoration'>Bộ mở rộng wifi</Link></NavDropdown.Item>
                            </NavDropdown>
                        <NavDropdown title={<span className='title-color'>Dịch Vụ   </span>} id="basic-nav-dropdown" className="basic-nav-dropdown">
                        <NavDropdown.Item href="/laptop/hp"><Link to="/dichvu/sualaptop" className='text-decoration'>Sửa laptop</Link></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Lắp đặt - Sửa PC</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Lắp đặt Camera</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Lắp đặt - Sửa chữa máy in</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Bảo trì phòng net</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Sửa chữa tận nhà</NavDropdown.Item>
                        
                        </NavDropdown>
                    
                    </Nav>
                </Navbar.Collapse>
                </Row>
        </Navbar>
        
       );
    }
 }
 export default Header;