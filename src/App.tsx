import { Routes, Route } from "react-router-dom";
import WelcomeServerkit from "./pages/welcome-serverkit";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import { ProtectedRoute } from "@/sdk/route/ProtectedRoute";
import ShowcaseIndex from "./showcase";
import ShowcaseLayout from "./showcase/layout/ShowcaseLayout";

// Import all preview components
import AccordionPreview from "./showcase/components/AccordionPreview";
import AlertDialogPreview from "./showcase/components/AlertDialogPreview";
import AlertPreview from "./showcase/components/AlertPreview";
import AspectRatioPreview from "./showcase/components/AspectRatioPreview";
import AvatarPreview from "./showcase/components/AvatarPreview";
import BadgePreview from "./showcase/components/BadgePreview";
import BreadcrumbPreview from "./showcase/components/BreadcrumbPreview";
import ButtonPreview from "./showcase/components/ButtonPreview";
import CalendarPreview from "./showcase/components/CalendarPreview";
import CarouselPreview from "./showcase/components/CarouselPreview";
import CheckboxPreview from "./showcase/components/CheckboxPreview";
import CollapsiblePreview from "./showcase/components/CollapsiblePreview";
import CommandPreview from "./showcase/components/CommandPreview";
import ContextMenuPreview from "./showcase/components/ContextMenuPreview";
import DialogPreview from "./showcase/components/DialogPreview";
import DrawerPreview from "./showcase/components/DrawerPreview";
import DropdownMenuPreview from "./showcase/components/DropdownMenuPreview";
import HoverCardPreview from "./showcase/components/HoverCardPreview";
import InputPreview from "./showcase/components/InputPreview";
import MenubarPreview from "./showcase/components/MenubarPreview";
import NavigationMenuPreview from "./showcase/components/NavigationMenuPreview";
import PaginationPreview from "./showcase/components/PaginationPreview";
import PopoverPreview from "./showcase/components/PopoverPreview";
import ProgressPreview from "./showcase/components/ProgressPreview";
import RadioGroupPreview from "./showcase/components/RadioGroupPreview";
import ResizablePreview from "./showcase/components/ResizablePreview";
import ScrollAreaPreview from "./showcase/components/ScrollAreaPreview";
import SelectPreview from "./showcase/components/SelectPreview";
import SeparatorPreview from "./showcase/components/SeparatorPreview";
import SheetPreview from "./showcase/components/SheetPreview";
import SidebarPreview from "./showcase/components/SidebarPreview";
import SkeletonPreview from "./showcase/components/SkeletonPreview";
import SliderPreview from "./showcase/components/SliderPreview";
import SonnerPreview from "./showcase/components/SonnerPreview";
import SwitchPreview from "./showcase/components/SwitchPreview";
import TabsPreview from "./showcase/components/TabsPreview";
import TextareaPreview from "./showcase/components/TextareaPreview";
import ToastPreview from "./showcase/components/ToastPreview";
import ToasterPreview from "./showcase/components/ToasterPreview";
import ToggleGroupPreview from "./showcase/components/ToggleGroupPreview";
import TogglePreview from "./showcase/components/TogglePreview";
import TooltipPreview from "./showcase/components/TooltipPreview";

/*PackageImport*/
/*PackageImport start*/
/*PackageImport end*/

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Routes>
        {/*PackageRoutes*/}

        {/*PackageRoutes start*/}
        
        {/*PackageRoutes end*/}

        <Route path="/" element={<WelcomeServerkit />} />
        
        {/* Showcase Routes */}
        <Route path="/showcase" element={<ShowcaseIndex />} />
        <Route path="/showcase" element={<ShowcaseLayout />}>
          <Route path="accordion" element={<AccordionPreview />} />
          <Route path="alert-dialog" element={<AlertDialogPreview />} />
          <Route path="alert" element={<AlertPreview />} />
          <Route path="aspect-ratio" element={<AspectRatioPreview />} />
          <Route path="avatar" element={<AvatarPreview />} />
          <Route path="badge" element={<BadgePreview />} />
          <Route path="breadcrumb" element={<BreadcrumbPreview />} />
          <Route path="button" element={<ButtonPreview />} />
          <Route path="calendar" element={<CalendarPreview />} />
          <Route path="carousel" element={<CarouselPreview />} />
          <Route path="checkbox" element={<CheckboxPreview />} />
          <Route path="collapsible" element={<CollapsiblePreview />} />
          <Route path="command" element={<CommandPreview />} />
          <Route path="context-menu" element={<ContextMenuPreview />} />
          <Route path="dialog" element={<DialogPreview />} />
          <Route path="drawer" element={<DrawerPreview />} />
          <Route path="dropdown-menu" element={<DropdownMenuPreview />} />
          <Route path="hover-card" element={<HoverCardPreview />} />
          <Route path="input" element={<InputPreview />} />
          <Route path="menubar" element={<MenubarPreview />} />
          <Route path="navigation-menu" element={<NavigationMenuPreview />} />
          <Route path="pagination" element={<PaginationPreview />} />
          <Route path="popover" element={<PopoverPreview />} />
          <Route path="progress" element={<ProgressPreview />} />
          <Route path="radio-group" element={<RadioGroupPreview />} />
          <Route path="resizable" element={<ResizablePreview />} />
          <Route path="scroll-area" element={<ScrollAreaPreview />} />
          <Route path="select" element={<SelectPreview />} />
          <Route path="separator" element={<SeparatorPreview />} />
          <Route path="sheet" element={<SheetPreview />} />
          <Route path="sidebar" element={<SidebarPreview />} />
          <Route path="skeleton" element={<SkeletonPreview />} />
          <Route path="slider" element={<SliderPreview />} />
          <Route path="sonner" element={<SonnerPreview />} />
          <Route path="switch" element={<SwitchPreview />} />
          <Route path="tabs" element={<TabsPreview />} />
          <Route path="textarea" element={<TextareaPreview />} />
          <Route path="toast" element={<ToastPreview />} />
          <Route path="toaster" element={<ToasterPreview />} />
          <Route path="toggle-group" element={<ToggleGroupPreview />} />
          <Route path="toggle" element={<TogglePreview />} />
          <Route path="tooltip" element={<TooltipPreview />} />
        </Route>
        
        <Route path="/500" element={<ServerError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
