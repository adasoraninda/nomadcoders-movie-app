import React from "react";
import PropTypes from "prop-types";

const foods = [
  {
    id: 1,
    name: "Burger",
    image:
      "https://image.freepik.com/free-psd/delicious-burger-food-menu-social-media-banner-template_106176-360.jpg",
    rating: 2,
  },
  {
    id: 2,
    name: "Vegetables",
    image:
      "https://image.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg",
    rating: 3.4,
  },
];

function renderFood(food) {
  return (
    <Food
      key={food.id}
      name={food.name}
      picture={food.image}
      rating={food.rating}
    />
  );
}

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return <div>{foods.map(renderFood)}</div>;
}

export default App;
