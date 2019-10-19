import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";
const Table = ({ data }) =>
  !data.length ? (
    <p>Nothing to show</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        一共<strong>{data.length}道菜</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
Table.propTypes = {
  data: PropTypes.array.isRequired
};
export default Table;