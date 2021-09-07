import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


function Sidebar(props) {
    return (
        <div>
            
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <h3 className="text-center text-white">Mi cuenta</h3>

        <div className="center">
        <img src="https://github.com/mdo.png" width="45" height="45" className="rounded-circle "/>
        </div>
           
        
        <h5 className='text-center text-white' style={{ whiteSpace: 'nowrap' }}>Hola,</h5>
        <span className="d-none d-sm-inline mx-4 text-white">Jorge David Gomez Perez</span>
        
        <NavItem eventKey="m_finanzas">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Mis finanzas
            </NavText>
        </NavItem>
        <NavItem eventKey="creditos">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Créditos
            </NavText>
        </NavItem>
        <NavItem eventKey="productos">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Productos
            </NavText>
        </NavItem>
        <NavItem eventKey="seguridad">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Seguridad
            </NavText>
        </NavItem>
        {/* <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Line Chart
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Bar Chart
                </NavText>
            </NavItem>
        </NavItem> */}
    </SideNav.Nav>
</SideNav>

        </div>
    );
}

export default Sidebar;