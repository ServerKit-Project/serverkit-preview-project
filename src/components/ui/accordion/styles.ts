import styled from "styled-components";

export const Trigger = styled.button`
  all: unset;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  span {
    text-align: left;
    transition: text-decoration 0.2s;
  }

  &:hover span {
    text-decoration: underline;
  }

  .accordion-chevron {
    transition: transform 0.3s ease;
  }

  &[data-state='open'] .accordion-chevron {
    transform: rotate(180deg);
  }
`;


export const ContentWrapper = styled.div<{ isOpen?: boolean }>`
  overflow: hidden;
  transition: height 0.3s ease;
  border-bottom: 1px solid #e5e7eb;
`;


export const ContentInner = styled.div`
  padding: 0.5rem 0 1rem;
  font-size: 0.875rem;
  color: #4b5563;
`;

