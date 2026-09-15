import Card from "./card";
import '../styles/card.css'

function MenuSection({ menu }) {
  if (!Array.isArray(menu) || menu.length === 0) {
    return <p>Sorry, currently unavailable.</p>;
  }

  const listItems = menu.map(([Category, items]) => {
    // If a property isn't an array (e.g. string metadata or future navItems), skip or render empty
    const safeItems = Array.isArray(items) ? items : [];

    if (safeItems.length === 0) return null;

    return (
      <div key={Category}>
        <h2>{Category}</h2>
        <div className="section-container">
          {safeItems.map((item, index) => (
            <Card
              key={item.Title || index}
              image={item.Image}
              title={item.Title}
              description={item.Description}
              price={item.Price}
            />
          ))}
        </div>
      </div>
    );
  });

  return <ul>{listItems}</ul>;
}

export { MenuSection };