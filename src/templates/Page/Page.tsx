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
import { Footer } from "components/Footer";
import { CopyrightFooter } from "components/CopyrightFooter";
import { getFooter } from "redux/actions/footer";
import { Head } from "components/Head";

interface IPage {
  children: ReactNode;
  title: string;
  isContact?: boolean;
}

export const Page = ({ children, title, isContact }: IPage) => {
  const isTop = useScroll();

  const dispatch: AppDispatch = useDispatch();
  const logos = useSelector((state: IRootState) => state.logos);
  const footer = useSelector((state: IRootState) => state.footer);

  useEffect(() => {
    dispatch(getLogos());
    dispatch(getFooter());
  }, []);

  const contactBannerComponent = isContact ? null : (
    <ContactBanner
      text={"Interested in making an appointment?"}
      callToAction={{
        text: "Contact Us",
        link: "/contact",
      }}
    />
  );

  return (
    <PageContainer>
      <Head title={`First Team Physio - ${title}`} />
      <Header menu={header} isTop={isTop} />
      <PageContent>{children}</PageContent>
      {contactBannerComponent}
      <LogoBanner logos={logos.logos} />
      <Footer
        address={footer.address}
        mobile={footer.mobile}
        facebook={footer.facebook}
        email={footer.email}
        openingHours={footer.openingHours}
        services={[
          {
            text: "General Physio",
            link: "/services/general-physio",
          },
          {
            text: "Sports Physio",
            link: "/services/sports-physio",
          },
        ]}
      />
      <CopyrightFooter />
    </PageContainer>
  );
};
