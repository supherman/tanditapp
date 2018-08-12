import React from 'react';

import { graphql } from 'react-apollo';
import ListRecipes from '../queries/listRecipes';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Tandas</h1>
        {this.props.tandas.map((r, i) => (
          <div key={i}>
            <p>Recipe name: {r.name}</p>
            <div>
              <p>Ingredients</p>
              {r.ingredients.map((ingredient, i2) => (
                <p key={i2}>{ingredient}</p>
              ))}
            </div>
            <div>
              <p>Instructions</p>
              {r.instructions.map((instruction, i3) => (
                <p key={i3}>
                  {i3 + 1}. {instruction}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default graphql(ListRecipes, {
  options: {
    fetchPolicy: 'cache-and-network',
  },
  props: props => ({
    tandas: props.data.listRecipes ? props.data.listRecipes.items : [],
  }),
})(Dashboard);
