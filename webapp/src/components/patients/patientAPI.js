import { createAPIEndpoint, ENDPOINTS } from "../../api";

export function register (User, Patient, values){
    let type = {
        Sin: User.sin,
    }
    const EmergencyContact = {
        Sin: User.sin,
        Name: values.Name,
        Phone: values.Phone
    }
    const Insurance = {
        Sin: User.sin,
        Iname: values.Iname,
        Inumber: values.Inumber             
    }
    Patient.isMinor ?type.GuardianId = values.GuardianId :type.MaritalStatus = values.MaritalStatus

    return {Patient, User, EmergencyContact, Insurance, type}
}