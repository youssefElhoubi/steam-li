import React from 'react'
import LoginForm from '../components/LoginForm'

const Login: React.FC = () => {

    return (
        <>
            <div className='h-screen flex justify-center items-center pt-20 pb-10 bg-[url("https://assets.clevelandclinic.org/transform/LargeFeatureImage/a86620bf-d34f-4780-bc0f-d41fa9ab7560/binge-watch-tv-1472974932")] bg-cover bg-center'>
                <LoginForm />
            </div>
            
        </>
    )
}

export default Login