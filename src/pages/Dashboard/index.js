import React from 'react';

import { graphql } from 'react-apollo';
import ListTandas from '../../queries/listTandas';
import MainLayout from '../../Layouts/Main';
import DashboardPanel from './DashboardPanel';

const Dashboard = ({ tandas }) => {
  const myTandas = tandas.filter(tanda => {
    return tanda.participants.includes(1);
  });
  return (
    <MainLayout>
      <div className="dashboard-page container">
        <h2>Mis Tanditas</h2>
        <hr />
        <div className="row">
          <div className="panels-list small-margin-top">
            {myTandas.map(tanda => (
              <DashboardPanel key={tanda.id} {...tanda} />
            ))}
          </div>
        </div>
        <h2 className="big-margin-top">Explorar Tanditas</h2>
        <hr />
        <div className="row">
          <div className="panels-list small-margin-top">
            {tandas.map(tanda => (
              <DashboardPanel key={tanda.id} {...tanda} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default graphql(ListTandas, {
  options: {
    fetchPolicy: 'cache-and-network',
  },
  props: props => ({
    tandas: props.data.listTandas ? props.data.listTandas.items : [],
  }),
})(Dashboard);
