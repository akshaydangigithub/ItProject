"use client";
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import '../../css/componentcss/SuperAdminDashboardView.css';

export default function SuperAdminDashboardView() {
  const UserData = [
    {
      id: 1,
      name: 'Total Complaints',
      userGain: 100,
    },
    {
      id: 2,
      name: 'Pending Complaints',
      userGain: 200,
    },
    {
      id: 3,
      name: 'Resolved Complaints',
      userGain: 300,
    },
    {
      id: 4,
      name: 'Total Users',
      userGain: 400,
    },
  ];

  const [userDataa, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: 'Users Gained',
        data: [100, 200, 300, 400],
        backgroundColor: ['#2ecc71', '#3498db', '#e67e22', '#9b59b6'],
        borderColor: 'black',
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    setUserData({
      labels: UserData.map((data) => data.name),
      datasets: [
        {
          label: 'Users Gained',
          data: [100, 200, 300, 400],
          backgroundColor: ['#2ecc71', '#3498db', '#e67e22', '#9b59b6'],
          borderColor: 'black',
          borderWidth: 0,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'All Details',
      },
    },
  };

  return (
    <>
      <div className="main">
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">100</div>
              <div className="cardName">Total Complaints</div>
            </div>
            <div className="iconBx"></div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">200</div>
              <div className="cardName">Pending Complaints</div>
            </div>
            <div className="iconBx"></div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">300</div>
              <div className="cardName">Resolved Complaints</div>
            </div>
            <div className="iconBx"></div>
          </div>
          <div className="card">
            <div>
              <div className="numbers">400</div>
              <div className="cardName">Total Users</div>
            </div>
            <div className="iconBx"></div>
          </div>
        </div>
        <Row>
          <Col md={6}>
            <Bar data={userDataa} options={options} />
          </Col>
          <Col md={6}>
            <Pie data={userDataa} options={{ ...options, style: { width: '280px', height: '280px' } }} />
          </Col>
        </Row>
      </div>
    </>
  );
}
