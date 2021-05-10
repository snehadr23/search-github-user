import './UserList.css';

function UserList(props) {
    if(props.userDtls.error) {
        return (
            <p>Something went wrong! Please try again later!</p>
        )
    } else {
        return (
            <p>
                <span className = 'user-detail'>{props.userDtls.avatar_url}</span>
                <span className = 'user-detail'>{props.userDtls.login}</span>
                <span className = 'user-detail'>{props.userDtls.type}</span>
            </p>
        )
    }
}

export default UserList;