import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

const CityItem = ({ city }) => {
  const { currentCity, deleteCity } = useCities();
  const { position, id } = city;

  console.log("currentCity", currentCity, id);

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <div>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${city.id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time date={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </div>
  );
};

export default CityItem;
