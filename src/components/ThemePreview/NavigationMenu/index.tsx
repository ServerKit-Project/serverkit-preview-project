import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "@/components/complex/NavigationMenu";

export const NavigationMenuPreview = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => handleMenuClick("products")}
            data-state={activeMenu === "products" ? "open" : ""}
          >
            제품
            <ChevronDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent $isOpen={activeMenu === "products"}>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(2, 1fr)",
                width: "400px",
              }}
            >
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                  서버킷 클라우드
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  클라우드 기반의 서버 관리 솔루션
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                  서버킷 엔터프라이즈
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  기업용 온프레미스 솔루션
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                  서버킷 모니터링
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  실시간 서버 모니터링 도구
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.5rem", fontWeight: 500 }}>
                  서버킷 백업
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  안전한 데이터 백업 솔루션
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => handleMenuClick("resources")}
            data-state={activeMenu === "resources" ? "open" : ""}
          >
            리소스
            <ChevronDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent $isOpen={activeMenu === "resources"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                width: "300px",
              }}
            >
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
                  문서
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  API 문서 및 가이드
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
                  블로그
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  기술 블로그 및 업데이트
                </div>
              </NavigationMenuLink>
              <NavigationMenuLink href="#">
                <div style={{ marginBottom: "0.25rem", fontWeight: 500 }}>
                  커뮤니티
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  포럼 및 사용자 커뮤니티
                </div>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            onClick={() => handleMenuClick("company")}
            data-state={activeMenu === "company" ? "open" : ""}
          >
            회사
            <ChevronDown size={16} />
          </NavigationMenuTrigger>
          <NavigationMenuContent $isOpen={activeMenu === "company"}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                width: "250px",
              }}
            >
              <NavigationMenuLink href="#">회사 소개</NavigationMenuLink>
              <NavigationMenuLink href="#">팀</NavigationMenuLink>
              <NavigationMenuLink href="#">채용</NavigationMenuLink>
              <NavigationMenuLink href="#">연락처</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="#" style={{ padding: "8px 12px" }}>
            가격
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewport />
      <NavigationMenuIndicator
        $isVisible={!!activeMenu}
        style={
          {
            "--left":
              activeMenu === "products"
                ? "0"
                : activeMenu === "resources"
                ? "100px"
                : activeMenu === "company"
                ? "200px"
                : "0",
            "--width": "80px",
          } as React.CSSProperties
        }
      />
    </NavigationMenuRoot>
  );
};
