import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {register,formState: { errors },handleSubmit, reset} = useForm()
    const {createUser, updateUserProfile}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Register Successfuly',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace: true});
            })
            .catch(error=>console.log(error))
        })
    }
    return (
        <>
            <Helmet>
                <title>EDUMA | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered"/>
                                {errors.name?.type === "required" && (<p className='text-red-500' role="alert">Name is required</p>)}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoURL' {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered"/>
                                {errors.photoURL?.type === "required" && (<p className='text-red-500' role="alert">Photo URL is required</p>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })}  placeholder="email" className="input input-bordered"/>
                                {errors.email?.type === "required" && (<p className='text-red-500' role="alert">Email is required</p>)}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, 
                                    minLength: 6 ,
                                    pattern:/(?=.*[A-Z])/
                                    })} 
                                    placeholder="password" className="input input-bordered"/>
                                {errors.password?.type === "required" && (<p className='text-red-500' role="alert">Password is required</p>)}
                                {errors.password?.type === "minLength" && (<p className='text-red-500' role="alert">Password must be 6 characters</p>)}
                                {errors.password?.type === "pattern" && (<p className='text-red-500' role="alert">Password must be one uppercase</p>)}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline" type="submit" value="Sign Up" />
                            </div>
                        <p><small>Already Have An Account? <Link to="/login">Please Login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;