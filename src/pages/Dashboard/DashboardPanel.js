import React, { Component } from 'react';

import Panel from '../../components/Panel';
import ProgressRadial from '../../shared_components/ProgressRadial';
import { SVGWallet } from '../../shared_components/svg';
import { toMoney } from '../../utils/formatter';
import TanditaModal from './TanditaModal';

const frequencyLabels = {
  quincenal: '15 Días (Quincenal)',
  mensual: '30/31 Días (mensual)',
};
const participantsNumber = 10;
const multiply = 100 / participantsNumber;

class DashboardPanel extends Component {
  state = {
    showingModal: false,
  };

  showModal = () => {
    this.setState(state => ({
      showingModal: !state.showingModal,
    }));
  };

  renderProgressRadial = progress => {
    return (
      <ProgressRadial progress={progress} height={140}>
        <div className="white-text-color">
          <h2 className="justify-center">{progress}%</h2>
          <p>Para empezar</p>
        </div>
      </ProgressRadial>
    );
  };

  renderSummary = (frequency, amount) => {
    return (
      <div className="small-padding summary">
        <ul>
          <li>
            <strong>Frecuencia</strong> {frequencyLabels[frequency]}
          </li>
          <li>
            <strong>Ahorro</strong> {toMoney(amount / participantsNumber)}
          </li>
          <li>
            <strong>Vence</strong> 16/Oct/2018
          </li>
          <li>
            <strong>Interés</strong> 10%
          </li>
        </ul>
      </div>
    );
  };

  render() {
    const { participants, frequency, amount } = this.props;
    const { showingModal } = this.state;
    const progress = participants.length * multiply;
    const radialGraph = this.renderProgressRadial(progress);
    const summary = this.renderSummary(frequency, amount);
    return (
      <Panel>
        <div>
          <div className="gradient-bg inverted small-padding">
            {radialGraph}
          </div>
          <div className="small-padding text-center">
            <p className="no-margin">Total de la Tandita</p>
            <h2>{toMoney(amount)}</h2>
          </div>
          {summary}
          <div className="panel-buttons">
            <button className="button primary flex" onClick={this.showModal}>
              Unirme
              <SVGWallet />
            </button>
          </div>
        </div>
        {showingModal && (
          <TanditaModal
            show={showingModal}
            close={this.showModal}
            tanda={this.props}
            radialGraph={radialGraph}
            summary={summary}
          />
        )}
      </Panel>
    );
  }
}
export default DashboardPanel;
