import React from "react"


type Body2Prop = {
    text: string
    className?: string
    onClick?: () => void
}

export const Body2 = ({text, className, onClick}: Body2Prop)=>{
    return(
        <p className={'.dse-spotify-body2 ' + className} onClick={onClick}>{text}</p>
    )
}