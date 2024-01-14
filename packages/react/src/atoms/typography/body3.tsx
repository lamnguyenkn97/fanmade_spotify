import React from "react"


type Body3Prop = {
    text: string
    color?: string
    width?: string
}

export const Body3 = ({text, color, width}: Body3Prop)=>{
    const style = {color, width}
    return(
        <p className='dse-spotify-body3' style={style}>{text}</p>
    )
}