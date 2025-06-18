import styled from "styled-components";

export const FooterRoot = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.deepBlack};
  color: ${({ theme }) => theme.colors.text.white};
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const FooterTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.white};
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const FooterLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    text-align: center;
  }
`;

export const FooterCopyright = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
