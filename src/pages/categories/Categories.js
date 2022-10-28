import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const Categories = () => {
  const courses = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-3">
      {courses.map((course) => (
        <SingleCourse key={course?._id} course={course} />
      ))}
    </div>
  );
};

export default Categories;
