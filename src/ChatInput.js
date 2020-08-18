import React,{useState} from 'react'
import './ChatInput.css'
import db from './firebase'
import {useStateValue} from './StateProvider'
import firebase from 'firebase'

export const ChatInput = ({channelName ,channelId}) => {

    const [input,setInput]=useState('')
    const [ {user} ] =useStateValue()
    const sendMessage = (e)=>{
        e.preventDefault()
        // console.log("zzzzzzzzzzzzzz" , user)
        console.log(channelId)
        if(channelId){
            
            db.collection("rooms").doc(channelId)
            .collection("meesages").add({
                message : input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                user : user.displayName,
                userImage: user.photoURL
            })
        }
    }
    return (
        <div className='chatInput'>
            <form>
                <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`} />
                <button type='submit' onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}
