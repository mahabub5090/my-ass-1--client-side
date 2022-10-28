import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Category from "../categories/Category";
import Categories from './../categories/Categories';

const SideNav = () =>
{
  const [ categories, setCategories ] = useState( [] );
  useEffect( () =>
  {
    fetch( " https://server-code-space-main.vercel.app/course-category" )
      .then( ( res ) => res.json() )
      .then( ( data ) => setCategories( data ) );
  }, [] );

  return (
    <div>
      <h1 className="my-6 text-4xl text-center ">All Courses Categories...</h1>
      <div className="bg-blue-100 p-4">
        { categories.map( ( category ) => (
          <Category key={ category?.id } category={ category } />
        ) ) }
      </div>
    </div>
  );
};

export default SideNav;
