import { calloutVariants } from "./Callout.variants";
import { VariantProps } from "class-variance-authority";
import { VariantType } from "@/components/ui/varianticons";

export interface CalloutProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className">,
    VariantProps<typeof calloutVariants> {
  className?: string;
  variant?: VariantType;
}
