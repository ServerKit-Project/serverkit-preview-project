import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 600px;
  background: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.medium};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const ChatHeaderAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  overflow: hidden;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ChatHeaderInfo = styled.div`
  flex: 1;
`;

export const ChatHeaderName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const ChatHeaderEmail = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const ChatHeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChatHeaderButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.background.hover.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.medium};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.lightGray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.mediumGray};
    border-radius: 3px;
  }
`;

export const ChatMessage = styled.div<{ $isUser?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
  align-items: flex-start;
  gap: 8px;
`;

export const ChatMessageAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.sans};
`;

export const ChatMessageContent = styled.div<{ $isUser?: boolean }>`
  max-width: 70%;
  background: ${(props) =>
    props.$isUser ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${(props) =>
    props.$isUser
      ? props.theme.colors.text.white
      : props.theme.colors.text.primary};
  padding: 12px 16px;
  border-radius: 18px;
  border-top-left-radius: ${(props) => (props.$isUser ? "18px" : "4px")};
  border-top-right-radius: ${(props) => (props.$isUser ? "4px" : "18px")};
  font-size: ${({ theme }) => theme.fontSize.medium};
  line-height: 1.4;
  word-wrap: break-word;
  font-family: ${({ theme }) => theme.fontFamily.sans};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const ChatInputContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const ChatInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  padding-right: 48px;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: ${({ theme }) => theme.fontFamily.sans};
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.small};
  }
`;

export const ChatSendButton = styled.button`
  position: absolute;
  right: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    background: ${({ theme }) => theme.colors.darkSlateGray};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.mediumGray};
  }
`;
