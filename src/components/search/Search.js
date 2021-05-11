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
    const [usersPerPage] = useState(9);
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const [sortType, setSortType] = useState('');
    const [sortTypeIcon, setSortTypeIcon] = useState('fa-sort');
    let currentUsers = [];
    function submitBtnClickHandler() {
        axios.get('https://api.github.com/search/users?q=' + username)
        .then(res => {
            setUserDtls(res.data.items);
            setSortType('');
            setSortTypeIcon('fa-sort');

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
    function sortUsername() {
        if(sortType === '') {
            setSortType('asc');
            setSortTypeIcon('fa-sort-up');
        } else if (sortType === 'asc') {
            setSortType('desc');
            setSortTypeIcon('fa-sort-down');
        } else if(sortType === 'desc') {
            setSortType('asc');
            setSortTypeIcon('fa-sort-up');
        }
    }
    useEffect(() => {
        if (sortType !== '') {
            const sortedUserDtlsList = userDtls.sort((firstListItem, secondListItem) => {
                const sortReversed = (sortType === 'asc') ? 1 : -1;
                return sortReversed  * firstListItem.login.localeCompare(secondListItem.login);
            });
            currentUsers = sortedUserDtlsList.slice(firstUserIndex, lastUserIndex);
        }
    }, [sortType]);
    currentUsers = userDtls.slice(firstUserIndex, lastUserIndex);
    
    return (
        <main className = 'main'>
            <SearchInput change = {(e) => usernameChangeHandler(e)}/>
            <SubmitButton click = {(e) => submitBtnClickHandler(e)}/>
            <UserList userDtls = {currentUsers} sortUsername = {sortUsername} sortTypeIcon = {sortTypeIcon}/>
            <Pagination totalusers = {userDtls.length} usersPerPage = {usersPerPage} paginate = {paginate}/>
        </main>
    )
}

export default Search;