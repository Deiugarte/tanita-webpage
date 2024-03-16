import React, { useState } from 'react';
import UserInfo from './UserInfo';
import BodyComposition from './BodyComposition';
import SegmentalAnalysis from './SegmentalAnalysis';
import HistoryGraph from './HistoryGraph';

const InBodyReport = () => {
    const [id, setId] = useState(1);

    return (
        <div>
             <div className="button-container">
                <button onClick={() => setId(1)}>Deivid</button>
                <button onClick={() => setId(2)}>Yelba</button>
            </div>
            <div className="inbody-report-container">
            <div className="inbody-report-left">
                <UserInfo id={ id} />
                <BodyComposition id={ id} />
                <SegmentalAnalysis id={ id} />
            </div>
            <div className="inbody-report-right">
                <HistoryGraph id={ id} />
            </div>
        </div>
        </div>
       
    );
};

export default InBodyReport;