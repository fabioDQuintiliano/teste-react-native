import axios from 'axios';
import {config} from '../../util/config';

import  AsyncStorage  from '@react-native-community/async-storage';

export default class UsersRest {
  get() {
    return new Promise(async (resolve, reject) => {
      axios.get(config.basedir+'/users')
        .then((response) => {
            if(response && response.data){
              let newData = JSON.stringify(response.data);
              AsyncStorage.setItem('users', newData);
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

