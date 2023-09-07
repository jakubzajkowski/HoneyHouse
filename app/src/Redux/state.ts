export interface InitialStateType{
    theme: boolean
    products: ProductsType[] | null
    product: ProductsType | null
    shopProducts: ProductsType[] | null
    formDataRegister: FormDataRegisterType 
    formDataLogin: FormDataLoginType
    userData: UserDataType | null
    cartData: CartDataType[] | null
}

export interface FormDataRegisterType {
    first_name: string 
    last_name: string 
    email: string 
    password: string 
} 
export interface CartDataType { 
    id: string 
    userId: string
    product_category: string
    product_id: string
    price: number
}
export interface FormDataLoginType {
    email: string 
    password: string 
} 

export interface UserDataType {
        id: string,
        first_name: string,
        last_name: string,
        email: string,
        password: string,
        createdAt: string
        country: string
        address: string
        apartament: string
        postal_code: string
        city: string
        phone: string
}

export interface ProductsType{
    id: string
    category: string
    name: string
    img: string
    desc: string
    weight: number
    price: number
    quantity: number
    alergic_info: string
    usage: string
    taste: string
    expire_date: string
}


export const initialState: InitialStateType = {
    theme: false,
    products: null,
    product: null,
    shopProducts: null,
    formDataRegister: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    },
    formDataLogin: {
        email: '',
        password: '' 
    },
    userData: null,
    cartData: null
}