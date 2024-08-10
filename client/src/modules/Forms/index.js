import Input from "../../components/Input";
import Button from '../../components/Button';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })
    
    const navigate = useNavigate() 
    return(
        <div className="bg-primary h-screen flex items-center justify-center">
            <div className="bg-white w-[600px] h-[700px] shadow-lg rounded-lg flex flex-col justify-center items-center">
                <div className="text-4xl font-extrabold">
                    Welcome {isSignInPage && 'Back'}
                </div>
                <div className="text-xl font-light mb-10 ">
                    {isSignInPage ? 'Sign in to get Explored' : 'Sign up to get started'}
                </div>
                <form className="flex flex-col items-center w-full" onSubmit={() => console.log('Submitted')}>
                    {!isSignInPage && 
                        <Input label="Full Name" name="name" placeholder="Enter Your Full Name" className="mb-6 w-[50%]" value={data.fullName} onChange={(e) => setData({...data, fullName: e.target.value})}/>
                    }
                    <Input type='email' label="Email" name="email" placeholder="Enter Your Email" className="mb-6 w-[50%]" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                    <Input label="Password" type="password" name="name" placeholder="Enter Your Password" className="mb-6 w-[50%]" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/> 
                    <Button label="Sign Up" className="signUpBtn mb-2 w-1/2" type="submit" /> 

                    <div>{isSignInPage ? "Didn't have and account?" : "Already have and account?"} 
                        <span className="text-blue-800 cursor-pinter underlined" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}> 
                            {isSignInPage ? 'Sign Up' : 'Sign In' }
                        </span>
                    </div>
                </form> 
            </div>
        </div>
    );
}

export default Form