import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact } from "redux/actions/contact";
import { IRootState } from "redux/reducers/index";
import { ContactPage } from "templates/ContactPage";

const Contact = () => {
  const dispatch = useDispatch();

  const contact = useSelector((state: IRootState) => state.contact);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <ContactPage
      contentBox={{
        header: contact.contactInfoHeader,
        content: contact.contactInfoContent,
      }}
      imgUrl={contact.contactInfoMapUrl}
    />
  );
};

export default Contact;
