

export const LogoutHandler = ():void =>{
    localStorage.removeItem('token')
    location.href='/'
}