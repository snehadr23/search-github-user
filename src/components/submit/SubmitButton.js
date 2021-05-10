import './SubmitButton.css';

function SubmitButton(props) {
    return (
        <button className = 'btn btn-primary' onClick = {props.click}>Submit</button>
    )
}

export default SubmitButton;