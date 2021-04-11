import React from "react";

const Pagination = ({ numOfPages, changePageNumber }) => {
  const pageNumbers = [];
  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination mt-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              onClick={() => changePageNumber(number)}
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
