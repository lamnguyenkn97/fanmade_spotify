import React from "react"


type Body2Prop = {
    text: string
    className?: string
    color?: string
    onClick?: () => void
}

export const Body2 = ({text, className, onClick, color}: Body2Prop)=>{
    const style={
        color
    }
    return(
        <p className={'dse-spotify-body2 ' + className} style={style} onClick={onClick}>{text}</p>
    )
}