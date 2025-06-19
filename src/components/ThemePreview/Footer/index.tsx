import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FooterRoot,
  FooterContainer,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterBottom,
  FooterCopyright,
  FooterSocialLinks,
  SocialLink,
} from "@/components/complex/Footer";

export const FooterPreview = () => {
  return (
    <FooterRoot>
      <FooterContainer>
        <FooterSection>
          <FooterTitle>회사 소개</FooterTitle>
          <FooterLink href="#">회사 개요</FooterLink>
          <FooterLink href="#">연혁</FooterLink>
          <FooterLink href="#">경영 이념</FooterLink>
          <FooterLink href="#">채용 정보</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>제품 및 서비스</FooterTitle>
          <FooterLink href="#">제품 소개</FooterLink>
          <FooterLink href="#">서비스 안내</FooterLink>
          <FooterLink href="#">기술 지원</FooterLink>
          <FooterLink href="#">다운로드</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>고객 지원</FooterTitle>
          <FooterLink href="#">자주 묻는 질문</FooterLink>
          <FooterLink href="#">문의하기</FooterLink>
          <FooterLink href="#">공지사항</FooterLink>
          <FooterLink href="#">이용약관</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>연락처</FooterTitle>
          <FooterLink
            href="#"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Mail size={16} />
            contact@example.com
          </FooterLink>
          <FooterLink
            href="#"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <Phone size={16} />
            02-1234-5678
          </FooterLink>
          <FooterLink
            href="#"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <MapPin size={16} />
            서울특별시 강남구 테헤란로 123
          </FooterLink>
        </FooterSection>
      </FooterContainer>

      <FooterBottom>
        <FooterCopyright>
          © 2024 Company Name. All rights reserved.
        </FooterCopyright>

        <FooterSocialLinks>
          <SocialLink href="#" aria-label="Facebook">
            <Facebook size={20} />
          </SocialLink>
          <SocialLink href="#" aria-label="Twitter">
            <Twitter size={20} />
          </SocialLink>
          <SocialLink href="#" aria-label="Instagram">
            <Instagram size={20} />
          </SocialLink>
          <SocialLink href="#" aria-label="Youtube">
            <Youtube size={20} />
          </SocialLink>
        </FooterSocialLinks>
      </FooterBottom>
    </FooterRoot>
  );
};
