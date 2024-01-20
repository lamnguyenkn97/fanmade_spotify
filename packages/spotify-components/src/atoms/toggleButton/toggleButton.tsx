import React from 'react';

export const Toggle = ()=> {
    return(
        <label className="dse-spotify-toggle">
            <input id='checkBox' type="checkbox"/>
            <span className="slider round"></span>
        </label>
    )
}