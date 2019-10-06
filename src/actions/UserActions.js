import { Actions } from 'react-native-router-flux';
import LoginService from '../services/login';
import Sincroniza from '../services/sincroniza';


const checkUpdate = () => {
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
export const login_app = (obj) => {
    return dispatch => {
        dispatch({ type: 'USER_LOAD' });
        console.log('logando')
        let login = new LoginService();
        login.saveLogin(obj).then(()=>{
            checkUpdate().then(()=>{
                dispatch({ type: 'USER_LOGIN', payload: obj });
                Actions.home();
            },()=>{
                dispatch({ type: 'USER_LOGIN', payload: obj });
                Actions.home();  
            });
           
          
        },()=>{
            dispatch({ type: 'USER_ERRO' });
            alert.show("Algo deu errado. Por favor, tente novamente.","Ops.")
        });


    }
}

export const logout_app = (obj) => {
    return dispatch => {
        dispatch({ type: 'USER_LOAD' });

        let login = new LoginService();
            login.logout().then(()=>{
                dispatch({ type: 'LOGOUT_APP' });
               
                Actions.login();
            },()=>{
                dispatch({ type: 'USER_ERRO' });
                Actions.login();

            })

    }
}

export const setUser = (nome) => {
    return dispatch => {

        console.log('fdskjfhjkds fksdkjf kjdshf ksdjh fkjdsh',nome)
        dispatch({ type: 'USER_SET',payload:nome });

    }
}