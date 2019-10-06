import UsersRest from './rest/users';
import TarefasRest from './rest/tarefas';
export default class Sincroniza {



    startSinc(){
        return new Promise(async (resolve, reject) => {
            let todos = new TarefasRest();
            let users = new UsersRest();

            todos.get().then(()=>{
                users.get().then(()=>{
                    resolve();
                },reject)
            },reject);
        })
    }

}