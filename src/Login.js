import React from 'react'
import './Login.css'
import {Button } from '@material-ui/core'
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

export const Login = () => {

    const [state,dispatch] =  useStateValue()

    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then( result => {
            console.log(result)
            dispatch({
                type : actionTypes.SET_USER,
                user : result.user
            })
        }).catch( error => {
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img 
                 src='https://fitsmallbusiness.com/wp-content/uploads/2020/08/ReviewsIcon_Slack.jpg'
                 alt='' />
                 <h1>Sign in here...</h1>
                 <p>slack.com</p>
                 <Button onClick ={signIn}>Sign in with  Google</Button>
            </div>
        </div>
    )
}
