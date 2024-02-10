import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './CSS/LogOut.css'
import { context } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const LogOut = ({setIsLoggedIn}) => {

    const { userFound } = useContext(context)

    const navigate = useNavigate();
    const logOut = () =>{
        setIsLoggedIn(false)
        navigate('/');
    }
  return (
    <div className='logout'>
        <h1 id='welcome'><FontAwesomeIcon className='icon' icon={faUser} />Welcome , {userFound.name}</h1>
    <form className="logout-container" onSubmit={logOut}>
        <h1>Logout</h1>

        <div className="logout-fields">
            <p>Are you sure you want to LogOut?</p>
            
        </div>
        <button>Yes, Logout</button>
        <Link to='/'><button className='no'>No, Go back</button></Link>
    </form>
</div>
  )
}

export default LogOut
