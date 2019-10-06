import axios from 'axios';
import {config} from '../../util/config';

import  AsyncStorage  from '@react-native-community/async-storage';

export default class TarefasRest {
  get() {
    return new Promise(async (resolve, reject) => {
      axios.get(config.basedir+'/todos')
        .then((response) => {
            if(response && response.data){
              let newData = JSON.stringify(response.data);
              AsyncStorage.setItem('todos', newData);
              resolve();
            }else{
              resolve();
            }
        },()=>{
          reject();
        });
    });
  }

}

