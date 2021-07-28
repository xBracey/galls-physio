import { HomeHero } from "components/HomeHero";
import { ImageText } from "components/ImageText";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "redux/actions/home";
import { IRootState } from "redux/reducers/index";
import { AppDispatch } from "redux/store";
import { Page } from "templates/Page";
import { config } from "config";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const home = useSelector((state: IRootState) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, []);

  const imageTextComponent = home.mainImageText.map(
    (singleImageText, index) => (
      <ImageText
        content={singleImageText.content}
        imgUrl={singleImageText.imgUrl}
        blueBackground={index % 2 === 1}
      />
    )
  );

  return (
    <Page>
      <HomeHero
        imgUrl={home.heroImageUrl}
        header={home.heroHeader}
        description={home.heroDescription}
      />
      {imageTextComponent}
    </Page>
  );
};

export default Home;
