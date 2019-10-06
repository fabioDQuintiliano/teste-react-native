import React, { Component, } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';

import RoutesClass from './Routes';
import reducers from './reducers';
import { View } from 'react-native';
import LoginService from './services/login';
import Sincroniza from './services/sincroniza';

import {setUser} from "./actions/UserActions";

class App extends Component {


    checkUpdate(){
        return new Promise(async (resolve, reject) => {
            let sinc = new Sincroniza();
            sinc.startSinc().then(()=>{
                console.log('Sincromizar');
                resolve();
            },()=>{
                reject();
            })
        })
    }
    checkLoginStatus(){
        /*
        verifica se o usuário já esta logado.
        se estiver, redireciona para a tela inicial.
        caso contrário, redireciona para a tela de login.
        */
        return new Promise(async (resolve, reject) => {
            let login = new LoginService();
            login.checkLoginStatus().then((r)=>{
            
                global.store.dispatch(setUser(r.nome));

                this.checkUpdate().then(()=>{
                    Actions.home();
                },()=>{
                    Actions.home();  
                });
               
            },()=>{
                
                Actions.login();
            });
        });
    }
    componentDidMount() {
        GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
        this.checkLoginStatus();
        
    }

    render() {
        global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <View style={{flex: 1}}>
                <Provider store={global.store}>
                    <RoutesClass />
                </Provider>                
            </View>
        );
    }
}

export default App;
