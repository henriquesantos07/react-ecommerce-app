import React, {useState} from 'react'

export const Eventos = () => {
  
    function Select({options, onSelect, defaultOption}) {
        return options.map(option => ( <>
            <input onChange={(evt) => {
                onSelect(option.value)
            }}
            type="radio"
            name="color"
            checked={defaultOption === option.value}
            id={option.value}/>
                <label for={option.value}>{option.text}</label>
        </>

        ))
    }

    const [option, setOption] = useState(1);
    const options = [{ value: 1, text: 'Azul' }, {value: 2, text: 'roxo'}];
  
    function optionSelected(value){
        setOption(value)
    };
  
    return (
    
    <div>
        <Select 
            option={options}
            onSelect={optionSelected}
            defaultOption={option}
        />
    </div>
  )
}
