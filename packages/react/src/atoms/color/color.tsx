import React from 'react'

type ColorProps = {
    hexCode: string
    width: string
    height: string
}

export const Color = ({hexCode, width, height}: ColorProps)=>{
    return(
        <div className='dse-spotify-color' style={{backgroundColor: hexCode, width, height}}></div>
    )
}