import React from "react"


type Body3Prop = {
    text: string
    color?: string
}

export const Body3 = ({text, color}: Body3Prop)=>{
    return(
        <p className='dse-spotify-body3' style={color?{color}: {}}>{text}</p>
    )
}