import React, { useEffect, useState } from 'react';
import API_URL from './api'

const UserInfo = ({id}) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${id}`);
        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="user-info">
      <h2>User Information</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{userInfo.name || 'N/A'}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{userInfo.age || 'N/A'}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{userInfo.gender || 'N/A'}</td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>{userInfo.height || 'N/A'} cm</td>
          </tr>
          <tr>
            <td>Weight:</td>
            <td>{userInfo.weight || 'N/A'} kg</td>
          </tr>
          <tr>
            <td>Estimated metabolic age:</td>
            <td>{userInfo.metabolicAge || 'N/A'} years</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;