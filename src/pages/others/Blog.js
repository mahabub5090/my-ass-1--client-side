import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Question from "./Question";

const Blog = () => {
  const questions = useLoaderData();
  return (
    <>
      <Header />
      <div className="bg-blue-400 top-0">
        <h2 className="text-2xl font-bold my-5 sm:text-4xl text-center text-emerald-400 hover:text-red-400 "><i>Blogs</i></h2>
        {questions.map((q) => (
          <Question key={q.ide} q={q} />
        ))}
      </div>
    </>
  );
};

export default Blog;
