import React, { useState } from 'react';
import Button from './Button';

const list = [
  {categoryId:0,categoryName:"All"},
  {categoryId:10,categoryName:"Music"},
  {categoryId:20,categoryName:"Gaming"},
  {categoryId:17,categoryName:"Sports"},
  {categoryId:15,categoryName:"Animals"},
  {categoryId:30,categoryName:"Movies"},
  {categoryId:31,categoryName:"Anime"},
  {categoryId:34,categoryName:"Comedy"},
  {categoryId:39,categoryName:"Horror"},
  {categoryId:42,categoryName:"Shorts"},
  {categoryId:44,categoryName:"Trailers"},
  // {categoryId:43,categoryName:"Shows"},
  // {categoryId:41,categoryName:"Thriller"},
  // {categoryId:40,categoryName:"Sci-fi"},
  // {categoryId:36,categoryName:"Drama"},
  // {categoryId:35,categoryName:"Documentary"},
  // {categoryId:32,categoryName:"Actiom/Adventure"},
  // {categoryId:27,categoryName:"Education"},
  // {categoryId:22,categoryName:"Peopls&Blogs"},
  // {categoryId:25,categoryName:"News"},
  // {categoryId:21,categoryName:"VideBlogging"},
]

const ButtonList = () => {
  const [activeCategory, setActiveCategory] = useState(0);



  return (
    <div className='flex overflow-x-scroll no-scrollbar w-screen'>
      {
        list.map((category,index)=><Button category={category} key={index} active={activeCategory} setActiveCategory={setActiveCategory}/>)
      }
    </div>
  )
}

export default ButtonList