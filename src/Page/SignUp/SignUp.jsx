import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContex } from '../../Provaider/AuthProvaider';

const SignUp = () => {
    const {createUser} = useContext(AuthContex)

    const hendelSignUp = event =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const name = from.name.value;
        const password = from.password.value;
        console.log(email, name, password) 

        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user)
        })
        .catch(error =>console.log(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-center text-5xl font-bold'>Sign Up </h1>
                        <form onSubmit={hendelSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input required type="text" placeholder="Confirm password" name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="my-4 text-center">Already have an account? <Link className="text-bold text-orange-700" to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;