import { filterObjList, getHeadersValues} from "./helper"

export const userDTO = (user) => {
    delete user.isDoctor;
    delete user.password
    const {headers, values} = getHeadersValues(user)
    for(let i = 0; i < headers.length; i++){
        if(headers[i] == 'Fname') headers[i] = 'First name'
        else if(headers[i] == 'Lname') headers[i] = 'Last name'
        else if(headers[i] == 'Dob') headers[i] = 'Date of birth'
    }
    return {headers, values}
}