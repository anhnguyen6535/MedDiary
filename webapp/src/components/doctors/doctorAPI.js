import { createAPIEndpoint, ENDPOINTS } from "../../api";

export const register = (user, doctor) =>{
    createAPIEndpoint(ENDPOINTS.user)
                .post({User: user, Doctor: doctor})
                .then(res => {
                        console.log("success");
                        // setContext({ userId: res.data.participantId })
                        // navigate('/profile')
                })
                .catch(err => {
                    console.log("fail");
                //   setSub(true)
                //   setValues({email: '', password: '', isDoctor: context.isDoctor})
                })
}