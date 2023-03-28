

export const patientRegLists = () => {
    return [patientInfoReg, patientGuardianReg, PatientEmerReg, PatientInsuranceReg]
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
        [
          {
            sort: 'control',
            controlId: 'Email',
            label: 'Email address',
            type: 'email',
            placeholder: 'Email'
          }
        ],
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
        [
            {
                sort: 'control',
                controlId: 'Pw',
                label: '',
                type: 'password',
                placeholder: 'Password'
            },
            {
                sort: 'control',
                controlId: 'Pw2',
                label: '',
                type: 'password',
                placeholder: 'Confirm Password'
            },
        ]   
    ]
}

const patientGuardianReg = {
    header: 'Guardian',
    value:[
        [
            {
                sort: 'check',
                controlId: 'Minor',
                placeholder:'I am a minor',
                label: '',
            },
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
                label: '',
                type: 'text',
                placeholder: 'Name'
            },
            {
                sort: 'control',
                controlId: 'EPhone',
                label: '',
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
                label: '',
                type: 'text',
                placeholder: 'Company'
            },
            {
                sort: 'control',
                controlId: 'INum',
                label: '',
                type: 'text',
                placeholder: 'Number'
            },
        ],
    ]
}
    
