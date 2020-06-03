import React from 'react';

const Pagination = ({ currentPage, setPage, pages }) => {
  const listPages = [];

  for (let i = 1; i <= pages; i++) {
    listPages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <div
          className="angle-back"
          onClick={() =>
            setPage(currentPage === 1 ? currentPage : currentPage - 1)
          }
        >
          &lt;
        </div>
      ) : null}
      <ul className="pagination-pages">
        {listPages.map(page => (
          <li
            onClick={() => setPage(page)}
            key={page}
            className={`pagination-page ${
              currentPage === page ? 'active' : ''
            }`}
          >
            {page}
          </li>
        ))}
      </ul>
      {currentPage !== listPages.length ? (
        <div
          className="angle-forward"
          onClick={() =>
            setPage(
              currentPage === listPages.length ? currentPage : currentPage + 1
            )
          }
        >
          &gt;
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
