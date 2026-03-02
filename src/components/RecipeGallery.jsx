import "./RecipeGallery.css";

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
    image:
      "https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 2,
    title: "Caesar Salad",
    ingredients: ["Romaine", "Chicken", "Croutons", "Parmesan"],
    image:
      "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=900&q=60",
  },
  {
    id: 3,
    title: "Avocado Toast",
    ingredients: ["Bread", "Avocado", "Salt", "Lemon"],
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=60",
  },
];

export default function RecipeGallery() {
  return (
    <div className="wrap">
      <h1>Recipe Gallery</h1>

      <div className="grid">
        {recipes.map((r) => (
          <div className="card" key={r.id}>
            <img src={r.image} alt={r.title} />
            <h2>{r.title}</h2>

            <ul>
              {r.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}