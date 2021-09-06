import React from 'react'
import './InputOption.css'
function InputOptions({title,Icon,color}) {
    return (
        <div classNam="inputOptions">
            <Icon style={{color:color}}></Icon>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions;
