import './Pagination.css';

function Pagination(props) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalusers / props.usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className = 'pagination'>
                {pageNumbers.map((pageNumber) => (
                    <li key = {pageNumber} className = 'page-item mr-3'>
                        <a onClick = {() => props.paginate(pageNumber)} className = 'page-link'>{pageNumber}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;