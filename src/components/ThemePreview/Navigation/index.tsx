import { useState } from "react";
import {
  Home,
  Users,
  Settings,
  FileText,
  HelpCircle,
  Bell,
  Mail,
  Calendar,
  BarChart,
  Lock,
} from "lucide-react";
import {
  NavContainer,
  NavItem,
  NavIcon,
  NavLabel,
} from "@/components/complex/Navigation";

export const NavigationPreview = () => {
  const [activeKey, setActiveKey] = useState("home");

  const navigationItems = [
    { key: "home", label: "홈", icon: <Home size={20} /> },
    { key: "users", label: "사용자", icon: <Users size={20} /> },
    { key: "documents", label: "문서", icon: <FileText size={20} /> },
    { key: "calendar", label: "일정", icon: <Calendar size={20} /> },
    { key: "analytics", label: "통계", icon: <BarChart size={20} /> },
    { key: "messages", label: "메시지", icon: <Mail size={20} /> },
    { key: "notifications", label: "알림", icon: <Bell size={20} /> },
    { key: "settings", label: "설정", icon: <Settings size={20} /> },
    { key: "help", label: "도움말", icon: <HelpCircle size={20} /> },
    { key: "admin", label: "관리자", icon: <Lock size={20} />, disabled: true },
  ];

  const handleNavClick = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* 가로 내비게이션 - 작은 크기 */}
      <div>
        <h3>가로 내비게이션 (작은 크기)</h3>
        <NavContainer $variant="horizontal">
          {navigationItems.slice(0, 5).map((item) => (
            <NavItem
              key={item.key}
              href="#"
              onClick={() => handleNavClick(item.key)}
              $active={activeKey === item.key}
              $variant="horizontal"
              $size="small"
              $disabled={item.disabled}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavLabel>{item.label}</NavLabel>
            </NavItem>
          ))}
        </NavContainer>
      </div>

      {/* 가로 내비게이션 - 배경 있음 */}
      <div>
        <h3>가로 내비게이션 (배경 있음)</h3>
        <NavContainer $variant="horizontal" $background>
          {navigationItems.slice(0, 5).map((item) => (
            <NavItem
              key={item.key}
              href="#"
              onClick={() => handleNavClick(item.key)}
              $active={activeKey === item.key}
              $variant="horizontal"
              $size="medium"
              $disabled={item.disabled}
            >
              <NavIcon>{item.icon}</NavIcon>
              <NavLabel>{item.label}</NavLabel>
            </NavItem>
          ))}
        </NavContainer>
      </div>

      {/* 세로 내비게이션 - 기본 크기 */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <div style={{ flex: 1 }}>
          <h3>세로 내비게이션 (기본)</h3>
          <NavContainer $variant="vertical">
            {navigationItems.map((item) => (
              <NavItem
                key={item.key}
                href="#"
                onClick={() => handleNavClick(item.key)}
                $active={activeKey === item.key}
                $variant="vertical"
                $size="medium"
                $disabled={item.disabled}
              >
                <NavIcon>{item.icon}</NavIcon>
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            ))}
          </NavContainer>
        </div>

        {/* 세로 내비게이션 - 배경 있음 */}
        <div style={{ flex: 1 }}>
          <h3>세로 내비게이션 (배경 있음)</h3>
          <NavContainer $variant="vertical" $background>
            {navigationItems.map((item) => (
              <NavItem
                key={item.key}
                href="#"
                onClick={() => handleNavClick(item.key)}
                $active={activeKey === item.key}
                $variant="vertical"
                $size="medium"
                $disabled={item.disabled}
              >
                <NavIcon>{item.icon}</NavIcon>
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            ))}
          </NavContainer>
        </div>

        {/* 세로 내비게이션 - 큰 크기 */}
        <div style={{ flex: 1 }}>
          <h3>세로 내비게이션 (큰 크기)</h3>
          <NavContainer $variant="vertical" $background>
            {navigationItems.slice(0, 5).map((item) => (
              <NavItem
                key={item.key}
                href="#"
                onClick={() => handleNavClick(item.key)}
                $active={activeKey === item.key}
                $variant="vertical"
                $size="large"
                $disabled={item.disabled}
              >
                <NavIcon>{item.icon}</NavIcon>
                <NavLabel>{item.label}</NavLabel>
              </NavItem>
            ))}
          </NavContainer>
        </div>
      </div>
    </div>
  );
};
