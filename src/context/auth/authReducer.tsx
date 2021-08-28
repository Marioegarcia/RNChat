import { Usuario } from "../../interface/appInterface"

export interface AuthState {
    status:'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    usuario: Usuario | null;

}

type AuthAction = 
    | { type: 'signUp',payload: {token:string,usuario:Usuario} }
    | { type: 'addError',payload: string }
    | { type: 'removeError'}
    | { type: 'notAuthenticated'}
    | { type: 'logout'}


    export const authReducer = (state:AuthState, action:AuthAction): AuthState => {

        switch (action.type) {
            case 'addError':
               
                
                return {
                    ...state,
                    errorMessage: action.payload,
                    usuario:null,
                    status: 'not-authenticated',
                    token:null
                }
                
            case 'removeError':
                return {
                    ...state,
                    errorMessage:''
                }
            case 'signUp' : 
                return {
                    ...state,
                    errorMessage:'',
                    status:'authenticated',
                    token: action.payload.token,
                    usuario: action.payload.usuario
                }

            case'logout':
            case 'notAuthenticated' : 
                return {
                    ...state,
                    status:'not-authenticated',
                    token: null,
                    usuario: null
                }
            default:
                return state;
        }
    }