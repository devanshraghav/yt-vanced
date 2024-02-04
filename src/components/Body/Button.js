import React from "react";

const Button = (props) => {
  const {category,active,setActiveCategory} = props;
  const {categoryName,categoryId} = category;
  const handler = () =>{
    setActiveCategory(categoryId);
    
  }

  return (
    <div>
      <button className={active===categoryId? "bg-black px-3 py-1 m-4 rounded-md text-white" : "bg-gray-200 px-3 py-1 m-4 rounded-md"} onClick={handler}>
        {categoryName}
      </button>
    </div>
  );
};

export default Button;
