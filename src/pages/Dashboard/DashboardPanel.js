import React from 'react';
import Panel from '../../components/Panel';
import ProgressRadial from '../../shared_components/ProgressRadial';
import { SVGWallet } from '../../shared_components/svg';

const DashboardPanel = ({ progress = 80 }) => {
  return (
    <Panel>
      <div>
        <div className="small-padding dark-bg inverted white-text-color">
          <h3>Ahorra $3,000</h3>
        </div>
        <div className="small-padding">
          <ProgressRadial progress={progress} height={140}>
            <div className="green-text-color">
              <h2 className="justify-center">{progress}%</h2>
              <p>Para empezar</p>
            </div>
          </ProgressRadial>
        </div>
        <div className="small-padding">
          <ul>
            <li>
              <strong>Frecuencia:</strong> 15 Días (Quincenal)
            </li>
            <li>
              <strong>Ahorro:</strong> $433.00
            </li>
            <li>
              <strong>Vence:</strong> 16/Oct/2018
            </li>
            <li>
              <strong>Tasa Interés:</strong> 10%
            </li>
          </ul>
        </div>
        <div className="panel-buttons">
          <button className="button primary small-margin-right flex">
            Unirme
            <SVGWallet />
          </button>
          <button className="button secondary green flex">Ver más</button>
        </div>
      </div>
    </Panel>
  );
};

export default DashboardPanel;
