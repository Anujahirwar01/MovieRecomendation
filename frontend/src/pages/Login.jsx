// import { set } from 'mongoose'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { UserDataContext } from '../context/userContext'
import axios from 'axios'


const Login =  () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})

    const {user, setUser} = useContext(UserDataContext)

    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        // console.log(userData)

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/main')
        }

        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-7 bg-black h-screen'>
            <img className='w-45 ml-17'src="https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg" alt="" />
            <form onSubmit={(e) => 
                handleSubmit(e)
            }>
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

                    <button className='w-full bg-red-700 text-white py-2 px-4 text-lg rounded-lg'>Login</button>

                    <p className='text-white ml-11 mt-4'>New Here?<Link to='/signup' className='text-blue-400'>Create New Account</Link></p>

            </form>
        </div>
    )
}

export default Login
