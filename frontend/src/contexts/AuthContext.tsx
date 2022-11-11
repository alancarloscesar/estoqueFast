import { createContext, ReactNode, useState, useEffect } from 'react';
import Router from 'next/router';
import { api } from '../services/apiClient'
import { destroyCookie, setCookie, parseCookies } from 'nookies'
import { toast } from 'react-hot-toast'
import { setupAPIClient } from '../services/api';



type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}

type UserProps = {
    id: number;
    name: string;
    email: string;
    access: string;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}


type AuthProviderProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token');

        toast.success(`Até logo.`, {
            style: {
                border: '1px solid #00DFBF',
                padding: '14px',
                color: '#00DFBF',
            },
            iconTheme: {
                primary: '#00DFBF',
                secondary: '#FFFAEE',
            },
        });

        Router.push('/');
    } catch (error) {
        console.log("Erro ao deslogar: " + error)
    }
}



export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;

    // useEffect(() => {
    //     const { '@nextauth.token': token } = parseCookies();

    //     if (token) {
    //         api.get('/me').then(response => {//se der certo a requisição /me
    //             const { id, name, email, access } = response.data;

    //             setUser({
    //                 id,
    //                 name,
    //                 email,
    //                 access
    //             })
    //         })
    //             .catch(() => {
    //                 //se não der certo a requisição /me desloga e destroi o cookie
    //                 signOut();//função que ja faz tudo isso
    //             })
    //     }
    // }, [])

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            })

            const { id, name, token, access } = response.data;//desconstruindo do response
            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,//expira em 30 dias
                path: "/"//para todas as rotas
            })

            setUser({
                id,
                name,
                email,
                access
            })

            //passando token para todas as requis
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success(`Bem vindo, ${name} =)`)

            //redireciona para o dashboard
            Router.push('/dashboard')

        } catch (error) {
            console.log("Erro ao acessar ", error)
            toast.error(`${error.response.data.errr}`)
        }
    }

    async function signUp({ name, email, password }: SignUpProps) {
        try {
            const response = await api.post('user', {
                name,
                email,
                password
            })
            toast.success("Usuário cadastrado!!!")
            Router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            signIn,
            signOut,
            signUp
        }}>
            {children}
        </AuthContext.Provider>
    )
}