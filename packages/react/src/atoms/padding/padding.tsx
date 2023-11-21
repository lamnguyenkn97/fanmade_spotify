import React from 'react';
import {Spacing} from "../../foundations";


type PaddingProps = {
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
    size?: keyof typeof Spacing
    children?: React.ReactNode
}
export const Padding = ({top=false, right=false, bottom=false, left=false, size, children}: PaddingProps) => {
    const directions: {[k:string]: boolean} = {top, right, bottom, left}
    const classes: string[] = []
    Object.keys(directions).map((dir) => {
        if (directions[dir]) {
            classes.push(`dse-padding-${dir}-${size}`)
        }
    })

    return(
        <div className={classes.join(' ')}>
            {children}
        </div>
    )
}