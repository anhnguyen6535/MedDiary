import { createAPIEndpoint, ENDPOINTS } from "../../api";

export const register = (User, Patient, values) =>{
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

    Patient.isMinor ?
    createAPIEndpoint(ENDPOINTS.user)
                .adultReg({User, Patient, EmergencyContact, Insurance, Adult: type})
                .then(res => {
                        console.log("success");
                        // setContext({ userId: res.data.participantId })
                        // navigate('/profile')
                })
                .catch(err => {
                    console.log("fail");
                })
    :
    createAPIEndpoint(ENDPOINTS.user)
                .minorReg({User, Patient, EmergencyContact, Insurance, Minor: type})
                .then(res => {
                        console.log("success");
                        // setContext({ userId: res.data.participantId })
                        // navigate('/profile')
                })
                .catch(err => {
                    console.log("fail");
                })
}