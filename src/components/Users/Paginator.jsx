import React from 'react';
import c from './Users.module.css';


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 20/*pagesCount*/; i++) {
        pages.push(i);
    }



    return (

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? c.selectedPage : undefined}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>

    )
}

export default Paginator;