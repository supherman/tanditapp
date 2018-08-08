import React from 'react';

import { graphql } from 'react-apollo';
import ListRecipes from '../queries/listRecipes';
import NewRecipeSubscription from '../subscriptions/newRecipe';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.subscribeToNewRecipes();
  }
  render() {
    return (
      <div>
        <h1>Recipes</h1>
        {this.props.recipes.map((r, i) => (
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
    recipes: props.data.listRecipes ? props.data.listRecipes.items : [],
    subscribeToNewRecipes: () => {
      props.data.subscribeToMore({
        document: NewRecipeSubscription,
        updateQuery: (
          prev,
          {
            subscriptionData: {
              data: { onCreateRecipe },
            },
          },
        ) => {
          return {
            ...prev,
            listRecipes: {
              __typename: 'RecipeConnection',
              items: [
                onCreateRecipe,
                ...prev.listRecipes.items.filter(
                  recipe => recipe.id !== onCreateRecipe.id,
                ),
              ],
            },
          };
        },
      });
    },
  }),
})(Dashboard);
