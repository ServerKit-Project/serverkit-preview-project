#!/usr/bin/env node

/**
 * i18n 변환 도우미 스크립트
 * 
 * 사용법:
 * 1. 이 스크립트를 실행하여 컴포넌트에 useTranslation hook을 추가합니다
 * 2. 한국어 텍스트를 t() 함수로 자동 변환합니다
 * 
 * 실행: node src/i18n/convertToI18n.js [파일경로]
 */

const fs = require('fs');
const path = require('path');

// 한국어 텍스트와 번역 키 매핑
const textToKeyMap = {
  // Login
  '영상 소통을 한 곳에 담다': 'auth.login.heading',
  '로그인': 'auth.login.title',
  '이메일 주소를 입력하세요': 'auth.login.emailPlaceholder',
  '비밀번호를 입력하세요': 'auth.login.passwordPlaceholder',
  '이메일로 계속하기': 'auth.login.continueWithEmail',
  'Apple로 계속하기': 'auth.login.continueWithApple',
  'Google로 계속하기': 'auth.login.continueWithGoogle',
  '비밀번호를 잊으셨나요?': 'auth.login.forgotPassword',
  '비밀번호로 로그인하기': 'auth.login.loginWithPassword',
  '이메일을 확인할 수 없나요?': 'auth.login.cannotCheckEmail',
  
  // Signup
  '회원가입': 'auth.signup.title',
  '계정을 생성하기 위해 필요한 정보를 입력해주세요': 'auth.signup.subtitle',
  '2. 사용자 정보': 'auth.signup.subtitle2',
  '가입할 이메일을 입력해주세요.': 'auth.signup.enterEmail',
  '업무용 이메일을 권장드려요.': 'auth.signup.recommendWorkEmail',
  '이름': 'auth.signup.namePlaceholder',
  '새로운 계정 생성하기': 'auth.signup.createAccount',
  '이미 계정이 있어요': 'auth.signup.alreadyHaveAccount',
  'YouViCo가 처음이신가요?': 'auth.signup.firstTime',
  
  // Verification
  '인증 메일을 보냈어요': 'auth.verification.emailSent',
  '인증메일이 발송됐어요': 'auth.verification.emailSentSuccess',
  '다시 보내기': 'auth.verification.resend',
  '다른 이메일로 로그인': 'auth.verification.loginWithDifferentEmail',
  '인증이 완료됐어요': 'auth.verification.authComplete',
  
  // Workspace
  '워크스페이스': 'workspace.title',
  '내 워크스페이스': 'workspace.myWorkspace',
  '새 워크스페이스 생성하기': 'workspace.createNew',
  '기존 워크스페이스에 참가하기': 'workspace.joinExisting',
  '워크스페이스 찾기': 'workspace.search',
  '워크스페이스 이름을 입력하세요': 'workspace.namePlaceholder',
  '프로젝트 대시보드': 'workspace.dashboard',
  '대시보드 바로가기': 'workspace.dashboardShortcut',
  
  // Common
  '계속': 'common.continue',
  '다음': 'common.next',
  '이전': 'common.previous',
  '돌아가기': 'common.back',
  '다음으로': 'common.nextPage',
  '이전으로': 'common.previousPage',
  '시작하기': 'common.start',
  
  // Projects
  '최근 참여한 프로젝트': 'project.recentProjects',
  '프로젝트': 'project.project',
  
  // Roles
  '3. 역할 선택': 'role.title',
  '크리에이터': 'role.creator',
  '에디터': 'role.editor',
  '뷰어': 'role.viewer',
  '매니저': 'role.manager',
  
  // Plans
  '플랜 선택하기': 'plan.selectPlan',
  '무료': 'plan.free',
  '문의': 'plan.contact',
  '추천': 'plan.recommended',
  '인기': 'plan.popular',
  '월간 결제': 'plan.billing.monthly',
  '연간 결제': 'plan.billing.yearly',
  '30% 할인': 'plan.billing.discount',
  
  // Members
  '멤버 초대': 'member.invite',
  '이메일 초대': 'member.inviteByEmail',
  '링크 보내기': 'member.sendLink',
  '멤버 설정': 'member.settings',
  
  // Payment
  '결제하기': 'payment.title',
  '주문 요약': 'payment.summary',
  '이름 *': 'payment.name',
  '홍길동': 'payment.namePlaceholder',
  '회사명': 'payment.company',
  '회사명을 입력하세요': 'payment.companyPlaceholder',
  '카드번호 *': 'payment.cardNumber',
  '만료일 *': 'payment.expiryDate',
  '국가 *': 'payment.country',
  '대한민국': 'payment.countries.korea',
  '미국': 'payment.countries.usa',
  '일본': 'payment.countries.japan',
  '중국': 'payment.countries.china',
  '상세주소 *': 'payment.address',
  '상세 주소를 입력하세요': 'payment.addressPlaceholder',
  '도시': 'payment.city',
  '도시명': 'payment.cityPlaceholder',
  '시도': 'payment.state',
  '시/도': 'payment.statePlaceholder',
  '우편번호': 'payment.zipCode',
  'VAT 번호': 'payment.vatNumber',
  'VAT 번호를 입력하세요': 'payment.vatNumberPlaceholder'
};

function addImportStatement(content) {
  // Check if already has useTranslation import
  if (content.includes('useTranslation')) {
    return content;
  }
  
  // Find the last import statement
  const importRegex = /^import .+ from .+;?$/gm;
  const imports = content.match(importRegex);
  
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    const insertPosition = content.indexOf(lastImport) + lastImport.length;
    
    const newImport = "\nimport { useTranslation } from 'react-i18next';";
    content = content.slice(0, insertPosition) + newImport + content.slice(insertPosition);
  }
  
  return content;
}

function addUseTranslationHook(content) {
  // Check if already has useTranslation hook
  if (content.includes('useTranslation()')) {
    return content;
  }
  
  // Find the component function
  const componentRegex = /export\s+(?:default\s+)?function\s+\w+\s*\([^)]*\)\s*{/;
  const match = content.match(componentRegex);
  
  if (match) {
    const insertPosition = content.indexOf(match[0]) + match[0].length;
    const newHook = "\n  const { t } = useTranslation();";
    content = content.slice(0, insertPosition) + newHook + content.slice(insertPosition);
  }
  
  return content;
}

function replaceTextWithTranslation(content) {
  let modifiedContent = content;
  
  // Replace texts in JSX
  Object.entries(textToKeyMap).forEach(([text, key]) => {
    // Replace in JSX elements
    const jsxRegex = new RegExp(`>\\s*${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*<`, 'g');
    modifiedContent = modifiedContent.replace(jsxRegex, `>{t('${key}')}<`);
    
    // Replace in props
    const propRegex = new RegExp(`(placeholder|label|title|alt)=["']${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`, 'g');
    modifiedContent = modifiedContent.replace(propRegex, `$1={t('${key}')}`);
  });
  
  return modifiedContent;
}

function processFile(filePath) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import statement
  content = addImportStatement(content);
  
  // Add useTranslation hook
  content = addUseTranslationHook(content);
  
  // Replace texts with translations
  content = replaceTextWithTranslation(content);
  
  // Write back to file
  fs.writeFileSync(filePath, content, 'utf8');
  
  console.log(`✅ Processed: ${filePath}`);
}

// Main execution
const filePath = process.argv[2];

if (!filePath) {
  console.log('Usage: node convertToI18n.js [file-path]');
  console.log('Example: node convertToI18n.js src/pages/Root_3452ce87/LoginCard.tsx');
  process.exit(1);
}

if (fs.existsSync(filePath)) {
  processFile(filePath);
} else {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}