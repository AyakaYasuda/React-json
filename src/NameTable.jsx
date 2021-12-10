import React from 'react';
import JsonData from './data.json';

const DisplayJsonData = () => {
  const displayData = JsonData.map(info => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
    </div>
  );
};

export default DisplayJsonData;
