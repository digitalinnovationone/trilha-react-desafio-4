export interface IFormLogin {
    email: string;
    password: string;
    disabled: boolean;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: '',
    disabled: true,
}