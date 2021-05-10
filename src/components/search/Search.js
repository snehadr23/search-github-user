import                   './Search.css';
import {useState, useEffect}   from 'react';
import SearchInput  from '../searchInput/SearchInput';
import UserList     from '../userList/UserList';
import SubmitButton from '../submit/SubmitButton';
import axios        from 'axios';

function Search(props) {
    const [username, setUsername] = useState('');
    const [userDtls, setUserDtls] = useState([]);
    const [userListToDisplay, setUserListToDisplay] = useState(null);
    function submitBtnClickHandler() {
        console.log('Btn clicked!!');
        axios.get('https://api.github.com/search/users?q=' + username)
        .then(res => {
            console.log('res.data: ', res.data.items);
            setUserDtls(res.data.items);
        })
        .catch(err => {
            console.log('err: ', err);
            setUserDtls({error: err});
          })
    }
    function usernameChangeHandler(e) {
        setUsername(e.target.value);
    }
    useEffect(() => {
        console.log('userDtls changed');
        let userListToDisplay = null;
        userListToDisplay = (
            userDtls.map((user) => {
                return <UserList
                        userDtls = {user}
                        key = {user.id}/>
            })
        )
        setUserListToDisplay(userListToDisplay);
    }, [userDtls]);
    return (
        <main>
            <SearchInput change = {(e) => usernameChangeHandler(e)}/>
            <SubmitButton click = {(e) => submitBtnClickHandler(e)}/>
            <div className = 'user-details'>
                <p>
                    <span className = 'user-detail'>Avatar</span>
                    <span className = 'user-detail'>Username</span>
                    <span className = 'user-detail'>Type</span>
                </p>
                {userListToDisplay}
            </div>
        </main>
    )
}

export default Search;