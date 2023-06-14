import { useState } from 'react'

function ChildButton(props) {

    const [disabled, setDisabled] = useState(false)
    var [amount, setAmount] = useState(props.amount)
    
    function handleClick() {
        props.selectFruit(props.name)
        amount -= 1
        setAmount(amount)

        if (amount == 0) {
            setDisabled(true)
        }
    }

    return (

        <div>
            <button disabled={disabled} onClick={handleClick}>
                {props.name}
            </button>

            <br></br>
        </div>

    )

}

export { ChildButton }