import { useState } from "react";

function SignUp() {
  const [formInputs, setFormInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  function signUp(){
    console.log(formInputs);
  }
  return (
    <>
    <h1 className="text-4xl">SignUp</h1>
    <section>
    <div className="container flex align-center justify-center">
        <form onSubmit={(e)=> e.preventDefault()} method="post" className="bg-red-500">
            <div className="fields grid">
                <div className="field">
                    <label htmlFor="user-name">Username</label>
                    <input 
                    type="text"
                    name="user-name" 
                    id="user-name" 
                    placeholder="Enter your username"
                    onChange={(e)=>{setFormInputs({...formInputs, username: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    onChange={(e)=>{setFormInputs({...formInputs, email: e.target.value})}}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Enter your password"
                    onChange={(e)=>{setFormInputs({...formInputs, password: e.target.value})}}
                    />
                </div>
            </div>
            <input type="submit" onClick={signUp} value="SignUp" />
            </form>
    </div>
    </section>
    </>
  )
}

export default SignUp