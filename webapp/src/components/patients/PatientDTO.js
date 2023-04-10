import { filterObjList, getHeadersValues } from "../helperModules/helper"

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
        delete clinicVisitList[i].sin
    }
    const {headers, values} = filterObjList(clinicVisitList)
    return {headers, values}
}

export const 
clinicVisitDTOH = (clinicVisit) => {
        delete clinicVisit.visitId
        delete clinicVisit.sin
    const {headers, values} = getHeadersValues(clinicVisit)
    const cn = headers.findIndex(ele => ele == "ClinicName")
    headers[cn] = "Clinic Name"

    return {headers, values}
}
