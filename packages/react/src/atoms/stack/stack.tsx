import React from 'react';

type StackProps = {
    children: React.ReactNode,
    direction?: 'row' | 'column',
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
    wrap?: 'wrap' | 'nowrap',
    className?: string

}

export const Stack = ({children, direction, align, justify, wrap, className}: StackProps) => {
    return (
        <div className={`dse-spotify-stack-${direction}-${align}-${justify}-${wrap} ${className}`}>
            {children}
        </div>
    )
}