import { drinks } from "./Data";

export default function List15() {
  const listItem = drinks.map((drink) => (
    <li>
      <p>
        <img src={drink.imageId} alt={drink.name} />
      </p>
      <h2>{drink.name}</h2>
      <p>{drink.accomplishment}</p>
    </li>
  ));

  return (
    <div>
      <h2>drink</h2>
      <ul className="card-list">{listItem}</ul>
    </div>
  );
}
