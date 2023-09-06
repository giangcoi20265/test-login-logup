export interface ISignin{
    email:string | number,
    password:string | number
}

export interface ISignup{
    name: string | number,
    email: string | number,
    password: string | number
    confirmPassword: string | number
}