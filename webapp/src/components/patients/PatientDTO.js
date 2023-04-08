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

export const ClinicVisitDTO = (ClinicList) => {
    for(let i = 0; i < ClinicList.length; i++){
        delete ClinicList[i].VisitId
        delete ClinicList[i].Sin
    }
    const {headers, values} = filterObjList(ClinicList)
    return {headers, values}
}

export const DiagnosisDTO = (diagnosisList) => {
    for(let i = 0; i < diagnosisList.length; i++){
        delete diagnosisList[i].Diagnosis_Id
        delete diagnosisList[i].Date
        delete diagnosisList[i].Docotor_Id
        delete diagnosisList[i].Patient_Id
    }
    const {headers, values} = filterObjList(diagnosisList)
    return {headers, values}
}