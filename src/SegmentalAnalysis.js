import React, { useEffect, useState } from 'react';
import API_URL from './api'

const SegmentalAnalysis = ({id}) => {
  const [segmentData, setSegmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${id}/segment-analysis`);
        const data = await response.json();
        setSegmentData(data);
      } catch (error) {
        console.error('Error fetching segmental analysis data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="segmental-analysis">
      <h2>Segmental Analysis</h2>
      <table>
        <thead>
          <tr>
            <th>Segment</th>
            <th>Fat Mass (%)</th>
            <th>Lean Body Mass (kg)</th>
          </tr>
        </thead>
        <tbody>
          {segmentData.map((item, index) => (
            <tr key={index}>
              <td>{item.segment}</td>
              <td>{item.fatMass || 'N/A'} %</td>
              <td>{item.leanBodyMass || 'N/A'} kg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SegmentalAnalysis;