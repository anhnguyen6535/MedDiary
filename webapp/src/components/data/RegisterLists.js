

export const patientRegLists = () => {
    return [patientInfoReg, PatientEmerReg, PatientInsuranceReg]
}

const patientInfoReg =  {
    header: 'Personal Info',
    value: 
    [
        [
          {
            sort: 'control',
            controlId: 'Fname',
            label: 'First name',
            type: 'text',
            placeholder: 'First name'
          },
          {
            sort: 'control',
            controlId: 'Lname',
            label: 'Last name',
            type: 'text',
            placeholder: 'Last name'
          }
        ],
        // [
        //   {
        //     sort: 'control',
        //     controlId: 'Email',
        //     label: 'Email address',
        //     type: 'email',
        //     placeholder: 'Email'
        //   }
        // ],
        [
          {
            sort: 'control',
            controlId: 'Address',
            label: 'Address',
            type: 'text',
            placeholder: 'Address'
          }
        ],
        [
          {
            sort: 'control',
            controlId: 'DOB',
            label: 'Date of Birth',
            type: 'text',
            placeholder: 'Date of Birth'
          },
          {
            sort: 'select',
            controlId: 'Sex',
            label: 'Sex',
            placeholder: "Sex",
            options: [
              "Sex",
              "Female",
              "Male",
            ]
          },
        ],
        [
          {
            sort: 'control',
            controlId: 'Phone',
            label: 'Phone',
            type: 'text',
            placeholder: 'Phone'
          },
          {
            sort: 'control',
            controlId: 'SIN',
            label: 'SIN',
            type: 'text',
            placeholder: "SIN Number",
          },
        ],
        [
          {
            sort: 'control',
            controlId: 'AHS',
            label: 'AHS Number',
            type: 'text',
            placeholder: 'AHS Number'
          }
        ],
        // [
        //     {
        //         sort: 'control',
        //         controlId: 'Pw',
        //         label: 'Password',
        //         type: 'password',
        //         placeholder: 'Password'
        //     },
        //     {
        //         sort: 'control',
        //         controlId: 'Pw2',
        //         label: 'Confirm password',
        //         type: 'password',
        //         placeholder: 'Confirm Password'
        //     },
        // ]   
    ]
}

export const patientGuardianReg = {
    header: 'Guardian',
    value:[
        [
            {
                sort: 'control',
                controlId: 'GSIN',
                label: '',
                type: 'text',
                placeholder: 'Guardian SIN'
            }
        ],
    ]
}

const PatientEmerReg = {
    header: 'Emergency Contact',
    value: 
    [
        [
            {
                sort: 'control',
                controlId: 'EName',
                label: 'Name',
                type: 'text',
                placeholder: 'Name'
            },
            {
                sort: 'control',
                controlId: 'EPhone',
                label: 'Phone',
                type: 'text',
                placeholder: 'Phone'
            },
        ]
    ]
}

const PatientInsuranceReg = {
    header: 'Insurance',
    value:
    [
        [
            {
                sort: 'control',
                controlId: 'ICompany',
                label: 'Name',
                type: 'text',
                placeholder: 'Company'
            },
            {
                sort: 'control',
                controlId: 'INum',
                label: 'Number',
                type: 'text',
                placeholder: 'Number'
            },
        ],
    ]
}
    
