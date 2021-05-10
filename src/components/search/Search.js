import                   './Search.css';
import {useState, useEffect}   from 'react';
import SearchInput  from '../searchInput/SearchInput';
import UserList     from '../userList/UserList';
import SubmitButton from '../submit/SubmitButton';
import axios        from 'axios';
import Pagination   from '../pagination/Pagination';

function Search(props) {
    const [username, setUsername] = useState('');
    const [userDtls, setUserDtls] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(9);
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    let currentUsers = [];
    function submitBtnClickHandler() {
        axios.get('https://api.github.com/search/users?q=' + username)
        .then(res => {
            console.log('res.data: ', res.data.items);
            setUserDtls(res.data.items);
        })
        .catch(err => {
            setUserDtls({error: err});
        })
    }
    function usernameChangeHandler(e) {
        setUsername(e.target.value);
    }
    function paginate(pageNumber) {
        setCurrentPage(pageNumber);
    }
    useEffect(() => {
        console.log('currentUsers: ', currentUsers);
    }, [userDtls]);
    currentUsers = userDtls.slice(firstUserIndex, lastUserIndex);
    return (
        <main className = 'main'>
            <SearchInput change = {(e) => usernameChangeHandler(e)}/>
            <SubmitButton click = {(e) => submitBtnClickHandler(e)}/>
            <UserList userDtls = {currentUsers}/>
            <Pagination totalusers = {userDtls.length} usersPerPage = {usersPerPage} paginate = {paginate}/>
        </main>
    )
}

export default Search;