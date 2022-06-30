import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";



const AvailbleMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [httpError,setHttpError] = useState("");
  useEffect( () =>{
    const fatchMeals = async() => {
    const response = await fetch('https://valid-song-248113-default-rtdb.firebaseio.com/meals.json');
    if(!response.ok){
      throw new Error("에러가 일어났습니다");
    }
    const responseData = await response.json();
      setIsLoading(true);
     const loadedMeals = [];
 
     for(const key in responseData){
       loadedMeals.push({
         id: key,
         name : responseData[key].name,
         description : responseData[key].description,
         price : responseData[key].price
       });
     }

     setMeals(loadedMeals);
    }
     fatchMeals()
     .catch((err)=>{
      setIsLoading(false);
      setHttpError(err.message);
     });
    
   },[]);

   if(httpError){
    return (
      <section className={classes.meals}>
        <div>{httpError}</div>
    </section>
    );
   }

  const mealsList = isLoading ? meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    /> 
  )) : <div>Loading</div>;
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailbleMeals;
