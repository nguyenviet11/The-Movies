import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Detail from "./Detail";

const DetailMovies = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Layout>
        {id && <Detail id={id} />}
      </Layout>
    </>
  );
};

export default DetailMovies;
