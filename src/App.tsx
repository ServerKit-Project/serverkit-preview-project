import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

// ThemePreview 컴포넌트들 자동 import
import { AccordionPreview } from "@/components/ThemePreview/Accordion";
import { AlertPreview } from "@/components/ThemePreview/Alert";
import { AlertDialogPreview } from "@/components/ThemePreview/AlertDialog";
import { CalendarPreview } from "@/components/ThemePreview/Calendar";
import { CarouselPreview } from "@/components/ThemePreview/Carousel";
import { ChartPreview } from "@/components/ThemePreview/Chart";
import { CollapsiblePreview } from "@/components/ThemePreview/Collapsible";
import { ComboboxPreview } from "@/components/ThemePreview/Combobox";
import { CommandPreview } from "@/components/ThemePreview/Command";
import { ContextMenuPreview } from "@/components/ThemePreview/ContextMenu";
import { DataTablePreview } from "@/components/ThemePreview/DataTable";
import { DatePickerPreview } from "@/components/ThemePreview/DatePicker";
import { DialogPreview } from "@/components/ThemePreview/Dialog";
import { DrawerPreview } from "@/components/ThemePreview/Drawer";
import { DropdownMenuPreview } from "@/components/ThemePreview/DropdownMenu";
import { FooterPreview } from "@/components/ThemePreview/Footer";
import { HeaderPreview } from "@/components/ThemePreview/Header";
import { InputOTPPreview } from "@/components/ThemePreview/InputOTP";
import { KeyValuePreview } from "@/components/ThemePreview/KeyValue";
import { LabelPreview } from "@/components/ThemePreview/Label";
import { LoginPreview } from "@/components/ThemePreview/Login";
import { LogoutPreview } from "@/components/ThemePreview/Logout";
import { MenubarPreview } from "@/components/ThemePreview/Menubar";
import { ModalPreview } from "@/components/ThemePreview/Modal";
import { NavigationPreview } from "@/components/ThemePreview/Navigation";
import { NavigationMenuPreview } from "@/components/ThemePreview/NavigationMenu";
import { PaginationPreview } from "@/components/ThemePreview/Pagination";
import { PopoverPreview } from "@/components/ThemePreview/Popover";
import { ProgressPreview } from "@/components/ThemePreview/Progress";
import { ResizablePreview } from "@/components/ThemePreview/Resizable";
import { ScrollAreaPreview } from "@/components/ThemePreview/ScrollArea";
import { SelectPreview } from "@/components/ThemePreview/Select";
import { SignupPreview } from "@/components/ThemePreview/Signup";
import { SkeletonPreview } from "@/components/ThemePreview/Skeleton";
import { SliderPreview } from "@/components/ThemePreview/Slider";
import { SpinnerPreview } from "@/components/ThemePreview/Spinner";
import { SwitchPreview } from "@/components/ThemePreview/Switch";
import { TabsPreview } from "@/components/ThemePreview/Tabs";
import { TextareaPreview } from "@/components/ThemePreview/Textarea";
import { TogglePreview } from "@/components/ThemePreview/Toggle";
import { ToggleGroupPreview } from "@/components/ThemePreview/ToggleGroup";
import { TooltipPreview } from "@/components/ThemePreview/Tooltip";

const componentList = [
  { path: "accordion", name: "Accordion", component: AccordionPreview },
  { path: "alert", name: "Alert", component: AlertPreview },
  { path: "alert-dialog", name: "AlertDialog", component: AlertDialogPreview },
  { path: "calendar", name: "Calendar", component: CalendarPreview },
  { path: "carousel", name: "Carousel", component: CarouselPreview },
  { path: "chart", name: "Chart", component: ChartPreview },
  { path: "collapsible", name: "Collapsible", component: CollapsiblePreview },
  { path: "combobox", name: "Combobox", component: ComboboxPreview },
  { path: "command", name: "Command", component: CommandPreview },
  { path: "context-menu", name: "ContextMenu", component: ContextMenuPreview },
  { path: "data-table", name: "DataTable", component: DataTablePreview },
  { path: "date-picker", name: "DatePicker", component: DatePickerPreview },
  { path: "dialog", name: "Dialog", component: DialogPreview },
  { path: "drawer", name: "Drawer", component: DrawerPreview },
  {
    path: "dropdown-menu",
    name: "DropdownMenu",
    component: DropdownMenuPreview,
  },
  { path: "footer", name: "Footer", component: FooterPreview },
  { path: "header", name: "Header", component: HeaderPreview },
  { path: "input-otp", name: "InputOTP", component: InputOTPPreview },
  { path: "key-value", name: "KeyValue", component: KeyValuePreview },
  { path: "label", name: "Label", component: LabelPreview },
  { path: "login", name: "Login", component: LoginPreview },
  { path: "logout", name: "Logout", component: LogoutPreview },
  { path: "menubar", name: "Menubar", component: MenubarPreview },
  { path: "modal", name: "Modal", component: ModalPreview },
  { path: "navigation", name: "Navigation", component: NavigationPreview },
  {
    path: "navigation-menu",
    name: "NavigationMenu",
    component: NavigationMenuPreview,
  },
  { path: "pagination", name: "Pagination", component: PaginationPreview },
  { path: "popover", name: "Popover", component: PopoverPreview },
  { path: "progress", name: "Progress", component: ProgressPreview },
  { path: "resizable", name: "Resizable", component: ResizablePreview },
  { path: "scroll-area", name: "ScrollArea", component: ScrollAreaPreview },
  { path: "select", name: "Select", component: SelectPreview },
  { path: "signup", name: "Signup", component: SignupPreview },
  { path: "skeleton", name: "Skeleton", component: SkeletonPreview },
  { path: "slider", name: "Slider", component: SliderPreview },
  { path: "spinner", name: "Spinner", component: SpinnerPreview },
  { path: "switch", name: "Switch", component: SwitchPreview },
  { path: "tabs", name: "Tabs", component: TabsPreview },
  { path: "textarea", name: "Textarea", component: TextareaPreview },
  { path: "toggle", name: "Toggle", component: TogglePreview },
  { path: "toggle-group", name: "ToggleGroup", component: ToggleGroupPreview },
  { path: "tooltip", name: "Tooltip", component: TooltipPreview },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        borderRight: "1px solid #e5e7eb",
        padding: "2rem 1rem",
        backgroundColor: "#f9fafb",
        overflowY: "auto",
      }}
    >
      <h2
        style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Theme Preview
      </h2>
      <nav>
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {componentList.map(({ path, name }) => (
            <li key={path}>
              <Link
                to={`/${path}`}
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem",
                  textDecoration: "none",
                  color: location.pathname === `/${path}` ? "#fff" : "#374151",
                  backgroundColor:
                    location.pathname === `/${path}`
                      ? "#4F46E5"
                      : "transparent",
                  transition: "all 0.2s",
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Layout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <main style={{ flex: 1, overflow: "auto" }}>
        <Routes>
          <Route
            path="/"
            element={
              <div
                style={{
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "100%",
                  textAlign: "center",
                }}
              >
                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  ServerKit Theme Preview
                </h1>
                <p style={{ color: "#6b7280" }}>
                  왼쪽 메뉴에서 컴포넌트를 선택하여 미리보기를 확인하세요.
                </p>
              </div>
            }
          />
          {componentList.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return <Layout />;
};

export default App;
