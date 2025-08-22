import type { Meta, StoryObj } from "@storybook/react";
import { toast, ToastProvider } from ".";
import { Button } from "../button";

const meta: Meta<typeof ToastProvider> = {
  title: "components/Toast",
  component: ToastProvider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "shadcn/sonner를 기반으로 한 간단한 Toast 컴포넌트입니다. 다양한 상태와 옵션을 지원합니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[200px] flex flex-col gap-4 p-4">
        <Story />
        <ToastProvider />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Toast 컴포넌트</h3>
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => toast("기본 메시지입니다.")}
          size="lg"
          variant="filled"
        >
          기본 Toast
        </Button>

        <Button
          onClick={() => toast.success("성공적으로 처리되었습니다!")}
          size="lg"
          variant="filled"
        >
          성공 Toast
        </Button>

        <Button
          onClick={() => toast.error("오류가 발생했습니다.")}
          size="lg"
          variant="filled"
        >
          에러 Toast
        </Button>

        <Button
          onClick={() => toast.warning("주의가 필요합니다.")}
          size="lg"
          variant="filled"
        >
          경고 Toast
        </Button>

        <Button
          onClick={() => toast.info("정보를 확인하세요.")}
          size="lg"
          variant="filled"
        >
          정보 Toast
        </Button>

        <Button
          onClick={() =>
            toast("닫기 불가능한 메시지", {
              dismissible: false,
            })
          }
          size="lg"
          variant="filled"
        >
          닫기 불가 Toast
        </Button>
      </div>
    </div>
  ),
};

export const SimpleExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">간단한 사용 예시</h3>
      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={() => toast("저장되었습니다")}
          size="sm"
          className="w-full"
        >
          저장 완료
        </Button>
        <Button
          onClick={() => toast.success("업로드 성공!")}
          size="sm"
          className="w-full"
        >
          업로드 성공
        </Button>
        <Button
          onClick={() => toast.error("연결 실패")}
          size="sm"
          className="w-full"
        >
          에러 메시지
        </Button>
        <Button
          onClick={() => toast.warning("배터리 부족")}
          size="sm"
          className="w-full"
        >
          경고 알림
        </Button>
      </div>
    </div>
  ),
};
