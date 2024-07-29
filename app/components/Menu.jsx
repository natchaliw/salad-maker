import data from "../../public/ingredient.json"
import MenuCard from "./MenuCard";

const Menu = () => {
  if (!data || data.length === 0) {
    return <div>No data available!</div>;
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item,index) => (
          <MenuCard 
          key={index}
          img={item.image}
          name={item.ingredient}
          cal={item.calories}/>
        ))}
      </div>
    </div>
  );
};

export default Menu;