import React from 'react';
import { Redirect } from 'react-router-dom';
import UserAuth from '../components/UserAuth';

class StyleGuide extends React.Component {
  state = {
    loggedOut: false,
  };

  logout = () => {
    UserAuth.logout()
      .then(() => {
        this.setState({ loggedOut: true });
      })
      .catch(() => {
        this.setState({ loggedOut: false });
      });
  };

  render() {
    if (this.state.loggedOut) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div className="gradient-bg small-padding small-margin-bottom flex justify-between align-items-center">
          <h1 className="white-text-color">H1 - Tanditap Style Guide</h1>
          <div className="white-text-color">
            <a className="small-margin-right">Home</a>
            <a className="small-margin-right">Style Guide</a>
            <a onClick={this.logout}>Logout</a>
          </div>
        </div>
        <div className="big container margin-auto small-padding">
          <h2>h2 - Regular Subtitle</h2>
          <h3>h3 - Subtitle</h3>
          <h4>h4 - Subtitle</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id
            fermentum vel, porta et eros. Vestibulum condimentum lectus in
            convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et
            dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit
            amet blandit. Phasellus condimentum libero vel velit auctor, sit
            amet tincidunt velit varius. Mauris lacinia porta faucibus. Fusce eu
            est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque
            mi sed imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed
            sit amet magna luctus, facilisis erat quis, sagittis ligula. Aenean
            dignissim velit quis leo consequat ultricies. Proin quis pretium
            justo. Vestibulum at eros nisl. Fusce lobortis erat ante, eu cursus
            sapien molestie at. Pellentesque placerat ante diam, et euismod
            lacus dictum vel. Phasellus vitae sollicitudin mi.
          </p>
          <p className="green-text-color">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id
            fermentum vel, porta et eros. Vestibulum condimentum lectus in
            convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et
            dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit
            amet blandit. Phasellus condimentum libero vel velit auctor, sit
            amet tincidunt velit varius. Mauris lacinia porta faucibus. Fusce eu
            est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque
            mi sed imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed
            sit amet magna luctus, facilisis erat quis, sagittis ligula. Aenean
            dignissim velit quis leo consequat ultricies. Proin quis pretium
            justo. Vestibulum at eros nisl. Fusce lobortis erat ante, eu cursus
            sapien molestie at. Pellentesque placerat ante diam, et euismod
            lacus dictum vel. Phasellus vitae sollicitudin mi.
          </p>
          <a>Regular Link</a>
          <div className="dark-bg small-padding small-margin-top small-border-radius">
            <h2 className="white-text-color">h2 - Regular Subtitle</h2>
            <h3 className="white-text-color">h3 - Subtitle</h3>
            <h4 className="white-text-color">h4 - Subtitle</h4>
            <p className="white-text-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id
              fermentum vel, porta et eros. Vestibulum condimentum lectus in
              convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu
              et dui feugiat scelerisque eu quis diam. Mauris placerat congue
              dui sit amet blandit. Phasellus condimentum libero vel velit
              auctor, sit amet tincidunt velit varius. Mauris lacinia porta
              faucibus. Fusce eu est ac eros vulputate mollis in ac felis.
              Aenean commodo scelerisque mi sed imperdiet. Donec at hendrerit
              nisi, eget vestibulum nisi. Sed sit amet magna luctus, facilisis
              erat quis, sagittis ligula. Aenean dignissim velit quis leo
              consequat ultricies. Proin quis pretium justo. Vestibulum at eros
              nisl. Fusce lobortis erat ante, eu cursus sapien molestie at.
              Pellentesque placerat ante diam, et euismod lacus dictum vel.
              Phasellus vitae sollicitudin mi.
            </p>
            <button className="button primary small-margin-right">
              Primary Button
            </button>
            <button className="button secondary small-margin-right">
              Secondary White
            </button>
            <button className="button secondary green small-margin-right">
              Secondary White
            </button>
            <a className="white-text-color small-margin">Regular Link</a>
            <a className="green-text-color small-margin">Regular Link</a>
            <div className="panel small-padding white-bg small-margin-top">
              This is a regular panel. Panels have a small shadow and no
              paddings, so you need to add the class to add the desired padding.
            </div>
          </div>
          <div className="panel small-padding white-bg small-margin-top">
            <h3>Form Title</h3>
            <label>Name:</label>
            <input type="text" value="John Doe" onChange={() => {}} />
            <label>Email:</label>
            <input
              type="text"
              placeholder="sergio@michelada.io"
              onChange={() => {}}
            />
            <label>Comments:</label>
            <textarea />
            <button className="button primary small-margin-right">Send</button>
            <button className="button secondary green">Cancel</button>
          </div>
          <div className="gradient-bg small-padding small-margin-top small-border-radius">
            <h1 className="white-text-color">h1 - Gradient background</h1>
          </div>
          <div className="gradient-bg inverted small-padding small-margin-top small-border-radius">
            <h1 className="white-text-color">h1 - Gradient background</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default StyleGuide;
