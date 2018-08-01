import React from 'react';
import tanditaSearch from '../assets/images/tandita-search.svg';
import tanditaGroup from '../assets/images/tandita-group.svg';
import tanditaCalendar from '../assets/images/tandita-calendar.svg';
import tanditaStars from '../assets/images/tandita-stars.svg';
import secureShield from '../assets/images/secure-shield.svg';
import securePeople from '../assets/images/secure-people.svg';

const Landing = () => {
  return (
    <div>
      <div className="hero big-margin-bottom">
        <div className="margin-auto container text-center small-padding">
          <h1 className="white-text-color">La clásica Tandita</h1>
          <h2 className="white-text-color small-margin-bottom">
            con un toque de tecnología
          </h2>
          <div className="margin-auto">
            <button className="button primary small-margin-right">
              Quiero saber más
            </button>
            <button className="button secondary">Planes</button>
          </div>
        </div>
      </div>
      <div className="container text-center margin-auto small-padding">
        <h2>¿Qué es TANDITAPP</h2>
        <p>
          TANDITAPP es una aplicación inspirada en las Tanditas de toda la vida.
        </p>
        <p className="big-margin-bottom">
          Ya sea que solo estés buscando un poco de dinero inmediato o
          simplemente una forma de ahorrar, en TANDITAPP podrás encontrar la
          Tandita que mas se acomode a tus necesitadces.
        </p>
      </div>
      <div className="container text-center margin-auto small-padding">
        <h2>¿Qué tipos de Tanditas tenemos?</h2>
        <p>
          TANDITAPP tiene varias Tandas de las cuales podrás seleccionar o
          buscar la mejor para tus necesidades.
        </p>
      </div>
      <div className="flex container margin-auto text-center plans">
        <div className="panel flex-1 small-margin small-padding white-bg">
          <h3>Plan de $3,000</h3>
          <h4 className="green-text-color medium-margin-bottom">
            Tanditas rápidas
          </h4>
          <p>
            6 meses de Ahorro <br />
            Ahorro quincenal de $417.00 <br />
            10 Personas por Tandita <br />
            Interés del Plan del 10%
          </p>
          <button className="button primary">Entrarle</button>
        </div>
        <div className="panel flex-1 small-margin small-padding white-bg">
          <h3>Plan de $5,000</h3>
          <h4 className="green-text-color medium-margin-bottom">Más popular</h4>
          <p>
            6 meses de Ahorro <br />
            Ahorro quincenal de $417.00 <br />
            10 Personas por Tandita <br />
            Interés del Plan del 10%
          </p>
          <button className="button primary">Entrarle</button>
        </div>
        <div className="panel flex-1 small-margin small-padding white-bg">
          <h3>Plan de $10,000</h3>
          <h4 className="green-text-color medium-margin-bottom">
            A largo plazo
          </h4>
          <p>
            6 meses de Ahorro <br />
            Ahorro quincenal de $417.00 <br />
            10 Personas por Tandita <br />
            Interés del Plan del 10%
          </p>
          <button className="button primary">Entrarle</button>
        </div>
      </div>
      <div className="how-it-works">
        <h2 className="text-center white-text-color medium-margin-bottom">
          ¿Cómo funciona TANDITAPP?
        </h2>
        <div className="container margin-auto white-text-color">
          <div className="flex medium-margin-bottom how-item">
            <img src={tanditaSearch} className="small-margin-right" />
            <div className="description">
              <h3>Busca una Tandita</h3>
              <p>
                Dentro de TANDITAPP, podrás encontrar varias Tanditas creadas
                por nuestros sistema. Si ninguna te late, podrás realizar una
                busqueda personalizada y te agregaremos a una Tandita que cuente
                con tus necesidades especificas.
              </p>
            </div>
          </div>
          <div className="flex medium-margin-bottom how-item">
            <div className="description">
              <h3>Espera que inicie tu tandita</h3>
              <p>
                Como toda Tandita clásica, el dinero que se recibe es un ahorro
                que entre todos ahorramos, por lo que un mínimo de personas es
                necesario para empezar. Invita a tus amigos y consigue tasas de
                interes más bajas.
              </p>
            </div>
            <img src={tanditaGroup} className="small-margin-left" />
          </div>
          <div className="flex medium-margin-bottom how-item">
            <img src={tanditaCalendar} className="small-margin-right" />
            <div className="description">
              <h3>Realiza y recibe tus pagos</h3>
              <p>
                De acuerdo con el plan de tandita que hayas elegido, recibirás
                tus ahorros y realizaras tus pagos automaticamente.
              </p>
            </div>
          </div>
          <div className="flex medium-margin-bottom how-item">
            <div className="description">
              <h3>Recibe puntos y gana acceso a mejores Tanditas</h3>
              <p>
                Mientras mas ahorras, mejores son los planes a las tanditas a
                las que puedes entrarle ¡Lo mejor para los usuarios mas
                cumplidores!
              </p>
            </div>
            <img src={tanditaStars} className="small-margin-left" />
          </div>
        </div>
      </div>
      <div className="how-secure small-padding">
        <div className="container margin-auto">
          <h2 className="text-center small-margin-top small-margin-bottom">
            ¿Qué tan seguro es TANDITAPP?
          </h2>
          <div className="big-margin-bottom flex secure-item">
            <div className="image-container text-center">
              <img src={secureShield} />
            </div>
            <p>
              TANDITAPP no almancena niguna información confidencial, todos los
              cobros son realizados a través de información encripatada por lo
              que no tenemos forma de saber tus datos bancarios.
            </p>
          </div>
          <div className="flex secure-item">
            <div className="image-container text-center">
              <img src={securePeople} />
            </div>
            <p>
              TANDITAPP no almancena niguna información confidencial, todos los
              cobros son realizados a través de información encripatada por lo
              que no tenemos forma de saber tus datos bancarios.
            </p>
          </div>
        </div>
      </div>
      <div className="ready-contact big-padding-bottom">
        <div className="container text-center margin-auto ">
          <h2 className="white-text-color big-margin-top small-margin-bottom">
            ¿Listo para entrarle a una Tandita?{' '}
          </h2>
          <div>
            <button className="button primary small-margin-right">
              ¡Entrárle!
            </button>
            <button className="button secondary">Iniciar Sesión</button>
          </div>
        </div>
        <div className="container margin-auto ">
          <h2 className="white-text-color big-margin-top text-center">
            ¿Tienes alguna duda?{' '}
          </h2>
          <p className="text-center white-text-color medium-margin-bottom">
            No dudes en hacérnosla saber
          </p>
          <div className="panel white-bg small-padding margin-auto">
            <label>Nombre:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="text" />
            <label>Pregunta:</label>
            <textarea />
            <div className="text-center">
              <button className="button primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
