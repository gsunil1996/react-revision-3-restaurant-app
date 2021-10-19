import React from 'react'
import { useState } from 'react'
import data from "../data.json";
import Card from './Card';
import styles from "./Card.module.css";

function Restaurant() {
  const [text, setText] = useState("");
  const [todolist, setTodolist] = useState(data);
  const parentData = data;
  console.log(todolist);
  const [formData, setFormData] = useState({});
  const [sort, setSort] = useState([]);
  const [initial, setChangedInitial] = useState(true);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodolist([...todolist, formData]);
  }

      function sorting() {
        let results = todolist
          .sort((a, b) => b.rating - a.rating)
          .map((el) => el);
        setTodolist(results);
        console.log("sorted", results);
  }
  
  function sortByRating(i) {
    let result = [...parentData].filter((e) => e.rating >= i);
     setTodolist(result);
     console.log(result);
  }

  function sortByPrice(price) {
    let result = [];

    if (price == "low") {
       result = [...parentData].sort((a, b) => {
        return a.oneprice - b.oneprice;
      })
    } else {
        result = [...parentData].sort((a, b) => {
         return b.oneprice - a.oneprice;
       });
    }
    setTodolist(result);
  }
  
  function filterPayment(way) {
    let updatedResults = [...parentData].filter((item) => item[way] === 1);
    setTodolist(updatedResults);
  }


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Add name"
            onChange={handleChange}
          />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            placeholder="Add Image"
            onChange={handleChange}
          />

          <label>Specials:</label>
          <input
            type="text"
            name="specials"
            placeholder="Add Specials"
            onChange={handleChange}
          />

          <label>Price per person:</label>
          <input
            type="text"
            name="oneprice"
            placeholder="Add Price per person"
            onChange={handleChange}
          />

          <label>Minimum Price</label>
          <input
            type="text"
            name="mprice"
            placeholder="Add minimum price"
            onChange={handleChange}
          />

          <label>Delivery Time:</label>
          <input
            type="text"
            name="time"
            placeholder="Add Delivery Time"
            onChange={handleChange}
          />

          <label>Ratings</label>
          <input
            type="text"
            name="rating"
            placeholder="Add Ratings"
            onChange={handleChange}
          />

          <label>Votes:</label>
          <input
            type="text"
            name="votes"
            placeholder="Add Votes"
            onChange={handleChange}
          />

          <label>Reviews:</label>
          <input
            type="text"
            name="treviews"
            placeholder="Add Reviews"
            onChange={handleChange}
          />

          <input type="submit" value="submit" />
        </form>

        <div className={styles.buttons}>
          <h2>Sort By Ratings</h2>
          <button onClick={sorting}>Sort by Ratings</button>
          <button onClick={() => sortByRating(1)}>1 star</button>
          <button onClick={() => sortByRating(2)}>2 star</button>
          <button onClick={() => sortByRating(3)}>3 star</button>
          <button onClick={() => sortByRating(4)}>4 star</button>
          <h2>Sort By Pricing per two Heads</h2>
          <button onClick={() => sortByPrice("low")}>low to high</button>
          <button onClick={() => sortByPrice("high")}>high to low</button>
          <h2>Restaurant Payments</h2>
          <button onClick={() => filterPayment("cash")}>Cash</button>
          <button onClick={() => filterPayment("online")}>Card</button>
          <button onClick={() => filterPayment("all")}>All</button>
        </div>

        <div className={styles.main}>
          {todolist.map((e) => (
            <Card e={e} />
          ))}
        </div>
      </div>
    );
}

export default Restaurant
