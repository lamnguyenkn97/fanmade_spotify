import React from "react"


type Body3Prop = {
    text: string
}

export const Body3 = ({text}: Body3Prop)=>{
    return(
        <p className='.dse-spotify-body3'>{text}</p>
    )
}