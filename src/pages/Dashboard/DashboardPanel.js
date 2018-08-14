import React from 'react';
import Panel from '../../components/Panel';
import ProgressRadial from '../../shared_components/ProgressRadial';
import { SVGWallet, SVGInfo } from '../../shared_components/svg';

const DashboardPanel = ({ progress = 80 }) => {
  return (
    <Panel>
      <div>
        <div className="gradient-bg inverted small-padding">
          <ProgressRadial progress={progress} height={140}>
            <div className="white-text-color">
              <h2 className="justify-center">{progress}%</h2>
              <p>Para empezar</p>
            </div>
          </ProgressRadial>
        </div>
        <div className="small-padding text-center">
          <p className="no-margin">Total de la Tandita</p>
          <h2>$3,000</h2>
        </div>
        <div className="small-padding">
          <ul>
            <li>
              <strong>Frecuencia</strong> 15 Días (Quincenal)
            </li>
            <li>
              <strong>Ahorro</strong> $433.00
            </li>
            <li>
              <strong>Vence</strong> 16/Oct/2018
            </li>
            <li>
              <strong>Interés</strong> 10%
            </li>
          </ul>
        </div>
        <div className="panel-buttons">
          <button className="button primary small-margin-right flex">
            Unirme
            <SVGWallet />
          </button>
          <button className="button secondary green flex">
            Ver más
            <SVGInfo />
          </button>
        </div>
      </div>
    </Panel>
  );
};

export default DashboardPanel;
