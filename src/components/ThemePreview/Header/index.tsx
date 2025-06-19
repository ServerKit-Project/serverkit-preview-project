import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";
import {
  HeaderRoot,
  HeaderContainer,
  HeaderLogo,
  HeaderLogoText,
  HeaderNav,
  HeaderLink,
  HeaderActions,
  MobileMenuButton,
  MobileMenu,
  MobileNav,
  MobileLink,
} from "@/components/complex/Header";
import { Button } from "@/components/primitive/Button/Button";

export const HeaderPreview = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderRoot>
      <HeaderContainer>
        <HeaderLogo href="#">
          <img src="/logo.png" alt="Logo" />
          <HeaderLogoText>Company</HeaderLogoText>
        </HeaderLogo>

        <HeaderNav>
          <HeaderLink href="#">홈</HeaderLink>
          <HeaderLink href="#">제품</HeaderLink>
          <HeaderLink href="#">서비스</HeaderLink>
          <HeaderLink href="#">가격</HeaderLink>
          <HeaderLink href="#">문의하기</HeaderLink>
        </HeaderNav>

        <HeaderActions>
          <Button variant="secondary" style={{ padding: "0.5rem" }}>
            <Search size={20} />
          </Button>
          <Button variant="secondary" style={{ padding: "0.5rem" }}>
            <Bell size={20} />
          </Button>
          <Button variant="secondary" style={{ padding: "0.5rem" }}>
            <User size={20} />
          </Button>
          <Button>로그인</Button>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </HeaderActions>
      </HeaderContainer>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNav>
          <MobileLink href="#">홈</MobileLink>
          <MobileLink href="#">제품</MobileLink>
          <MobileLink href="#">서비스</MobileLink>
          <MobileLink href="#">가격</MobileLink>
          <MobileLink href="#">문의하기</MobileLink>
        </MobileNav>
      </MobileMenu>
    </HeaderRoot>
  );
};
