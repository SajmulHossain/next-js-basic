

const Meal = ({meal}) => {
  const { strMeal, strCategroy, strMealThumb } = meal || {};
  return (
    <div>
      <h2>{strMeal}</h2>
      <p>{strCategroy}</p>
      <div>
        <img src={strMealThumb} className="w-96 h-80 object-cover" />
      </div>
    </div>
  );
};

export default Meal;