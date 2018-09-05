import React, { Component, Fragment } from 'react';
import Modal from '../../shared_components/Modal';
import imageHappy from '../../assets/images/laugh.svg';

class TanditaModal extends Component {
  state = {
    selectedPlace: '0',
  };

  selectPlace = event => {
    this.setState({
      selectedPlace: event.target.dataset.place,
    });
  };

  render() {
    const { radialGraph, summary, close } = this.props;
    const { amount, participants } = this.props.tanda;
    const { selectedPlace } = this.state;
    return (
      <Modal {...this.props}>
        <div className="tandita-modal">
          <div className="gradient-bg white-text-color small-padding text-center">
            <h2>Tandita de ${amount}</h2>
            <div className="medium-margin-top small-margin-bottom">
              {radialGraph}
            </div>
            <p className="note-text-size width-50 margin-auto">
              Nota: Todas nuestras TANDITAS reciben 10 personas. Esta empezará
              cuando los 10 lugares sean elegidos.
            </p>
          </div>
          <div className="small-padding ">
            <div className="flex">
              {participants.length > 0 && (
                <div className="no-participants medium-margin-bottom">
                  <h3 className="medium-margin-bottom">
                    Esta TANDITA te está esperando
                  </h3>
                  <img src={imageHappy} alt="happy" />
                  <p className="width-100">
                    Eres el primero en intentar unirse, ¡Pero no te preocupes!
                  </p>
                  <p>
                    <strong>TANDITAPP</strong> es mejor cuando lo compartes con
                    tus amigos. Al ser el primero puedes seleccinar entre los
                    primeros lugares y así obtener tu TANDITA con mas rapidés.
                  </p>
                  <p>
                    ¡Únete e invita a tus amigos para empezar esta TANDITA lo
                    antes posible!
                  </p>
                  <div className="flex width-100 justify-center">
                    <button className="button primary">
                      ¡Unirte y escoger lugar!
                    </button>
                  </div>
                </div>
              )}
              {participants.length === 0 && (
                <Fragment>
                  <div className="width-100">
                    <h3 className="small-margin-bottom">
                      Usuarios registrados
                    </h3>
                    <p>
                      Selecciona tu lugar en esta TANDITA.
                      <strong> ¡Recuerda!</strong> Los primeros lugares tienen
                      un costo extra.
                    </p>
                    <ul className="open-spaces">
                      <li
                        className="taken"
                        data-place="1"
                        onClick={this.selectPlace}
                      >
                        Sergio Montoya <strong>Interés extra de 10%</strong>
                      </li>
                      <li data-place="2" onClick={this.selectPlace}>
                        Lugar Libre <strong>Interés extra de 8%</strong>
                      </li>
                      <li
                        className="taken"
                        data-place="3"
                        onClick={this.selectPlace}
                      >
                        Alexis Navarro <strong>Interés extra de 6%</strong>
                      </li>
                      <li data-place="4" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="5" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="6" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="7" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="8" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="9" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                      <li data-place="10" onClick={this.selectPlace}>
                        Lugar Libre
                      </li>
                    </ul>
                    <div className="small-margin-bottom medium-margin-top">
                      <h3>Resumen de TANDITA</h3>
                      {summary}
                    </div>
                    <div className="medium-margin-top small-margin-bottom">
                      <h3>Lugar Seleccionado</h3>
                      <div className="small-margin-top">
                        {selectedPlace === '0' && (
                          <span>¡Aún no has seleccionado un lugar!</span>
                        )}
                        {selectedPlace !== '0' && (
                          <span>
                            ¡Felicidades! Te hemos reservado el lugar
                            <strong> No. {selectedPlace}</strong>. Confirma para
                            agregarte a esta TANDITA.
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between width-50 margin-auto medium-margin-top">
                      <button
                        disabled={selectedPlace === '0'}
                        className="button primary"
                        onClick={close}
                      >
                        Confirmar
                      </button>
                      <button
                        className="button secondary green"
                        onClick={close}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TanditaModal;
