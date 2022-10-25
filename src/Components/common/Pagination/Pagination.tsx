import React from 'react';
import s from "./Pagination.module.css";


type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChangedHandler: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({totalUsersCount,pageSize, currentPage, onPageChangedHandler, ...props  }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        //  if (pages.length < 10)
        pages.push(i)
    }

    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);


    return (
        <div className={s.pages}>
            {
                slicedPages.map(page => {
                    return <span className={currentPage === page ? s.selected : ""}
                                 onClick={(e) => {
                                    onPageChangedHandler(page)
                                 }}>{page}</span>
                })
            }
        </div>
    )
}