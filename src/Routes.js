import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';


import { connect } from 'react-redux';

import Loading from './screen/loading';
import Login from './screen/login';
import Drawer from './components/drawer';
import Home from './screen/home';
import User from './screen/user';




class RouterClass extends Component{

    render(){
        return (
            
            <Router>

                <Scene key="root">

                    <Scene drawer
                            hideNavBar
                            key="drawerMenu"
                            contentComponent={Drawer}
                            drawerWidth={null}
                            drawerPosition='left'
                    >

                        <Scene key='loading' component={Loading} hideNavBar />
                        <Scene key='login' component={Login} hideNavBar />
                        

                        <Stack key="stack1">

                            <Scene key='home' hideDrawerButton component={Home} hideNavBar />
                            <Scene key='user' hideDrawerButton component={User} hideNavBar />

                        </Stack>

                    </Scene>

                </Scene>
            </Router>
        ); 

    }
}
const mapStateToProps = state => (
    {
        
    }
)

export default connect(mapStateToProps, {})(RouterClass);