import React, { useState, useEffect } from 'react';

const Count = () => {
    const [data, setData] = useState(0);
    const [Data, setTimeoutData] = useState(0);

    useEffect(() => {
        console.log("useEffect start");
        setTimeout(() => {
            setTimeoutData(Data + 1);
        }, 1000);
    },);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div style={{ fontSize: '48px' }}>{data}</div>
            <button style={{padding: '10px 20px', fontSize: '18px', backgroundColor: '#C4C4C4',borderRadius: '5px',cursor: 'pointer',}}onClick={() => setData(data + 1)}>Click</button>
            <h2 style={{ marginTop: '50px', fontSize: '48px' }}>Timeout</h2>
            <h2 style={{ fontSize: '48px' }}>{Data}</h2>
        </div>
    );
};

export default Count;
