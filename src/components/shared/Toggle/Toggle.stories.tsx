import type { Meta, StoryObj } from "@storybook/react";
// Docs는 shadcn 기본 토글로 노출
import { Toggle as UIToggle } from "@/components/ui/toggle";
// 카테고리 데모는 shared 토글로 렌더링
import { Toggle as SharedToggle } from "./Toggle";

const meta = {
  title: "Components/Toggle",
  component: UIToggle, // Docs 탭에 기본(커스텀 안 된) 토글 노출용
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Toggle",
  },
} satisfies Meta<typeof UIToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default_Group: Story = {
  name: "default",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">size = m</span>
        <SharedToggle type="default" size="m" />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">size = s</span>
        <SharedToggle type="default" size="s" />
      </div>
    </div>
  ),
};

export const Text_Group: Story = {
  name: "text",
  render: () => (
    <div className="flex flex-col gap-6">
      <SharedToggle type="text" leftLabel="Toggle 1" rightLabel="Toggle 2" />
    </div>
  ),
};

export const Icon_Group: Story = {
  name: "icon",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">size = m</span>
        <SharedToggle
          type="icon"
          size="m"
          icon={
            <img
              src="/plusIcon.svg"
              alt="플러스 아이콘"
              width={16}
              height={16}
            />
          }
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">size = s</span>
        <SharedToggle
          type="icon"
          size="s"
          icon={
            <img
              src="/plusIcon.svg"
              alt="플러스 아이콘"
              width={14}
              height={14}
            />
          }
        />
      </div>
    </div>
  ),
};

export const Button_Group: Story = {
  name: "button",
  render: () => (
    <div className="flex flex-col gap-8">
      {/* withText m */}
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">withText m</span>
        <SharedToggle
          type="button"
          buttonKind="withText"
          size="m"
          color="default"
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>

        <SharedToggle
          type="button"
          buttonKind="withText"
          size="m"
          color="disabled"
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="withText"
          size="m"
          color="default"
          outlined
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
      </div>

      {/* withText s */}
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">withText s</span>
        <SharedToggle
          type="button"
          buttonKind="withText"
          size="s"
          color="default"
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>

        <SharedToggle
          type="button"
          buttonKind="withText"
          size="s"
          color="disabled"
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="withText"
          size="s"
          color="default"
          outlined
          label="Text"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
      </div>

      {/* noText m/s */}
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">noText m</span>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="m"
          color="default"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>

        <SharedToggle
          type="button"
          buttonKind="noText"
          size="m"
          color="disabled"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="m"
          color="default"
          outlined
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-28 text-right">noText s</span>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="s"
          color="default"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="s"
          color="active"
          pressed
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="s"
          color="disabled"
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
        <SharedToggle
          type="button"
          buttonKind="noText"
          size="s"
          color="default"
          outlined
        >
          <img src="/toggleIcon.svg" alt="토글 아이콘" width={16} height={16} />
        </SharedToggle>
      </div>
    </div>
  ),
};

export const Star_Group: Story = {
  name: "star",
  render: () => (
    <div className="flex flex-col gap-6 ">
      <div className="flex items-center gap-3">
        <span className="w-28 text-right">star</span>
        <SharedToggle type="star" />
      </div>
    </div>
  ),
};

export const All_Variants: Story = {
  name: "all variants",
  render: () => (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Default
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">size = m</span>
          <SharedToggle type="default" size="m" />
          {/* <SharedToggle type="default" size="m" pressed /> */}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="w-28 text-right">size = s</span>
          <SharedToggle type="default" size="s" />
          {/* <SharedToggle type="default" size="s" pressed /> */}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Text
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">basic</span>
          <SharedToggle
            type="text"
            leftLabel="Toggle 1"
            rightLabel="Toggle 2"
          />
          {/* <SharedToggle
            type="text"
            pressed
            leftLabel="Toggle 1"
            rightLabel="Toggle 2"
          /> */}
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Icon
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">size = m</span>
          <SharedToggle
            type="icon"
            size="m"
            icon={
              <img
                src="/plusIcon.svg"
                alt="플러스 아이콘"
                width={16}
                height={16}
              />
            }
          />
          {/* <SharedToggle
            type="icon"
            size="m"
            pressed
            icon={
              <img
                src="/plusIcon.svg"
                alt="플러스 아이콘"
                width={16}
                height={16}
              />
            }
          /> */}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="w-28 text-right">size = s</span>
          <SharedToggle
            type="icon"
            size="s"
            icon={
              <img
                src="/plusIcon.svg"
                alt="플러스 아이콘"
                width={14}
                height={14}
              />
            }
          />
          <SharedToggle
            type="icon"
            size="s"
            pressed
            icon={
              <img
                src="/plusIcon.svg"
                alt="플러스 아이콘"
                width={14}
                height={14}
              />
            }
          />
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Button / withText
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">m</span>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="m"
            color="default"
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="m"
            color="active"
            label="Text"
            pressed
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="m"
            color="disabled"
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="m"
            color="default"
            outlined
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="w-28 text-right">s</span>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="s"
            color="default"
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="s"
            color="active"
            label="Text"
            pressed
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="s"
            color="disabled"
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="withText"
            size="s"
            color="default"
            outlined
            label="Text"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Button / noText
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">m</span>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="m"
            color="default"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="m"
            color="active"
            pressed
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="m"
            color="disabled"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="m"
            color="default"
            outlined
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="w-28 text-right">s</span>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="s"
            color="default"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="s"
            color="active"
            pressed
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="s"
            color="disabled"
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
          <SharedToggle
            type="button"
            buttonKind="noText"
            size="s"
            color="default"
            outlined
          >
            <img
              src="/toggleIcon.svg"
              alt="토글 아이콘"
              width={16}
              height={16}
            />
          </SharedToggle>
        </div>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-muted-foreground">
          Star
        </h4>
        <div className="flex items-center gap-3">
          <span className="w-28 text-right">basic</span>
          <SharedToggle type="star" />
        </div>
      </div>
    </div>
  ),
};
