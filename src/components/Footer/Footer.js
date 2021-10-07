import React, { Fragment, memo } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1em;
  height: auto;
  background-color: #292b2c;
  width: 100%;
  margin-top: 2em;
  bottom: 0;
  left: 0;
  color: #f7f7f7;
  text-align: center;
`;

const Footer = memo(() => {
  return (
    <Fragment>
      <FooterContainer>
        <h1>Footer</h1>
      </FooterContainer>
    </Fragment>
  );
});

export default Footer;
