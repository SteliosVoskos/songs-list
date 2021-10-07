import React, { Fragment, memo } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = memo((props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
});

export default Layout;
