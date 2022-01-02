import React from 'react'

function ButtonKey({ handleButton, clearResult, backSpace, trigoFun, solveResult, constant }) {
    return (
        <div className='keypad'>
            <div className='row'>
                <button className='btn-f' onClick={(e) => handleButton(e.target.name)} name={'sqrt'}>&radic;</button>
                <button className='btn-f' onClick={(e) => constant(e.target.name)} name={'pi'}>π</button>
                <button className='btn-f' onClick={(e) => handleButton(e.target.name)} name={'^2'}>^2</button>
                <button className='btn-f' onClick={(e) => handleButton(e.target.name)} name={'fact'}>!</button>
                <button className='btn' style={{background:'#ff3523'}} onClick={() => clearResult()} name={`AC`}>AC</button>
            </div>
            
            <div className='row'>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`(`}>(</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`)`}>)</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={'%'}>%</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`/`}>/</button>
                <button className='btn-f' onClick={(e) => trigoFun(e.target.name)} name={'sin'}>sin</button>
            </div>

            
            <div className='row'>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={7}>7</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={8}>8</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={9}>9</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`*`}>*</button>
                <button className='btn-f' onClick={(e) => trigoFun(e.target.name)} name='cos'>cos</button>
            </div>

            <div className='row'>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={4}>4</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={5}>5</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={6}>6</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`-`}>-</button>
                <button className='btn-f' onClick={(e) => trigoFun(e.target.name)} name='tan'>tan</button>
            </div>

            <div className='row'>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={1}>1</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={2}>2</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={3}>3</button>
                <button className='btn-k' onClick={(e) => handleButton(e.target.name)} name={`+`}>+</button>
                <button className='btn-f' onClick={(e) => constant(e.target.name)} name='e'>e</button>
            </div>

            <div className='row'>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={`.`}>.</button>
                <button className='btn' onClick={(e) => handleButton(e.target.name)} name={0}>0</button>
                <button className='btn' onClick={() => backSpace()} name={`C`}>C</button>
                <button className='btn' style={{background:'green',color:'white'}} onClick={() => solveResult()} name={`=`}>=</button>
                <button className='btn-f' onClick={(e) => handleButton(e.target.name)} name='log'>log</button>
            </div>
        </div>
    )
}

export default ButtonKey
