import styled from "styled-components";

export const HeaderRoot = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  position: sticky;
  top: 0;
  z-index: 40;
`;

export const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  text-decoration: none;

  img {
    height: 32px;
    width: auto;
  }
`;

export const HeaderLogoText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const MobileMenuButton = styled.button`
  display: none;
  padding: ${({ theme }) => theme.spacing.small};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.pureWhite};
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  transform: translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const MobileLink = styled(HeaderLink)`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: ${({ theme }) => theme.spacing.small} 0;
`;
