import { AlertCircle, CheckCircle2, Info, AlertTriangle } from "lucide-react";
import { AlertContainer } from "@/components/complex/Alert";

export const AlertPreview = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <AlertContainer variant="info">
        <Info size={20} />
        정보: 이것은 정보 알림입니다.
      </AlertContainer>

      <AlertContainer variant="success">
        <CheckCircle2 size={20} />
        성공: 작업이 성공적으로 완료되었습니다.
      </AlertContainer>

      <AlertContainer variant="warning">
        <AlertTriangle size={20} />
        경고: 이 작업은 되돌릴 수 없습니다.
      </AlertContainer>

      <AlertContainer variant="error">
        <AlertCircle size={20} />
        오류: 문제가 발생했습니다. 다시 시도해주세요.
      </AlertContainer>
    </div>
  );
};
