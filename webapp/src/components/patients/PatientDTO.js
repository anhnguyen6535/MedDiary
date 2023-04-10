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

export const 
clinicVisitDTO = (clinicVisitList) => {
    for(let i = 0; i < clinicVisitList.length; i++){
        delete clinicVisitList[i].visitId
        delete clinicVisitList[i].sin
    }
    const {headers, values} = filterObjList(clinicVisitList)
    return {headers, values}
}

export const 
clinicVisitDTOH = (clinicVisit) => {
        delete clinicVisit.visitId
        delete clinicVisit.sin

    const headers = Object.keys[clinicVisit[0]]
    
    const values = Object.values(clinicVisit)

    return {headers, values}
}
