import React from 'react'
import {useFormik}from 'formik'
import * as Yup from 'Yup'
import { enqueueSnackbar } from 'notistack'



const SignupSchema =Yup.object().shape({
  name: Yup.string()
  .required('Name is required')
  .min(3,'Name must be at least 3 characters')
  .max(15,'Name must be at least 15 characters'),
  email :Yup.string()
  .required('Email is requied')
  .email('Email is invalid'),
  password :Yup.string()
  .required('Password is required')
  .min(8, 'at least 8 characters')
  .max(15,'at least 15 characters')

})



const Signup = () => {
  //step 1. formik inisilitzation
  const signupForm = useFormik ({
    initialValues :{
      name :'',
      email :'',
      password :''

    },
  
   onSubmit : async(values , action) =>{
    console.log(values);
    const res = await fetch ('http://localhost:3000/user/add',{
      method : 'POST',
      body : JSON.stringify(values),
      headers:{
   'Content-Type': 'application/json'
    }
    
    }); 
    console.log(res.status)
      action.resetForm()

      if (res.status == 200) {
        enqueueSnackbar('Signup Successful', { variant: 'success' })
      }
      else {
        enqueueSnackbar('Signup Failed', { variant: 'error' })
      }
    },
                
   
    validationSchema :SignupSchema
  })
    return (
       <div className='container'>
            <div className="col">
                <div className="card w-25 d-block mx-auto">
                    <div className="card-header">
                        <h3>Signup</h3>
                    </div>
                    <div className="card-body">
                      {/* step 2: handling when submit */}

                        <form onSubmit={signupForm.handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <span style={{color:'red',fontsize:'10'}}>{signupForm.touched.name && signupForm.errors.name}</span>
                            <input type="text" className="form-control mb-4" 
                           id="name"
                           onChange={signupForm.handleChange}
                           value={signupForm.values.name}

                           
                           />
                           
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                          {/* styling  */}
                            <span style={{color:'red',fontsize:'10'}}>{signupForm.touched.email && signupForm.errors.email}</span>
                            <input type="text" className="form-control mb-4" 
                            id="email"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <span style={{color:'red',fontsize:'10'}}>{signupForm.touched.password && signupForm.errors.password}</span>
                            <input type="text" className="form-control mb-4"
                            id="password"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.password} />
                        </div>
                        <button type='submit' className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div >
    
  )
}

export default Signup