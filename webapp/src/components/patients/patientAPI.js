import { createAPIEndpoint, ENDPOINTS } from "../../api";

export const register = (user, patient, values) =>{
    let type = {
        Sin: user.sin,
    }
    const emer = {
        Sin: user.sin,
        Name: values.Name,
        Phone: values.Phone
    }
    const ins = {
        Sin: user.sin,
        Iname: values.Iname,
        Inumber: values.Inumber
    }
    patient.isMinor ?type.GuardianId = values.GuardianId :type.MaritalStatus = values.MaritalStatus
    console.log(user);
    console.log(patient);
    console.log(emer);
    console.log(ins);
    console.log(type);
    // console.log(type);
    // createAPIEndpoint(ENDPOINTS.user)
    //             .docReg({User: user, Doctor: doctor})
    //             .then(res => {
    //                     console.log("success");
    //                     // setContext({ userId: res.data.participantId })
    //                     // navigate('/profile')
    //             })
    //             .catch(err => {
    //                 console.log("fail");
                //   setSub(true)
                //   setValues({email: '', password: '', isDoctor: context.isDoctor})
                // })
}