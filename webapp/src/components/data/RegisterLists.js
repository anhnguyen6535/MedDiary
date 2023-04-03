
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
  return [patientAHS, PatientEmerReg, PatientInsuranceReg]
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
        
// ----------------------------------------------- MINOR ------------------------------------//
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

// ----------------------------------------------- DOCTOR --------------------------------------------//
    export const doctorInfoReg =  {
      header: 'Personal Info',
      value: 
      [
        [
          {
            sort: 'control',
            controlId: 'Fname',
          label: 'First name',
          type: 'text',
          placeholder: ''
        },
        {
          sort: 'control',
          controlId: 'Lname',
          label: 'Last name',
          type: 'text',
          placeholder: ''
        }
      ],
      [
        {
          sort: 'control',
          controlId: 'Address',
          label: 'Address',
          type: 'text',
          placeholder: ''
        }
      ],
      [
        {
          sort: 'control',
          controlId: 'DOB',
          label: 'Date of Birth',
          type: 'text',
          placeholder: ''
        },
        {
          sort: 'select',
          controlId: 'Sex',
          label: 'Sex',
          options: [
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
          placeholder: ''
        },
        {
          sort: 'control',
          controlId: 'SIN',
          label: 'SIN',
          type: 'text',
          placeholder: "",
        },
      ],
      // [
        //   {
          //     sort: 'control',
          //     controlId: 'PracId',
          //     label: 'PracId',
          //     type: 'text',
          //     placeholder: 'PracId'
          //   }
          // ],
        ]}