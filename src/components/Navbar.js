import React, {PureComponent, Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserAuth from '../components/UserAuth';

export default class Navbar extends PureComponent {
    state = {
        isLoggedIn: false, 
        fetching: true,
        loggedOut: false,
    };

    componentDidMount = async () => {
    const response = await UserAuth.isAuthenticated();
        this.setState( {
            isLoggedIn: response,
            fetching: false,
        })
    };

    logout = () => {
        UserAuth.logout()
        .then(() => {
        this.setState({ loggedOut: true, isLoggedIn:false, });
        })
        .catch(() => {
        this.setState({ loggedOut: false });
        });
    };

    links = isLoggedIn => [
        {   
            component: <Link to='/sign_in' className="small-margin-right">Iniciar Sesión</Link>,
            visible: !isLoggedIn,
        },
        {   
            component: <a className="small-margin-right" onClick={this.logout}>Cerrar Sesión</a>,
            visible: isLoggedIn,
        },
        {   
            component: <Link to='/sign_up' className="small-margin-right">Registrarse</Link>,
            visible: !isLoggedIn,
        },
        {   
            component: <Link to='/style_guide'>Style Guide</Link>,
            visible: isLoggedIn,
        },
    ];


    render() {
        const {isTransparent } = this.props;
        const { loggedOut, isLoggedIn, fetching } = this.state;
        return(
            <div className={`navbar ${!isTransparent ? "gradient-bg" : ''}`}>        
                { loggedOut && <Redirect to="/" /> }        
                <div className="container margin-auto flex justify-between align-items-center small-padding">
                    <Link to="/"><h2 className="white-text-color">TANDITAPP</h2></Link>
                    { !fetching && 
                        <div className="white-text-color">                        
                        {this.links(isLoggedIn).map((link, index) => link.visible && <Fragment key={index}>{link.component}</Fragment>)}
                        </div>
                    }   
                </div>
            </div>
        );
    }
};
