import React from 'react'
import PaginationJs from 'react-js-pagination'
import { PaginationWrapper } from './style'

function Pagination({
    activePage,
    totalPage,
    onChange,
    itemsCountPerPage,
    pageRangeDisplayed,
    totalItemsCount
  }) {
    return (
        <PaginationWrapper>
        <div className="pagination-container">
      <p>Page {activePage}/{totalPage > 1000 ? 1000 : totalPage}</p>
      <PaginationJs
        activePage={activePage}
        disabledClass="page--disabled"
        firstPageText="First"
        hideNavigation={totalPage <= 1}
        itemsCountPerPage={itemsCountPerPage}
        lastPageText="Last"
        nextPageText="Next"
        onChange={onChange}
        //pageRangeDisplayed={isMobile ? 3 : pageRangeDisplayed}
        prevPageText="Prev"
        totalItemsCount={totalItemsCount > 1000 ? 1000 : totalItemsCount}
      />
    </div>
    </PaginationWrapper>
    )
}

export default Pagination
