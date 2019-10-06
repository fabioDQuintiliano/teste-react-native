const INITIAL_STATE = {
    nome:'',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'USER_LOAD':
            return { ...state, loading: true };
        case 'USER_LOGIN':
           
            let USER_LOGIN = { ...state};
                USER_LOGIN.nome = action.payload.nome
                USER_LOGIN.loading = false;
           
            return USER_LOGIN;
        case 'LOGOUT_APP':
            return { ...state, ...INITIAL_STATE };
        case 'USER_SET':
            return { ...state, nome: action.payload };
        default:
            return state;
    }
}
