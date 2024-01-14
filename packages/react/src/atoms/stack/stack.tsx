import React from 'react';

type StackProps = {
    children: React.ReactNode,
    direction?: 'row' | 'column',
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline',
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly',
    wrap?: 'wrap' | 'nowrap',
    className?: string,
    gap?: '0' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
    width?: string,
    height?: string
    backgroundColor?: string
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}
export const Stack = ({
                          children,
                          direction = 'row',
                          align = 'center',
                          justify = 'start',
                          wrap = 'nowrap',
                          className,
                          gap = 'xs',
                          width,
                          height,
                          backgroundColor,
                          onMouseEnter = () => {
                          },
                          onMouseLeave = () => {
                          }
                      }: StackProps) => {
    const stackStyle = {
        width,
        height,
        backgroundColor
    }
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             className={`dse-spotify-stack-${direction}-${align}-${justify}-${wrap}-${gap} ${className}`}
             style={stackStyle}>
            {children}
        </div>
    )
}