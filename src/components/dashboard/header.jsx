import React from 'react';
import {
    Nav,
    NavItem,
    Navbar,
    NavbarBrand,
    Collapse,
    DropdownItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEdit, faPaperclip, faCheck,faAlignJustify } from '@fortawesome/free-solid-svg-icons'



// import profilephoto from '../../assets/images/users/1.jpg';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
// import logodarkicon from '../../assets/images/logo-icon.png';
 import logolighticon from '../../assets/images/g6136.png';
// import logodarktext from '../../assets/images/logo-text.png';
// import logolighttext from '../../assets/images/logo-light-text.png';

const Header = (props) => {

    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/


    return (
        <header className="topbar navbarbg" data-navbarbg="skin6">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                   
                    <NavbarBrand >
                    
                    <button className="btn btn-light toggle-b d-md-none" type="button" onClick={()=>{props.visibleMenu()}}>
                       <FontAwesomeIcon icon={faAlignJustify}/>
                    </button>



                        <b className="logo-icon">
                            {/* <img src={logodarkicon} alt="homepage" className="dark-logo" />*/}
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            /> 
                        </b>
                        <span className="logo-text">
                            {/* <img src={logodarktext} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighttext}
                                className="light-logo"
                                alt="homepage"
                            /> */}
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                  

                </div>
                <Collapse className="navbarbg" navbar data-navbarbg="skin6" >
                    <Nav className="ml-auto float-right" navbar>
                        <NavItem>
                        <button className="btn btn-light toggle-b " type="button" onClick={()=>{props.visibleMenu()}}>
                       <FontAwesomeIcon icon={faAlignJustify}/>
                    </button>
                           
                        </NavItem>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="pro-pic">
                                {/* <img
                                    src={profilephoto}
                                    alt="user"
                                    className="rounded-circle"
                                    width="31"
                                /> */}
                            </DropdownToggle>
                            <DropdownMenu right className="user-dd">
                                <DropdownItem>
                                    <i className="ti-user mr-1 ml-1" /> My Account
                  </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-wallet mr-1 ml-1" /> My Balance
                  </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-email mr-1 ml-1" /> Inbox
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <i className="ti-settings mr-1 ml-1" /> Account Settings
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/pages/login">
                                    <i className="fa fa-power-off mr-1 ml-1" /> Logout
                  </DropdownItem>
                                <DropdownItem divider />
                                <Button
                                    color="success"
                                    className="btn-rounded ml-3 mb-2 mt-2"
                                >
                                    View Profile
                  </Button>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
