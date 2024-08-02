import React from "react";
import { Button } from "./Styled/ButtonStyle";
import { Flex } from "./Styled/Flex";

const Header = ({ toggle }) => {
  return (
    <Flex>
      <h1>Notes</h1>
      <Button onClick={toggle}>Toggle Mode</Button>
    </Flex>
  );
};

export default Header;
