import { filterObjList } from "../helperModules/helper"

export const profile = ['First name', 'Last name', 'Email', 'AHS Number']

export const labDTO = (labLists) =>{
    for(let i = 0; i < labLists.length; i++){
        delete labLists[i].patientSin
        delete labLists[i].testId
    }

    const {headers, values} = filterObjList(labLists)
    return {headers, values}
}

export const 
medicaionDTO = (medList) => {
    for(let i = 0; i < medList.length; i++){
        delete medList[i].medId
        delete medList[i].patientId
    }

    const {headers, values} = filterObjList(medList)
    return {headers, values}
}