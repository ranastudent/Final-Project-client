import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";


const SignUp = () => {
      const axiosPublic = useAxiosPublic()
      const { register, handleSubmit, reset, formState: { errors } } = useForm()
      const { createUser, updateUserProfile } = useContext(AuthContext)
      const navigate = useNavigate()
      const onSubmit = (data) => {
            console.log(data)
            createUser(data.email, data.password)
                  .then(result => {
                        const loggedUser = result.user
                        //  console.log(loggedUser)
                        updateUserProfile(data.name, data.photoURL)
                              .then(() => {
                                    // create User Info into Database
                                    const userInfo = {
                                          name: data.name,
                                          email: data.email,
                                    }
                                    axiosPublic.post('/users', userInfo)
                                          .then(res => {
                                                if (res.data.insertedId) {
                                                      console.log('user added to database');
                                                      reset();
                                                      Swal.fire({
                                                            position: "top-end",
                                                            icon: "success",
                                                            title: "User created successfully.",
                                                            showConfirmButton: false,
                                                            timer: 1500
                                                      });
                                                      navigate('/');
                                                }
                                          })

                              })
                              .catch(error => console.log(error))
                  })
      }

      return (
            <>
                  <Helmet>
                        <title>Bistro Boss | Sign Up</title>
                  </Helmet>
                  <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                              <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                                    <p className="py-6">
                                          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                          quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                              </div>
                              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                                {errors.name && <span className="text-red-600">Name field is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Photo URL</span>
                                                </label>
                                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                                {errors.photoURL && <span className="text-red-600">Photo URL field is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                                {errors.email && <span className="text-red-600">Email field is required</span>}
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password"
                                                      {...register("password", {
                                                            required: true, minLength: 6, maxLength: 20,
                                                            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                      })}
                                                      name="password" placeholder="password" className="input input-bordered" />
                                                {errors.password?.type === "required" && (
                                                      <p className="text-red-600">Password name is require</p>
                                                )}
                                                {errors.password?.type === "minLength" && (
                                                      <p className="text-red-600">Password Must be 6 character</p>
                                                )}
                                                {errors.password?.type === "maxLength" && (
                                                      <p className="text-red-600">Password Must be less than 20 character</p>
                                                )}
                                                {errors.password?.type === "pattern" && (
                                                      <p className="text-red-600">Password Must have one Uppercase one lower case one number and one special character</p>
                                                )}
                                                <label className="label">
                                                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                          </div>
                                          <div className="form-control mt-6">
                                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                                          </div>
                                    </form>
                                    <p className="px-6"><small>Already have an account? <Link to='/login'>Login here</Link></small></p>
                                    <SocialLogin></SocialLogin>
                              </div>
                        </div>
                  </div>
            </>
      );
};

export default SignUp;