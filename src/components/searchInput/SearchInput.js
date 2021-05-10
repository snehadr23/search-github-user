import './SearchInput.css';

function SearchInput(props) {
    return(
        <input type = 'text' placeholder = 'Enter Username....' className = 'search-input' onChange = {props.change}/>
    )
}

export default SearchInput;