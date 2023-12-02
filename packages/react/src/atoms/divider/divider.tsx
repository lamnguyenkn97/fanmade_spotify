import React from "react";

type DividerProps = {
    width: number | string,
    height: number | string,
    background?: string,
    margin?: number
}
export const Divider = ({width, height, background='grey', margin=10}: DividerProps) => {
    const barStyle = {
        width,
        height,
        background,
        margin
    }
    return(
        <div style={barStyle}></div>
    )
}