import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";

const meta: Meta<typeof Notification> = {
  title: "components/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "사용자 언급 알림을 표시하는 Notification 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    username: {
      control: "text",
      description: "언급한 사용자의 이름",
    },
    date: {
      control: "date",
      description: "알림 발생 날짜 (Date 객체 또는 문자열)",
    },
    projectName: {
      control: "text",
      description: "프로젝트 이름",
    },
    message: {
      control: "text",
      description: "언급 메시지 내용",
    },
    avatarSrc: {
      control: "text",
      description: "아바타 이미지 URL",
    },
    avatarFallback: {
      control: "text",
      description: "아바타 대체 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "알림 클릭 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Username",
    date: new Date(Date.now() - 5 * 60 * 1000), // 5분 전
    projectName: "프로젝트 명",
    message:
      "대한민국의 주권은 국민에게 있고, 모든 권력은 국민으로부터 나온다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.",
    avatarFallback: "U",
  },
};

export const WithAvatar: Story = {
  args: {
    ...Default.args,
    avatarSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    avatarFallback: "JD",
    username: "John Doe",
  },
};

export const RecentNotification: Story = {
  args: {
    ...Default.args,
    username: "DevUser",
    date: new Date(), // 지금
    projectName: "Youvico Web v2",
    message: "새로운 컴포넌트가 추가되었습니다! 확인해보세요.",
    avatarFallback: "DU",
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    onClick: () => alert("알림을 클릭했습니다!"),
  },
  parameters: {
    docs: {
      description: {
        story: "클릭 가능한 알림입니다. 키보드 내비게이션도 지원합니다.",
      },
    },
  },
};

export const VeryLongContent: Story = {
  args: {
    ...Default.args,
    username: "초롱꽃마을6단지GTX운정역금강펜테리움센트럴파크",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3일 전
    projectName: "광주전남공동혁신도시빛가람대방엘리움로얄카운티1차",
    message:
      "아 파트아파트 (ง 🕶 )ว 아 파트아파트 ٩( 🕶 )۶ 아 파트아파트 (ง🕶 )ว 아 파트아파트 ( 🕶 و(و 아 파트아파트 (ง 🕶 )ว 아 파트아파트 ٩( 🕶 )۶ 아 파트아파트 (ง🕶 )ว 아 파트아파트 ( 🕶 و(و 아 파트아파트 (ง 🕶 )ว 아 파트아파트 ٩( 🕶 )۶ 아 파트아파트 (ง🕶 )ว 아 파트아파트 ( 🕶 و(و",
  },
  parameters: {
    docs: {
      description: {
        story: "매우 긴 내용이 포함된 알림입니다. 메시지는 2줄로 제한됩니다.",
      },
    },
  },
};

export const TimeVariations: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <h3 className="text-lg font-semibold">다양한 시간대 표시</h3>
      <div className="space-y-3">
        <Notification
          username="실시간사용자"
          date={new Date()}
          projectName="실시간 프로젝트"
          message="방금 전에 언급되었습니다."
          avatarFallback="실"
        />
        <Notification
          username="15분전사용자"
          date={new Date(Date.now() - 15 * 60 * 1000)}
          projectName="15분 프로젝트"
          message="15분 전에 언급되었습니다."
          avatarFallback="15"
        />
        <Notification
          username="2시간전사용자"
          date={new Date(Date.now() - 2 * 60 * 60 * 1000)}
          projectName="2시간 프로젝트"
          message="2시간 전에 언급되었습니다."
          avatarFallback="2"
        />
        <Notification
          username="5일전사용자"
          date={new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)}
          projectName="5일 프로젝트"
          message="5일 전에 언급되었습니다."
          avatarFallback="5"
        />
        <Notification
          username="2개월전사용자"
          date={new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)}
          projectName="2개월 프로젝트"
          message="2개월 전에 언급되었습니다 (같은 해)."
          avatarFallback="2"
        />
        <Notification
          username="작년사용자"
          date={new Date(2023, 5, 15)}
          projectName="작년 프로젝트"
          message="작년에 언급되었습니다 (다른 해)."
          avatarFallback="작"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "formatRelativeDate 함수의 다양한 시간 형식을 보여줍니다.",
      },
    },
  },
};

export const EdgeCases: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <h3 className="text-lg font-semibold">특수 케이스들</h3>
      <div className="space-y-3">
        <Notification
          username="A"
          date={new Date()}
          projectName="X"
          message="최소한의 내용"
          avatarFallback="A"
        />
        <Notification
          username="이모지🚀포함된사용자"
          date="2024-12-31 23:59:59"
          projectName="프로젝트 이름에 특수문자 !@#$%^&*()"
          message="메시지에도 이모지가 포함될 수 있습니다 🎉🎊✨ 그리고 특수문자도 !@#$%^&*()"
          avatarFallback="이"
        />
        <Notification
          username="URLTestUser"
          date={new Date(Date.now() - 30 * 60 * 1000)}
          projectName="링크 테스트"
          message="https://example.com 같은 URL이 메시지에 포함될 수 있습니다."
          avatarFallback="U"
          onClick={() => console.log("URL 포함 알림 클릭")}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 특수 케이스를 테스트하는 알림들입니다.",
      },
    },
  },
};

export const NotificationList: Story = {
  render: () => (
    <div className="space-y-3 w-[400px]">
      <h3 className="text-lg font-semibold">알림 목록</h3>
      <div className="space-y-2">
        <Notification
          username="김개발"
          date={new Date(Date.now() - 5 * 60 * 1000)}
          projectName="디자인 시스템"
          message="컴포넌트 리뷰 부탁드려요!"
          avatarFallback="김"
          onClick={() => console.log("김개발 알림 클릭")}
        />
        <Notification
          username="이기획"
          date={new Date(Date.now() - 1 * 60 * 60 * 1000)}
          projectName="모바일 앱"
          message="요구사항 수정사항 있습니다. 확인 후 연락 주세요."
          avatarFallback="이"
          onClick={() => console.log("이기획 알림 클릭")}
        />
        <Notification
          username="박디자인"
          date={new Date(Date.now() - 3 * 60 * 60 * 1000)}
          projectName="웹사이트 리뉴얼"
          message="프로토타입 완성했어요 👍"
          avatarFallback="박"
        />
      </div>
    </div>
  ),
};
