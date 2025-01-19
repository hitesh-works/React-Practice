import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pagination.css";

export default function Pagination() {
  const [usersData, setUsersData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(10);
  const indexOfLastItem = currentPage * rowPerPage;
  const indexOfFirstItem = indexOfLastItem - rowPerPage;
  const currentItems = usersData?.users?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(usersData?.total / rowPerPage);

  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=0").then((response) => {
      console.log(response);
      setUsersData(response?.data);
    });
  }, []);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>UsersData</h1>
      <table className="table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((value, index) => (
            <tr key={index}>
              <td>{currentPage * rowPerPage - rowPerPage + index + 1}</td>
              <td>{value.firstName}</td>
              <td>{value.email}</td>
              <td>{value.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
