import React from "react"

type Body1Prop = {
    text: string
    color?: string
}

export const Body1 = ({text, color=undefined}: Body1Prop)=>{
    return(
        <p className='dse-spotify-body1' style={color?{color}:{}}>{text}</p>
    )
}