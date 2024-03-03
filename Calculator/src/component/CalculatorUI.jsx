import React, { useState } from 'react'
import './CalculatorUI.css'

export default function CalculatorUI() {
    const [input, setInput] = useState("")

    const clickHandle = (e) => {
        setInput(input.concat(e.target.name))
    }

    const backspace = () => {
        setInput(input.slice(0, -1))
    }

    const clear = () => {
        setInput('')
    }

    const calculator = () => {
        setInput(eval(input).toString())
    }


    return (
        <div>
            <div className='calculator'>
                <h1>Calculator</h1>
                <div className='calculator-items' >
                    <div>
                        <input type="text" value={input} id="" placeholder='0' />
                    </div>
                    <div>
                        <button onClick={clear} className='operetor'>AC</button>
                        <button onClick={backspace} className='operetor'>Del</button>
                        <button name='%' onClick={clickHandle} className='operetor'>%</button>
                        <button name='/' onClick={clickHandle} className='operetor'>/</button>

                    </div>
                    <div>
                        <button name='7' onClick={clickHandle}> 7 </button>
                        <button name='8' onClick={clickHandle}> 8 </button>
                        <button name='9' onClick={clickHandle}> 9 </button>
                        <button name='*' onClick={clickHandle} className='operetor'>*</button>

                    </div>
                    <div>
                        <button name='4' onClick={clickHandle}> 4 </button>
                        <button name='5' onClick={clickHandle}> 5 </button>
                        <button name='6' onClick={clickHandle}> 6 </button>
                        <button name='-' onClick={clickHandle} className='operetor'>-</button>

                    </div>
                    <div>
                        <button name='1' onClick={clickHandle} > 1 </button>
                        <button name='2' onClick={clickHandle}> 2 </button>
                        <button name='3' onClick={clickHandle}> 3 </button>
                        <button name='+' onClick={clickHandle} className='operetor'>+</button>

                    </div>
                    <div>
                        <button name='0' onClick={clickHandle}> 0 </button>
                        <button name='00' onClick={clickHandle}> 00 </button>
                        <button name='.' onClick={clickHandle} className='operetor'>.</button>
                        <button onClick={calculator} className='operetor'>=</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
