import React from 'react';

const Pagination = ({ currentPage, setPage, pages }) => {
  const listPages = [];

  for (let i = 1; i <= pages; i++) {
    listPages.push(i);
  }

  return (
    <div className="pagination">
      {currentPage !== 1 ? (
        <div className="angle-back">
          <a
            onClick={() =>
              setPage(currentPage === 1 ? currentPage : currentPage - 1)
            }
          >
            &lt;
          </a>
        </div>
      ) : null}
      <ul className="pagination-pages">
        {listPages.map(page => (
          <li
            key={page}
            className={`pagination-page ${
              currentPage === page ? 'active' : ''
            }`}
          >
            <a onClick={() => setPage(page)}>{page}</a>
          </li>
        ))}
      </ul>
      {currentPage !== listPages.length ? (
        <div className="angle-forward">
          <a
            onClick={() =>
              setPage(
                currentPage === listPages.length ? currentPage : currentPage + 1
              )
            }
          >
            &gt;
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
