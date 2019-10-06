const INITIAL_STATE = {
    lista:[],
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGOUT_APP':
            return { ...state, ...INITIAL_STATE };
        case 'TAREFAS_LOAD':
            return { ...state, loading: true };
        case 'TAREFAS_GET':
          
            let TAREFAS_GET = { ...state};
                TAREFAS_GET.lista = action.payload
                TAREFAS_GET.loading = false;
           
            return TAREFAS_GET;
        default:
            return state;
    }
}
