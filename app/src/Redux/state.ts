export interface InitialStateType{
    value: number
    products: ProductsType[] | null
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
    value: 0,
    products: null
}