import React from "react";
import "./Sidebaroption.css";
import {useHistory} from 'react-router-dom'
import db from "./firebase";

export const SidebarOption = ({ Icon, title,id ,addChannelOption }) => {
  const history=useHistory()

  const selectChannel = ()=>{
    if(id){
      history.push(`/room/${id}`)
    }else{
      history.push(title)
    }
  }
  const addChannel = ()=>{
    const channelName =prompt('plz enter channel name')
    if(channelName){
      db.collection("rooms").add({
        name :channelName
      })
    }
  }
  return (
    <div className="sidebaroption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebaroption__icon" />}
      {/* if icon is passed ,display icon */}
      {/* if u pass icon then i render the h3 tag with title but if i dont pass icon then render #*/}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 sidebaroption__channel>
          <span className="sidebaroption__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
};
