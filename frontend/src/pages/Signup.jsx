import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/userContext'

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const navigate = useNavigate()

    const {user,setUser} = useContext(UserDataContext);


    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            fullname:{
                firstName: firstName,
                lastName: lastName,
                },
                email: email,
                password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, userData)
        if(response.status === 201){
            const data = response.data
            // console.log(data)
            setUser(data.user)
            navigate('/main')
        }

        console.log(userData)
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className='p-7 bg-black h-screen'>
            <img className='w-45 ml-17'src="https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg" alt="" />
            <form onSubmit={(e) =>
                handleSubmit(e)
            }>
                <h3 className='text-xl mb-2 text-white'>Write your Name!</h3>
                <div className='flex justify-between gap-4'>
                    <input required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg ' type="text" placeholder="FirstName"  />
                    <input required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-lg ' type="text" placeholder="LastName"  />
                </div>
                <h3 className='text-xl mb-2 text-white'>What's your Email!</h3>
                <input required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg'
                 type="email"
                  placeholder="Email@exm.com"
                />
                <h3 className='text-xl mb-2 text-white'>Write Password!</h3>
                <input required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg'
                 type="password" placeholder="Password" />

                    <Link to='/main' className='w-full bg-red-700 ml-21 text-white py-2 px-4 text-lg rounded-lg'>Create Account</Link>

                    <p className='text-white ml-20 mt-4'>Already Ac?<Link to='/login' className='text-blue-400'>Login Here</Link></p>

            </form>
        </div>
    )
}
export default Signup;
