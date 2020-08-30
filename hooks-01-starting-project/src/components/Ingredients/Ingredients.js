import React, {useState, useEffect, useCallback} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientsList from './IngredientList';

const Ingredients = () => {

  const [ingredients , setIngredients] = useState([]);


   useEffect( () => {
      console.log('RENDERING INGREDIENTS', ingredients)
   }, [ingredients]);

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-update-28969.firebaseio.com/ingredients.json', { 
      method: 'POST', 
      body : JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
     }).then(responseData => {
      setIngredients(prevIngredientState => [
        ...prevIngredientState,
        {id: responseData.name, ...ingredient }
      ]);
    });
  };

  const removeIngredientHandler = ingredientId => {
    console.log(ingredientId);
    fetch(`https://react-hooks-update-28969.firebaseio.com/ingredients/${ingredientId}.json`, { 
      method: 'DELETE'
    }).then(response => {
      setIngredients(prevIngredient  => 
        prevIngredient.filter(ingredient => ingredient.id !== ingredientId)
      )
     })
  }

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setIngredients(filteredIngredients);
  }, [])

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}  />
      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientsList ingredients={ingredients} onRemoveItem={(ingredientId) => { removeIngredientHandler(ingredientId)  }} />
      </section>
    </div>
  );
}

export default Ingredients;
