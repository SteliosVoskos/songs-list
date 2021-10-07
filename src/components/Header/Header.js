import React, { Fragment, memo } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 1em;
  height: auto;
  background-color: #292b2c;
  width: 100%;
  margin-bottom: 2em;
  color: #f7f7f7;
  text-align: center;
`;

const Header = memo(() => {
  return (
    <Fragment>
      <HeaderContainer>
        <h1>Header</h1>
      </HeaderContainer>
    </Fragment>
  );
});

export default Header;
