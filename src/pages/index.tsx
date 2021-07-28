import { HomeHero } from "components/HomeHero";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "redux/actions/home";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { Page } from "templates/Page";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const home = useSelector((state: IRootState) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, []);

  const apiPrefix = "http://localhost:1337";

  return (
    <Page>
      <HomeHero
        imgUrl={`${apiPrefix}${home.heroImageUrl}`}
        header={home.heroHeader}
        description={home.heroDescription}
      />
    </Page>
  );
};

export default Home;
