export interface InitialStateType{
    theme: boolean
    products: ProductsType[] | null
    product: ProductsType | null
    shopProducts: ProductsType[] | null
    formDataRegister: FormDataRegisterType | null
}

export interface FormDataRegisterType {
    first_name?: string | undefined
    last_name?: string | undefined
    email?: string | undefined
    password?: string | undefined
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
    formDataRegister: null
}