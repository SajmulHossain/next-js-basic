"use client";
import { useEffect, useState } from "react";
import Meal from "./Meal";





const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState('');

  const fetchMeals = async (search) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const result = await res.json();
      setMeals(result?.meals);
      console.log(result?.meals);
      return result.meals;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals(search);
  }, [search])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
      }
    </div>
  );
};

export default Meals;