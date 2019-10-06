import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import {config} from '../util/config';

import  AsyncStorage  from '@react-native-community/async-storage';

export const get_lista_tarefas = (login) => {
    return dispatch => {
        dispatch({ type: 'TAREFAS_LOAD' });
      
        AsyncStorage.getItem('users').then((dataUsers)=>{
            let arrUsers = JSON.parse(dataUsers);
            
            AsyncStorage.getItem('todos').then((data)=>{
                let arr = JSON.parse(data);

                let lista = arr.map((item)=>{
                    let pessoa = '';
                    for(let key in arrUsers){
                        if(arrUsers[key].id == item.userId){
                            pessoa = arrUsers[key];
                            break;
                        }
                    }
                    item.user = pessoa;
                    return item;

                })
                dispatch({ type: 'TAREFAS_GET', payload: lista });
            });
        });
            
      

    }
}
