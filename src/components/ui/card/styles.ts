import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;


export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const CardTitleText = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const CardDescriptionText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const CardActionWrapper = styled.div`
  margin-top: 0.5rem;
`;

export const CardContentWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;
