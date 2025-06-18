import styled from "styled-components";

export const InputOTPRoot = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const InputOTPGroupRoot = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const InputOTPSlotRoot = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const InputOTPSlotInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 20px;
  text-align: center;
  border: 1px solid hsl(240 5.9% 90%);
  border-radius: 6px;
  background-color: transparent;
  color: hsl(240 10% 3.9%);
  transition: all 150ms;

  &:focus {
    outline: none;
    border-color: hsl(240 5.9% 90%);
    box-shadow: 0 0 0 1px hsl(240 5.9% 90%);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &[data-complete="true"] {
    border-color: hsl(142.1 76.2% 36.3%);
    box-shadow: 0 0 0 1px hsl(142.1 76.2% 36.3%);
  }

  &[data-error="true"] {
    border-color: hsl(0 84.2% 60.2%);
    box-shadow: 0 0 0 1px hsl(0 84.2% 60.2%);
  }
`;

export const InputOTPSeparatorRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 0 6px;
  color: hsl(240 3.8% 46.1%);
  font-size: 20px;
`;
