import { membersVariants } from "./Members.variants";
import { type VariantProps } from "class-variance-authority";

export interface MembersProps extends VariantProps<typeof membersVariants> {
  members: Array<{
    id: string;
    name: string;
    avatar?: string;
  }>;
  totalCount?: number;
  className?: string;
}
