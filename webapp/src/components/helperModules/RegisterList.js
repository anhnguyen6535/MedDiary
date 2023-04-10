
//------------------------------------------- USER ---------------------------------//
export const userRegList =  {
    header: 'Personal Info',
    value: 
    [
        [
          {
            sort: 'control',
            controlId: 'email',
            label: 'Email',
            type: 'email',
            placeholder: '',
            require: true
          }
        ],
        [
          {
            sort: 'control',
            controlId: 'fname',
            label: 'First name',
            type: 'text',
            placeholder: 'First name',
            require: true
          },
          {
            sort: 'control',
            controlId: 'lname',
            label: 'Last name',
            type: 'text',
            placeholder: 'Last name',
            require: true
          }
        ],
        [
          {
            sort: 'control',
            controlId: 'address',
            label: 'Address',
            type: 'text',
            placeholder: 'Address',
            require: true
          }
        ],
        [
          {
            sort: 'control',
            controlId: 'dob',
            label: 'Date of Birth',
            type: 'text',
            placeholder: 'DD/MM/YYYY',
            require: true
          },
          {
            sort: 'select',
            controlId: 'sex',
            label: 'Sex',
            require: true,
            options: [
              "Female",
              "Male",
            ]
          },
        ],
        [
          {
            sort: 'control',
            controlId: 'phone',
            label: 'Phone',
            type: 'text',
            placeholder: 'Phone',
            require: true
          },
          {
            sort: 'control',
            controlId: 'sin',
            label: 'SIN',
            type: 'text',
            placeholder: "SIN Number",
            require: true
          },
        ],
        [
          {
            sort: 'control',
            controlId: 'password',
            label: 'Password',
            type: 'password',
            placeholder: '',
            require: true
          }
        ]
      ]}
      
      
      
// ---------------------------------------------- Patient ------------------------------------------------//
export const patientRegLists = () => {
  return [PatientEmerReg, PatientInsuranceReg]
}

const patientAHS = {
  header: 'Health number',
  value:
  [
    [
      {
        sort: 'control',
        controlId: 'AHS',
        label: '',
        type: 'text',
        placeholder: 'AHS Number'
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
          controlId: 'Name',
          label: 'Name',
          type: 'text',
          placeholder: 'Name',
          require: true
        },
        {
          sort: 'control',
                controlId: 'Phone',
                label: 'Phone',
                type: 'text',
                placeholder: 'Phone',
                require: true
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
            controlId: 'Iname',
            label: 'Name',
            type: 'text',
            placeholder: 'Company',
            require: true
          },
          {
            sort: 'control',
            controlId: 'Inumber',
            label: 'Number',
            type: 'text',
            placeholder: 'Number',
            require: true
          },
        ],
      ]
    }
        
// ----------------------------------------------- MINOR ------------------------------------//
export const patientGuardianReg = {
  header: 'Guardian',
  value:[
    [
      {
        sort: 'control',
        controlId: 'GuardianId',
        label: 'Guardian SIN',
        type: 'text',
        placeholder: 'Guardian SIN',
        require: true
      }
    ],
  ]
}

// ----------------------------------------------- MINOR ------------------------------------//
export const patientMaritualReg = {
  header: 'Maritual Status',
  value:[
    [
      {
        sort: 'select',
        controlId: 'MaritalStatus',
        label: 'Marital Status',
        require: true,
        options: [
          "Single",
          "Married",
          "Divorced"
        ]
      }
    ],
  ]
}

// ----------------------------------------------- DOCTOR --------------------------------------------//
export const doctorInfoReg =  {
  header: 'Work Info',
  value: 
  [
    [
      {
          sort: 'control',
          controlId: 'PracId',
          label: 'PracId',
          type: 'text',
          placeholder: 'PracId'
      }
    ],
    [
      {
          sort: 'control',
          controlId: 'ClinicName',
          label: 'Clinic Name',
          type: 'text',
          placeholder: 'Clinic Name'
      }
    ],
  ]
}