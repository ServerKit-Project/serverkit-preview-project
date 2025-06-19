import { useState, useRef, useEffect } from "react";
import {
  InputOTPRoot,
  InputOTPGroupRoot,
  InputOTPSlotRoot,
  InputOTPSlotInput,
  InputOTPSeparatorRoot,
} from "@/components/complex/InputOTP";

export const InputOTPPreview = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isComplete, setIsComplete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // 첫 번째 입력 필드에 포커스
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index: number, value: string) => {
    // 숫자만 입력 가능
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setHasError(false);

    // 다음 입력 필드로 포커스 이동
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // OTP 완성 여부 체크
    setIsComplete(newOtp.every((digit) => digit !== ""));
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // 현재 필드가 비어있고 Backspace를 누르면 이전 필드로 이동
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);

    // 마지막으로 붙여넣은 숫자의 다음 필드로 포커스 이동
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const verifyOTP = () => {
    // 예시: OTP가 '123456'인 경우 성공
    const isValid = otp.join("") === "123456";
    setHasError(!isValid);
    if (isValid) {
      alert("OTP 인증 성공!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <InputOTPRoot>
        <InputOTPGroupRoot>
          {otp.slice(0, 3).map((digit, index) => (
            <InputOTPSlotRoot key={index}>
              <InputOTPSlotInput
                ref={(el) => (inputRefs.current[index] = el)}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                maxLength={1}
                data-complete={isComplete}
                data-error={hasError}
              />
            </InputOTPSlotRoot>
          ))}
        </InputOTPGroupRoot>

        <InputOTPSeparatorRoot>-</InputOTPSeparatorRoot>

        <InputOTPGroupRoot>
          {otp.slice(3).map((digit, index) => (
            <InputOTPSlotRoot key={index + 3}>
              <InputOTPSlotInput
                ref={(el) => (inputRefs.current[index + 3] = el)}
                value={digit}
                onChange={(e) => handleChange(index + 3, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index + 3, e)}
                onPaste={handlePaste}
                maxLength={1}
                data-complete={isComplete}
                data-error={hasError}
              />
            </InputOTPSlotRoot>
          ))}
        </InputOTPGroupRoot>
      </InputOTPRoot>

      <button
        onClick={verifyOTP}
        disabled={!isComplete}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: isComplete ? "#4A90E2" : "#E2E8F0",
          color: "white",
          border: "none",
          borderRadius: "0.375rem",
          cursor: isComplete ? "pointer" : "not-allowed",
        }}
      >
        확인
      </button>

      {hasError && (
        <p style={{ color: "#E53E3E", margin: 0 }}>
          잘못된 OTP입니다. 다시 시도해주세요.
        </p>
      )}

      <p style={{ color: "#718096", margin: 0, fontSize: "0.875rem" }}>
        힌트: OTP는 123456입니다.
      </p>
    </div>
  );
};
