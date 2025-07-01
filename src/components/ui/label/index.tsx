import styled from "styled-components";

export const LabelRoot = styled.label<{ $disabled?: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  line-height: 1.5;
  color: ${(props) =>
    props.$disabled
      ? props.theme.colors.text.secondary
      : props.theme.colors.text.primary};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};

  &::before {
    content: "";
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  &:hover {
    color: ${(props) => !props.$disabled && props.theme.colors.deepBlack};
  }
`;
