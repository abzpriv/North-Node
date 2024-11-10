'use client';

import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';
import AdvisorNavbar from './AdvisorNavbar';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdvisorDashboard: React.FC = () => {
  const [userCount, setUserCount] = useState(0); 
  const [feedbackCount, setFeedbackCount] = useState(0); 
  const [revenue, setRevenue] = useState(0); 

  const targetUserCount = 1200; 
  const targetFeedbackCount = 75; 
  const targetRevenue = 1500; 

  const data = {
    labels: ['Users', 'Feedback', 'Revenue'],
    datasets: [
      {
        label: 'Registered Count',
        data: [userCount, feedbackCount, revenue],
        backgroundColor: ['#FFC700', '#D8B72D', '#A67C2A'],
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setUserCount(prev => Math.min(prev + 1, targetUserCount));
      setFeedbackCount(prev => Math.min(prev + 1, targetFeedbackCount));
      setRevenue(prev => Math.min(prev + 1, targetRevenue));
    }, 1);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section>
        <AdvisorNavbar />
    <section className="min-h-screen mt-16  bg-white text-gold p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gold to-brown-800 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-customGold">Advisor Dashboard</h1>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <div className="bg-customGold p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 p-4">
              <FaUsers className="text-6xl text-darkBrown mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mt-16">Total Users</h2>
            <p className="text-4xl font-extrabold">{userCount}</p>
            <div className="mt-4">
              <CircularProgressbar 
                value={userCount} 
                maxValue={1500} 
                text={`${userCount}`} 
                styles={{
                  root: { height: '100px' }, 
                  path: {
                    stroke: '#FFC700', 
                    strokeLinecap: 'round',
                    transition: 'stroke 0.5s ease 0s',
                  },
                  trail: {
                    stroke: 'black', 
                  },
                  text: {
                    fill: 'white', 
                    fontSize: '24px', 
                  },
                }} 
              />
            </div>
          </div>

          <div className="bg-customGold p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 p-4">
              <MdFeedback className="text-6xl text-darkBrown mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mt-16">Total Feedback</h2>
            <p className="text-4xl font-extrabold">{feedbackCount}</p>
            <div className="mt-4">
              <CircularProgressbar 
                value={feedbackCount} 
                maxValue={130} 
                text={`${feedbackCount}`} 
                styles={{
                  root: { height: '100px' }, 
                  path: {
                    stroke: '#FFC700', 
                    strokeLinecap: 'round',
                    transition: 'stroke 0.5s ease 0s',
                  },
                  trail: {
                    stroke: 'black', 
                  },
                  text: {
                    fill: 'white', 
                    fontSize: '24px', 
                  },
                }} 
              />
            </div>
          </div>

          <div className="bg-customGold p-6 rounded-lg shadow-lg text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 p-4">
              <FaMoneyBillWave className="text-6xl text-darkBrown mx-auto" />
            </div>
            <h2 className="text-2xl font-bold mt-16">Total Revenue</h2>
            <p className="text-4xl font-extrabold">${revenue}</p>
            <div className="mt-4">
              <CircularProgressbar 
                value={revenue} 
                maxValue={2000} 
                text={`$${revenue}`} 
                styles={{
                  root: { height: '100px' }, 
                  path: {
                    stroke: '#FFC700', 
                    strokeLinecap: 'round',
                    transition: 'stroke 0.5s ease 0s',
                  },
                  trail: {
                    stroke: 'black', 
                  },
                  text: {
                    fill: 'white', 
                    fontSize: '24px', 
                  },
                }} 
              />
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-8">
            <h2 className="text-2xl font-bold text-customDark mb-4">Registration Overview</h2>
            <div className="w-full overflow-hidden">
              <Bar
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false, 
                  plugins: {
                    legend: {
                      position: 'top',
                      labels: {
                        color: 'black', 
                      },
                    },
                    title: {
                      display: true,
                      text: 'Registered Users, Feedback, and Revenue',
                      color: 'black', 
                    },
                  },
                }}
                height={400} 
              />
            </div>
          </div>
      </div>
    </section>
    </section>
  );
};

export default AdvisorDashboard;
