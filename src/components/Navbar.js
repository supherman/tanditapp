import React, { PureComponent, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserAuth from '../services/UserAuth';
import { SVGMenu } from '../shared_components/svg';

export default class Navbar extends PureComponent {
  state = {
    isLoggedIn: false,
    isAdmin: false,
    fetching: true,
    loggedOut: false,
    menuShowing: false,
  };

  componentDidMount = async () => {
    const response = await UserAuth.isAuthenticated();
    this.setState({
      isLoggedIn: response.loggedIn,
      isAdmin: response.isAdmin,
      fetching: false,
    });
  };

  logout = () => {
    UserAuth.logout()
      .then(() => {
        this.setState({ loggedOut: true, isLoggedIn: false });
      })
      .catch(() => {
        this.setState({ loggedOut: false });
      });
  };

  links = (isLoggedIn, isAdmin) => [
    {
      component: <Link to="/sign_in">Iniciar Sesión</Link>,
      visible: !isLoggedIn,
    },
    {
      component: <Link to="/sign_up">Registrarse</Link>,
      visible: !isLoggedIn,
    },
    {
      component: <Link to="/dashboard">Dashboard</Link>,
      visible: isLoggedIn,
    },
    {
      component: <Link to="/admin">Admin</Link>,
      visible: isLoggedIn && isAdmin,
    },
    {
      component: (
        <button className="button link" onClick={this.logout}>
          Cerrar Sesión
        </button>
      ),
      visible: isLoggedIn,
    },
  ];

  handleShowMenu = () => {
    this.setState(prevState => ({
      menuShowing: !prevState.menuShowing,
    }));
  };

  render() {
    const { isTransparent } = this.props;
    const {
      loggedOut,
      isLoggedIn,
      isAdmin,
      fetching,
      menuShowing,
    } = this.state;
    return (
      <div className={`navbar ${!isTransparent ? 'gradient-bg' : ''}`}>
        {loggedOut && <Redirect to="/" />}
        <div className="container margin-auto flex justify-between align-items-center small-padding">
          <Link to="/">
            <h2 className="white-text-color">TANDITAPP</h2>
          </Link>
          <div className="links-list">
            <button
              onClick={this.handleShowMenu}
              className="menu-link button link"
            >
              <SVGMenu />
            </button>
            {!fetching && (
              <div
                className={`white-text-color links ${menuShowing && 'visible'}`}
              >
                {this.links(isLoggedIn, isAdmin).map(
                  (link, index) =>
                    link.visible && (
                      <Fragment key={index}>{link.component}</Fragment>
                    ),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
