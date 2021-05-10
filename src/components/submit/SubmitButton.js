import './SubmitButton.css';

function SubmitButton(props) {
    return (
        <button className = 'btn' onClick = {props.click}>Submit</button>
    )
}

export default SubmitButton;