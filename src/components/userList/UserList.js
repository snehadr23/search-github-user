import './UserList.css';

function UserList(props) {
    if(props.userDtls.error) {
        return (
            <p>Something went wrong! Please try again later!</p>
        )
    } else if (props.userDtls.length === 0) {
        return null;
    } else {
        return (
            <div className = 'user-details list-group mb-4 mt-4'>
                <p className = 'list-group-item'>
                    <span className = 'user-detail'>Avatar</span>
                    <span className = 'user-detail'>Login
                        <a onClick = {props.sortUsername}>
                            <i className = {"fas " + props.sortTypeIcon}></i>
                        </a>
                    </span>
                    <span className = 'user-detail'>Type</span>
                </p>
                {props.userDtls.map((user) => (
                    <p key = {user.id}  className = 'list-group-item'>
                        <span className = 'user-detail'>{user.avatar_url}</span>
                        <span className = 'user-detail'>{user.login}</span>
                        <span className = 'user-detail'>{user.type}</span>
                    </p>
                ))}
            </div>
        )
    }
}

export default UserList;