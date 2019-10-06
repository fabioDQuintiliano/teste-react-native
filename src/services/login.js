import  AsyncStorage  from '@react-native-community/async-storage';

export default class LoginService{
    dados={};
    constructor() {
      
    }


    checkLoginStatus(){
        return new Promise(async (resolve, reject) => {
            try {
              
              let arr = [];
              let data = await AsyncStorage.getItem('dados_login');
              if (data && data != null && data != "") {
                arr = JSON.parse(data);
                this.dados = arr;
                resolve(arr);
              }else{
                this.dados = {};
                reject();
              }
            
              
            } catch (e) {
              reject(e);
            }
        });
    }


    saveLogin(dados){

  
      return new Promise(async (resolve, reject) => {
        let newData = JSON.stringify(dados);
        AsyncStorage.setItem('dados_login', newData);
        resolve();
      });


    }
    logout(){
      return new Promise(async (resolve, reject) => {
        
        AsyncStorage.removeItem('todos');
        AsyncStorage.removeItem('users');
        AsyncStorage.removeItem('dados_login');
        resolve();
      });

    }

    
  


}

