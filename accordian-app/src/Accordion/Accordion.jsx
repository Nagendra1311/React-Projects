import React, { useState } from 'react'
import { data } from './data'
import './Accordion.css'
export const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMutliSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }
    const handleMultiSelection = (getCurrentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
            copyMultiple.slice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple)
    }
    return (
        <div className='wrapper'>
            <h1>Single and Mutli Accordion</h1>
            <button onClick={() => setEnableMultiSelection(!enableMutliSelection)}>Enable Multi Accordion</button>

            <div className="accordion">
                {
                    data && data.length > 0 ? data.map(dataItem =>
                        <div onClick={enableMutliSelection ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}
                            className='title'
                            key={dataItem.id}>

                            <div className='item'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            <div>
                                {
                                    enableMutliSelection
                                        ? multiple.indexOf(dataItem.id) !== -1 && (
                                            <div className="text">{dataItem.answer} </div>
                                        )
                                        : selected === dataItem.id && (<div className="text">{dataItem.answer} </div>)
                                }

                            </div>
                        </div>
                    )
                        : <div>No Accordian data</div>
                }
            </div>


        </div>
    )
}
