/* eslint-disable jsx-a11y/anchor-is-valid */
import "../styles/Pagination.css";

export default function Pagination() {
  return (
    <nav className="nav-pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#">
            &larr;
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item ">
          <a className="page-link" href="#">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            10
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            11
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            12
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            &rarr;
          </a>
        </li>
      </ul>
    </nav>
  );
}
