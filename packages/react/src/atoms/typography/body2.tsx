import React from "react"


type Body2Prop = {
    text: string
}

export const Body2 = ({text}: Body2Prop)=>{
    return(
        <p className='.dse-spotify-body2'>{text}</p>
    )
}