import React from 'react';
import MainLayout from '../../Layouts/Main';
import DashboardPanel from './DashboardPanel';

const Dashboard = () => {
  const tanditas = Array.from({ length: 6 }, () => ({
    progress: Math.floor(Math.random() * 100),
  }));
  return (
    <MainLayout>
      <div className="dashboard-page container">
        <h2>Mis Tanditas</h2>
        <hr />
        <div className="row">
          <div className="panels-list small-margin-top">
            {tanditas.map(tanda => (
              <DashboardPanel progress={tanda.progress} />
            ))}
          </div>
        </div>
        <h2 className="big-margin-top">Explorar Tanditas</h2>
        <hr />
        <div className="row">
          <div className="panels-list small-margin-top">
            {tanditas.map(tanda => (
              <DashboardPanel progress={tanda.progress} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
