import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const registerBtn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>

            <p>Shall find something to register</p>
           <div className="mx-auto md:w-1/2">
           <form onSubmit={registerBtn} >
                <input className="mb-4 w-full px-2 py-4" placeholder="Email-Address" type="email" name="email" id="" />
                <br />

                <div className="relative mb-4">
                <input className=" w-full px-2 py-4" placeholder="Password"
                 type={ showPassword ? "text" : "password"}
                  name="password" id="" />
                <span className="absolute top-3 right-2" onClick={ () => setShowPassword(!showPassword) } ><MdOutlineRemoveRedEye /></span>
                </div>
                <br />
                <input className="btn btn-ghost mb-4 w-3/4 px-2 py-4"  type="submit" value="Register" />
                
            </form>
           </div>
            
        </div>
    );
};

export default Register;