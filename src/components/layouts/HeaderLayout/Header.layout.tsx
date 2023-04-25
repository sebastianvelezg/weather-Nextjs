import {
  DropdownButton,
  DropdownItem,
  DropdownMenu,
  HeaderContainer,
  HeaderTitle,
} from "./HeaderLayout.styled";

import Link from "next/link";

export const HeaderLayout = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>My Logo</HeaderTitle>
      <DropdownButton>
        I want to generate!
        <DropdownMenu>
          <Link href="/cardgenerator">
            <DropdownItem>Cards</DropdownItem>
          </Link>
          <Link href="/boxshadowgenerator">
            <DropdownItem>Box Shadows</DropdownItem>
          </Link>
          <Link href="/textgenerator">
            <DropdownItem>Texts</DropdownItem>
          </Link>
        </DropdownMenu>
      </DropdownButton>
    </HeaderContainer>
  );
};
