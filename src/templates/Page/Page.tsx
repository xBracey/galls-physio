import React, { ReactNode, useEffect } from "react";
import { Header } from "components/Header";
import { PageContainer, PageContent } from "./Page.styled";
import { header } from "data/header";
import { useScroll } from "./PageHelpers/useScroll";
import { ContactBanner } from "components/ContactBanner";
import { AppDispatch } from "redux/store";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "redux/reducers/index";
import { getLogos } from "redux/actions/logos";
import { LogoBanner } from "components/LogoBanner";

interface IPage {
  children: ReactNode;
}

export const Page = ({ children }: IPage) => {
  const isTop = useScroll();

  const dispatch: AppDispatch = useDispatch();
  const logos = useSelector((state: IRootState) => state.logos);

  useEffect(() => {
    dispatch(getLogos());
  }, []);

  return (
    <PageContainer>
      <Header menu={header} isTop={isTop} />
      <PageContent>{children}</PageContent>
      <ContactBanner
        text={"Interested in making an appointment?"}
        callToAction={{
          text: "Contact Us",
          link: "/contact",
        }}
      />
      <LogoBanner logos={logos.logos} />
    </PageContainer>
  );
};
