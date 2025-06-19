import { useState } from "react";
import { LabelRoot } from "@/components/complex/Label";
import { Input } from "@/components/primitive/Input/Input";

export const LabelPreview = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "400px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <LabelRoot htmlFor="username">사용자 이름</LabelRoot>
        <Input
          id="username"
          type="text"
          value={values.username}
          onChange={handleChange("username")}
          placeholder="사용자 이름을 입력하세요"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <LabelRoot htmlFor="email">이메일 주소</LabelRoot>
        <Input
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          placeholder="이메일 주소를 입력하세요"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <LabelRoot htmlFor="password">비밀번호</LabelRoot>
        <Input
          id="password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
          placeholder="비밀번호를 입력하세요"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <LabelRoot $disabled>비활성화된 레이블</LabelRoot>
        <Input
          disabled
          type="text"
          placeholder="이 필드는 비활성화되어 있습니다"
        />
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <input type="checkbox" id="terms" />
        <LabelRoot htmlFor="terms" style={{ cursor: "pointer" }}>
          이용약관에 동의합니다
        </LabelRoot>
      </div>

      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <input type="radio" name="gender" id="male" />
        <LabelRoot htmlFor="male" style={{ cursor: "pointer" }}>
          남성
        </LabelRoot>

        <input type="radio" name="gender" id="female" />
        <LabelRoot htmlFor="female" style={{ cursor: "pointer" }}>
          여성
        </LabelRoot>

        <input type="radio" name="gender" id="other" disabled />
        <LabelRoot htmlFor="other" $disabled>
          기타 (비활성화)
        </LabelRoot>
      </div>
    </div>
  );
};
