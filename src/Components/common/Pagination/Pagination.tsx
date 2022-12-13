import React, {useState} from 'react';
import s from "./Pagination.module.css";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChangedHandler: (page: number) => void
    portionDiapasonSize?: number
}

export const Pagination: React.FC<PaginationPropsType> = ({
                                                              totalItemsCount,
                                                              pageSize,
                                                              currentPage,
                                                              onPageChangedHandler,
                                                              portionDiapasonSize = 10,
                                                              ...props
                                                          }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionTotalCount = Math.ceil(pagesCount / portionDiapasonSize)
    let [portionSerialNumber, setPortionSerialNumber] = useState(Math.ceil(currentPage/portionDiapasonSize))
    // let [portionSerialNumber, setPortionSerialNumber] = useState(1)
    console.log(portionSerialNumber)
    console.log(currentPage)
    let leftPortionPageNumber = (portionSerialNumber - 1) * portionDiapasonSize + 1
    let rightPortionPageNumber = portionSerialNumber * portionDiapasonSize

    // useEffect(()=>setPortionSerialNumber(Math.ceil(currentPage/portionDiapasonSize)), [currentPage]);

    return (
        <div className={s.pages}>
            {
                portionSerialNumber > 1 &&
                <button onClick={() => {
                    setPortionSerialNumber(portionSerialNumber - 1)
                }}>PREV</button>
            }
            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return <span
                        className={`${s.span} ${currentPage === page ? s.selected : ''}`}
                        key={page}
                        onClick={(e) => onPageChangedHandler(page)}
                    >{page}</span>
                })
            }
            {
                portionTotalCount > portionSerialNumber &&
                <button onClick={() => setPortionSerialNumber(portionSerialNumber + 1)}>NEXT</button>
            }

        </div>
    )
}
