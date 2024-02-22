

const Register = () => {
    const registerBtn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div>

            <p>Shall find something to register</p>
           <div className="mx-auto md:w-1/2">
           <form onSubmit={registerBtn} >
                <input className="mb-4 w-3/4 px-2 py-4" placeholder="Email-Address" type="email" name="email" id="" />
                <br />

                <input className="mb-4 w-3/4 px-2 py-4" placeholder="Password" type="password" name="password" id="" />
                <br />
                <input className="btn btn-ghost mb-4 w-3/4 px-2 py-4"  type="submit" value="Register" />
                
            </form>
           </div>
            
        </div>
    );
};

export default Register;