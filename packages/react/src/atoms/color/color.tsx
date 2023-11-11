import React from 'react'
import {Spacing} from "../../foundations";

type ColorProps = {
    hexCode: string
    width?: keyof typeof Spacing
    height?: keyof typeof Spacing
}

export const Color = ({hexCode, width='lg', height='lg'}: ColorProps)=>{
    const classname = `dse-width-${width} dse-height-${height}`
    return(
        <div className={classname} style={{backgroundColor: hexCode, width, height}}></div>
    )
}