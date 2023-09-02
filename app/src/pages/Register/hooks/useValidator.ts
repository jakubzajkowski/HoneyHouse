import {useState} from 'react'
import validator from 'validator'


const useValidator = (firstName:string,lastName: string,email:string,password:string)=> {
    const [firstNameErr,setFirstNameErr]=useState<string>('')
    const [lastNameErr,setLastNameErr]=useState<string>('')
    const [emailErr,setEmailErr]=useState<string>('')
    const [passwordErr,setPasswordErr]=useState<string>('')
    let error = false

    const checkErrors = ():void=>{
        if (validator.isEmpty(lastName)) {setLastNameErr('Fill your last name!');error=true}
        else setLastNameErr('')

        if (validator.isEmpty(firstName)){setFirstNameErr('Fill your first name!');error=true}
        else setFirstNameErr('')

        if (validator.isEmpty(email)){setEmailErr('Fill your email!');error=true}
        else if (!validator.isEmail(email)){setEmailErr('This is not real email!');error=true}
        else setEmailErr('')

        if (validator.isEmpty(password)){setPasswordErr('Fill your password!');error=true}
        else setPasswordErr('')
    }
    const isValidate = ():boolean=>{
        return error ? false : true
    }

    return {checkErrors,isValidate,errors:{lastNameErr,firstNameErr,emailErr,passwordErr}}
}

export default useValidator