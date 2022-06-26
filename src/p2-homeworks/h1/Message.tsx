import React from 'react'
import HW1 from "./HW1";
import p from "./Message.module.css";

function Message(props: any) {
    return (
        <div className={p.textMessageBlock}>
            <div className={p.image}>
                <img src="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg"
                     alt=""/>
            </div>

            <div className={p.textMessage}>

                <div className={p.name}>{props.name}</div>
                <div className={p.message}>{props.message}</div>
                <div className={p.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
