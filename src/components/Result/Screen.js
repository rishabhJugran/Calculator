import React, { useState } from 'react'
import ButtonKey from '../Button/ButtonKey';

function Screen() {

    const [ result, setResult ] = useState('');

    const handleButton = (name) => {
        switch (name) {
            case 'sqrt':
                setResult(Math.round(Math.sqrt(eval(result))*100)/100);
                break;
            
            case 'fact':
                let n,p=1;
                for(n=1;n<=eval(result);n++){
                    p=p*n;
                } 
                setResult(p);
                break;
            
            case '^2':
                setResult(Math.round(Math.pow(result,2)*100)/100)
                break;
            
            case 'log':
                setResult(Math.round(Math.log(result)*100)/100)
                break;
            
            case '%':
                setResult(Math.round(eval(result)*10000)/100)
                break;
            default:
                setResult(`${result}` + name)
                break;
        }
    }

    const clearResult = () => {
        setResult('')
    }

    const solveResult = () => {
        setResult(Math.round(eval(result)*100)/100)
    }

    const backSpace = () => {
        setResult(result.slice(0,result.length-1))
    }

    const constant = (val) => {
        if(result.length || result > 0){
            val==='e' ? setResult(`${result}*2.72`) : setResult(`${result}*3.14`)
        } else {
            val==='e' ? setResult(Math.round(Math.E * 100)/100) : setResult(Math.round(Math.PI * 100)/100)
        }
    }

    const trigoFun = (fun) => {
        switch (`Math.${fun}`) {
            case 'Math.sin':
                setResult(Math.round(Math.sin(eval(result)*Math.PI/180)*100)/100)
                break;
            case 'Math.cos':
                setResult(Math.round(Math.cos(eval(result)*Math.PI/180)*100)/100)
                break;
            case 'Math.tan':
                setResult(Math.round(Math.tan(eval(result)*Math.PI/180)*100)/100)
                break;
            default:
                break;
        }
    }

    return (
        <div className='cal'>
            <input type='text' value={result} onChange={(e) => setResult(e.target.value)} />
            <ButtonKey handleButton={handleButton} constant={constant} trigoFun={trigoFun} clearResult={clearResult} solveResult={solveResult} backSpace={backSpace} />
        </div>
    )
}

export default Screen
