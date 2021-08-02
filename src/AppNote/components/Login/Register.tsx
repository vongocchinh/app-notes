import React from 'react'

 const Register:React.FC=()=> {

    const onchangeRegister=()=>{

    }
    return (
        <div className="form-login">
                <h2>Register</h2>
                <form>
                    <input type="text" onChange={onchangeRegister} />
                    <input type="text" onChange={onchangeRegister} />
                    <input type="submit" value="Register" />
                </form>
            </div>
    )
}
export default Register;