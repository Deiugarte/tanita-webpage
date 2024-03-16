import React, { useEffect, useState } from 'react';
import API_URL from './api'

const BodyComposition = ({id}) => {
  const [bodyCompositionData, setBodyCompositionData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${id}/body-composition`);
        const data = await response.json();
        setBodyCompositionData(data);
      } catch (error) {
        console.error('Error fetching body composition data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="body-composition">
      <h2>Body Composition</h2>
      <table>
        <tbody>
          <tr>
            <td>Body Fat:</td>
            <td>{bodyCompositionData.bodyFat || 'N/A'}%</td>
          </tr>
          <tr>
            <td>Muscle Body Mass:</td>
            <td>{bodyCompositionData.globalMuscle || 'N/A'} %</td>
          </tr>
          <tr>
            <td>Body Mass Index:</td>
            <td>{bodyCompositionData.bodyMassIndex || 'N/A'}</td>
          </tr>
          <tr>
            <td>Bone Mass:</td>
            <td>{bodyCompositionData.boneMass || 'N/A'} kg</td>
          </tr>
          <tr>
            <td>Visceral Fat Level:</td>
            <td>{bodyCompositionData.visceralFatLevel || 'N/A'}</td>
          </tr>
          <tr>
            <td>Global Water:</td>
            <td>{bodyCompositionData.globalWater || 'N/A'} %</td>
          </tr>
          <tr>
            <td>Daily Calory Intake:</td>
            <td>{bodyCompositionData.dailyCaloryIntake || 'N/A'} kcal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BodyComposition