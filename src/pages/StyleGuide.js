import React from 'react';
import MainLayout from '../Layouts/Main';

import Flash from '../shared_components/Flash';

class StyleGuide extends React.Component {
  render() {
    return (
      <MainLayout isLoggedIn={this.props.isLoggedIn}>
        <div>
          <div className="big container margin-auto small-padding">
            <Flash type="error">ERROR FLASH</Flash>
            <Flash type="success">SUCCESS FLASH</Flash>
            <h1>H1 - Tanditap Style Guide</h1>
            <h2>h2 - Regular Subtitle</h2>
            <h3>h3 - Subtitle</h3>
            <h4>h4 - Subtitle</h4>
            <p>
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
            <p className="green-text-color">
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
            <a>Regular Link</a>
            <div className="dark-bg small-padding small-margin-top small-border-radius">
              <h2 className="white-text-color">h2 - Regular Subtitle</h2>
              <h3 className="white-text-color">h3 - Subtitle</h3>
              <h4 className="white-text-color">h4 - Subtitle</h4>
              <p className="white-text-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dapibus vulputate diam eu pretium. Mauris elit orci, ultricies
                id fermentum vel, porta et eros. Vestibulum condimentum lectus
                in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut
                arcu et dui feugiat scelerisque eu quis diam. Mauris placerat
                congue dui sit amet blandit. Phasellus condimentum libero vel
                velit auctor, sit amet tincidunt velit varius. Mauris lacinia
                porta faucibus. Fusce eu est ac eros vulputate mollis in ac
                felis. Aenean commodo scelerisque mi sed imperdiet. Donec at
                hendrerit nisi, eget vestibulum nisi. Sed sit amet magna luctus,
                facilisis erat quis, sagittis ligula. Aenean dignissim velit
                quis leo consequat ultricies. Proin quis pretium justo.
                Vestibulum at eros nisl. Fusce lobortis erat ante, eu cursus
                sapien molestie at. Pellentesque placerat ante diam, et euismod
                lacus dictum vel. Phasellus vitae sollicitudin mi.
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
                paddings, so you need to add the class to add the desired
                padding.
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
              <button className="button primary small-margin-right">
                Send
              </button>
              <button className="button secondary green">Cancel</button>
            </div>
            <div className="gradient-bg small-padding small-margin-top small-border-radius">
              <h2 className="white-text-color">h2 - Gradient background</h2>
            </div>
            <div className="gradient-bg inverted small-padding small-margin-top small-border-radius">
              <h2 className="white-text-color">h2 - Gradient background</h2>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default StyleGuide;
