// Complex Components Development Guide
// 각 컴포넌트별 개발 가이드 문서

export const SWITCH_GUIDE = `
# Switch 컴포넌트 가이드

## 제공되는 StyledComponents
- SwitchContainer: Switch의 래퍼 컴포넌트
- SwitchInput: 실제 input 요소 (숨겨짐)
- SwitchSlider: 시각적인 토글 버튼 표시

## Props
- size: "sm" | "md" | "lg"
  sm: { width: "32px", height: "18px", thumbSize: "14px" }
  md: { width: "40px", height: "22px", thumbSize: "18px" }
  lg: { width: "48px", height: "26px", thumbSize: "22px" }

## 사용 예시
\`\`\`tsx
import { SwitchContainer, SwitchInput, SwitchSlider } from './Switch';

const MySwitch = () => {
  return (
    <SwitchContainer size="md">
      <SwitchInput 
        type="checkbox"
        $size="md"
        onChange={(e) => console.log(e.target.checked)}
      />
      <SwitchSlider size="md" />
    </SwitchContainer>
  );
};
\`\`\`

## 주의사항
1. size prop은 반드시 "sm", "md", "lg" 중 하나여야 함
2. 세 컴포넌트는 항상 세트로 사용
3. SwitchInput의 type은 반드시 "checkbox"로 설정
4. 사이즈 변경 시 모든 컴포넌트의 size prop을 동일하게 설정
`;

export const SLIDER_GUIDE = `
# Slider 컴포넌트 가이드

## 제공되는 StyledComponents
- SliderRoot: 슬라이더의 최상위 컨테이너
- SliderTrack: 슬라이더의 트랙 (배경선)
- SliderRange: 선택된 범위를 표시하는 영역
- SliderThumb: 드래그 가능한 핸들러

## Props & 속성
- SliderRoot: data-disabled (boolean)
- SliderRange: width (percentage)
- SliderThumb: 
  - left (percentage)
  - role="slider"
  - aria-valuenow
  - aria-valuemin
  - aria-valuemax

## 사용 예시
\`\`\`tsx
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from './Slider';

const MySlider = ({ value, onChange, disabled }) => {
  return (
    <SliderRoot data-disabled={disabled}>
      <SliderTrack>
        <SliderRange style={{ width: \`\${value}%\` }} />
      </SliderTrack>
      <SliderThumb 
        style={{ left: \`\${value}%\` }}
        role="slider"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </SliderRoot>
  );
};
\`\`\`

## 주의사항
1. 드래그 이벤트 핸들링 구현 필요
2. 반응형 레이아웃에서 정확한 위치 계산 필요
3. 접근성 속성(ARIA) 반드시 설정
4. 터치/마우스 이벤트 모두 고려
`;

export const TABLE_GUIDE = `
# Table 컴포넌트 가이드

## 제공되는 StyledComponents
- TableContainer: 테이블 래퍼
- TableRoot: 실제 테이블 요소
- TableHead: 테이블 헤더 섹션
- TableBody: 테이블 본문 섹션
- TableRow: 테이블 행
- TableHeader: 테이블 헤더 셀
- TableCell: 테이블 데이터 셀

## Props
- TableRoot: 
  $striped?: string (투명도)
  $bordered?: string (투명도)
  $hoverable?: string (투명도)
- TableRow:
  $striped?: string
  $hoverable?: string
  $index?: number
- TableHeader:
  $width?: string
  $bordered?: string
- TableCell:
  $bordered?: string

## 사용 예시
\`\`\`tsx
import {
  TableContainer,
  TableRoot,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from './Table';

const MyTable = () => {
  return (
    <TableContainer>
      <TableRoot $striped="20" $hoverable="10">
        <TableHead>
          <TableRow>
            <TableHeader $width="200px">제목</TableHeader>
            <TableHeader>내용</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow $index={1}>
            <TableCell>데이터1</TableCell>
            <TableCell>데이터2</TableCell>
          </TableRow>
        </TableBody>
      </TableRoot>
    </TableContainer>
  );
};
\`\`\`

## 주의사항
1. TableContainer는 항상 최상위 래퍼로 사용
2. $index prop은 0부터 시작 (짝수 행 배경색용)
3. $bordered, $striped, $hoverable props는 투명도 값
4. 반응형 테이블의 경우 가로 스크롤 자동 적용
`;

// 추가 컴포넌트들에 대한 가이드는 동일한 형식으로 계속 작성...

export const PAGINATION_GUIDE = `
# Pagination 컴포넌트 가이드

## 제공되는 StyledComponents
- PaginationContainer: 페이지네이션 래퍼
- PaginationButton: 페이지 버튼
- PaginationEllipsis: 생략 부호
- PaginationNav: 네비게이션 컨테이너

## Props
- PaginationButton:
  $active?: boolean
  $disabled?: boolean
  size?: "sm" | "md" | "lg"

## 사용 예시
\`\`\`tsx
import {
  PaginationContainer,
  PaginationButton,
  PaginationEllipsis,
  PaginationNav
} from './Pagination';

const MyPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginationContainer>
      <PaginationNav>
        <PaginationButton 
          $disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          이전
        </PaginationButton>
        {/* 페이지 버튼들 */}
        <PaginationButton $active={true}>1</PaginationButton>
        <PaginationEllipsis>...</PaginationEllipsis>
        <PaginationButton 
          $disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          다음
        </PaginationButton>
      </PaginationNav>
    </PaginationContainer>
  );
};
\`\`\`

## 주의사항
1. active 상태의 버튼 스타일링 자동 적용
2. disabled 상태 처리 필수
3. 키보드 네비게이션 지원 필요
4. 반응형 디자인 고려 (모바일에서는 축소된 형태 권장)
`;

export const MODAL_GUIDE = `
# Modal 컴포넌트 가이드

## 제공되는 StyledComponents
- ModalOverlay: 모달 배경 오버레이
- ModalContainer: 모달 컨테이너
- ModalHeader: 모달 헤더 영역
- ModalContent: 모달 컨텐츠 영역
- ModalFooter: 모달 푸터 영역
- ModalCloseButton: 모달 닫기 버튼

## Props
- ModalContainer:
  size?: "sm" | "md" | "lg"
  isOpen: boolean
  onClose: () => void
- ModalOverlay:
  $isOpen: boolean

## 사용 예시
\`\`\`tsx
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalCloseButton
} from './Modal';

const MyModal = ({ isOpen, onClose }) => {
  return (
    <>
      <ModalOverlay $isOpen={isOpen} onClick={onClose} />
      <ModalContainer isOpen={isOpen} onClose={onClose} size="md">
        <ModalHeader>
          제목
          <ModalCloseButton onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          컨텐츠 내용
        </ModalContent>
        <ModalFooter>
          <button onClick={onClose}>닫기</button>
        </ModalFooter>
      </ModalContainer>
    </>
  );
};
\`\`\`

## 주의사항
1. Portal을 사용하여 모달 마운트 지점 설정 필요
2. ESC 키 이벤트 처리 구현
3. 모달 외부 클릭 시 닫기 처리
4. 포커스 트랩 구현 필요
`;

export const NAVIGATION_MENU_GUIDE = `
# NavigationMenu 컴포넌트 가이드

## 제공되는 StyledComponents
- NavMenuRoot: 네비게이션 메뉴 루트
- NavMenuList: 메뉴 리스트
- NavMenuItem: 메뉴 아이템
- NavMenuTrigger: 드롭다운 트리거
- NavMenuContent: 드롭다운 컨텐츠
- NavMenuLink: 메뉴 링크

## Props
- NavMenuRoot:
  orientation?: "horizontal" | "vertical"
- NavMenuItem:
  $active?: boolean
  $disabled?: boolean
- NavMenuContent:
  $isOpen?: boolean

## 사용 예시
\`\`\`tsx
import {
  NavMenuRoot,
  NavMenuList,
  NavMenuItem,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuLink
} from './NavigationMenu';

const MyNav = () => {
  return (
    <NavMenuRoot orientation="horizontal">
      <NavMenuList>
        <NavMenuItem>
          <NavMenuLink href="/home">홈</NavMenuLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavMenuTrigger>드롭다운</NavMenuTrigger>
          <NavMenuContent>
            <NavMenuLink href="/sub1">서브메뉴1</NavMenuLink>
            <NavMenuLink href="/sub2">서브메뉴2</NavMenuLink>
          </NavMenuContent>
        </NavMenuItem>
      </NavMenuList>
    </NavMenuRoot>
  );
};
\`\`\`

## 주의사항
1. 키보드 네비게이션 구현 필요
2. 드롭다운 메뉴의 위치 계산 주의
3. 모바일 대응 필요
4. 활성 메뉴 표시 로직 구현
`;

export const TABS_GUIDE = `
# Tabs 컴포넌트 가이드

## 제공되는 StyledComponents
- TabsRoot: 탭 컨테이너
- TabsList: 탭 버튼 리스트
- TabsTrigger: 탭 버튼
- TabsContent: 탭 컨텐츠

## Props
- TabsRoot:
  defaultValue?: string
  orientation?: "horizontal" | "vertical"
- TabsTrigger:
  value: string
  $active?: boolean
  $disabled?: boolean
- TabsContent:
  value: string
  $active?: boolean

## 사용 예시
\`\`\`tsx
import {
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent
} from './Tabs';

const MyTabs = () => {
  return (
    <TabsRoot defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">탭1</TabsTrigger>
        <TabsTrigger value="tab2">탭2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        탭1 내용
      </TabsContent>
      <TabsContent value="tab2">
        탭2 내용
      </TabsContent>
    </TabsRoot>
  );
};
\`\`\`

## 주의사항
1. value prop은 unique해야 함
2. 키보드 네비게이션 구현
3. 탭 전환 애니메이션 고려
4. 반응형 디자인 대응
`;

export const TOOLTIP_GUIDE = `
# Tooltip 컴포넌트 가이드

## 제공되는 StyledComponents
- TooltipRoot: 툴팁 루트 컨테이너
- TooltipTrigger: 툴팁을 표시할 트리거 엘리먼트
- TooltipContent: 툴팁 내용
- TooltipArrow: 툴팁 화살표

## Props
- TooltipRoot:
  placement?: "top" | "right" | "bottom" | "left"
  delay?: number
- TooltipContent:
  $visible?: boolean

## 사용 예시
\`\`\`tsx
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow
} from './Tooltip';

const MyTooltip = () => {
  return (
    <TooltipRoot placement="top" delay={200}>
      <TooltipTrigger>
        호버할 엘리먼트
      </TooltipTrigger>
      <TooltipContent>
        <TooltipArrow />
        툴팁 내용
      </TooltipContent>
    </TooltipRoot>
  );
};
\`\`\`

## 주의사항
1. 포지셔닝 계산 주의
2. 화면 경계 처리
3. 모바일에서는 터치 이벤트 대응
4. 지연 시간 설정 고려
`;

export const POPOVER_GUIDE = `
# Popover 컴포넌트 가이드

## 제공되는 StyledComponents
- PopoverRoot: 팝오버 루트
- PopoverTrigger: 팝오버 트리거
- PopoverContent: 팝오버 컨텐츠
- PopoverClose: 팝오버 닫기 버튼
- PopoverArrow: 팝오버 화살표

## Props
- PopoverRoot:
  placement?: "top" | "right" | "bottom" | "left"
- PopoverContent:
  $visible?: boolean
  $width?: string

## 사용 예시
\`\`\`tsx
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow
} from './Popover';

const MyPopover = () => {
  return (
    <PopoverRoot placement="bottom">
      <PopoverTrigger>
        클릭할 엘리먼트
      </PopoverTrigger>
      <PopoverContent $width="200px">
        <PopoverArrow />
        팝오버 내용
        <PopoverClose>✕</PopoverClose>
      </PopoverContent>
    </PopoverRoot>
  );
};
\`\`\`

## 주의사항
1. 클릭 외부 영역 처리
2. 포지셔닝 자동 조정
3. 접근성 고려
4. z-index 관리
`;

export const DROPDOWN_MENU_GUIDE = `
# DropdownMenu 컴포넌트 가이드

## 제공되는 StyledComponents
- DropdownRoot: 드롭다운 메뉴 루트
- DropdownTrigger: 드롭다운 트리거 버튼
- DropdownContent: 드롭다운 컨텐츠
- DropdownItem: 드롭다운 아이템
- DropdownSeparator: 구분선

## Props
- DropdownRoot:
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end"
- DropdownContent:
  $visible?: boolean
- DropdownItem:
  $disabled?: boolean
  $highlighted?: boolean

## 사용 예시
\`\`\`tsx
import {
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator
} from './DropdownMenu';

const MyDropdown = () => {
  return (
    <DropdownRoot>
      <DropdownTrigger>메뉴 열기</DropdownTrigger>
      <DropdownContent>
        <DropdownItem>메뉴 1</DropdownItem>
        <DropdownItem>메뉴 2</DropdownItem>
        <DropdownSeparator />
        <DropdownItem $disabled>비활성화 메뉴</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  );
};
\`\`\`

## 주의사항
1. 키보드 네비게이션 구현
2. 서브메뉴 지원 시 중첩 구조 고려
3. 클릭 외부 영역 처리
4. 스크롤 시 위치 조정
`;

export const DIALOG_GUIDE = `
# Dialog 컴포넌트 가이드

## 제공되는 StyledComponents
- DialogRoot: 다이얼로그 루트
- DialogTrigger: 다이얼로그 트리거
- DialogContent: 다이얼로그 컨텐츠
- DialogHeader: 헤더 영역
- DialogFooter: 푸터 영역
- DialogClose: 닫기 버튼

## Props
- DialogRoot:
  defaultOpen?: boolean
  modal?: boolean
- DialogContent:
  $size?: "sm" | "md" | "lg"
  $visible?: boolean

## 사용 예시
\`\`\`tsx
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose
} from './Dialog';

const MyDialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger>열기</DialogTrigger>
      <DialogContent $size="md">
        <DialogHeader>
          제목
          <DialogClose>✕</DialogClose>
        </DialogHeader>
        내용
        <DialogFooter>
          <button>확인</button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
};
\`\`\`

## 주의사항
1. 모달/논모달 모드 구분
2. 포커스 트랩 구현
3. 애니메이션 처리
4. WAI-ARIA 규칙 준수
`;

export const ACCORDION_GUIDE = `
# Accordion 컴포넌트 가이드

## 제공되는 StyledComponents
- AccordionRoot: 아코디언 루트
- AccordionItem: 아코디언 아이템
- AccordionTrigger: 펼침/접힘 트리거
- AccordionContent: 컨텐츠 영역
- AccordionIcon: 아이콘

## Props
- AccordionRoot:
  type?: "single" | "multiple"
  defaultValue?: string | string[]
- AccordionItem:
  value: string
- AccordionContent:
  $expanded?: boolean

## 사용 예시
\`\`\`tsx
import {
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionIcon
} from './Accordion';

const MyAccordion = () => {
  return (
    <AccordionRoot type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          섹션 1
          <AccordionIcon />
        </AccordionTrigger>
        <AccordionContent>
          섹션 1 내용
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          섹션 2
          <AccordionIcon />
        </AccordionTrigger>
        <AccordionContent>
          섹션 2 내용
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  );
};
\`\`\`

## 주의사항
1. 단일/다중 확장 모드 구분
2. 애니메이션 성능 최적화
3. 키보드 접근성
4. 중첩 아코디언 지원 시 구조 설계
`;

export const DATEPICKER_GUIDE = `
# DatePicker 컴포넌트 가이드

## 제공되는 StyledComponents
- DatePickerRoot: 데이트피커 루트
- DatePickerTrigger: 데이트피커 트리거
- DatePickerContent: 달력 컨텐츠
- DatePickerHeader: 달력 헤더
- DatePickerGrid: 달력 그리드
- DatePickerCell: 날짜 셀
- DatePickerFooter: 푸터 영역

## Props
- DatePickerRoot:
  defaultValue?: Date
  min?: Date
  max?: Date
- DatePickerCell:
  $selected?: boolean
  $disabled?: boolean
  $today?: boolean
  $inRange?: boolean

## 사용 예시
\`\`\`tsx
import {
  DatePickerRoot,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerHeader,
  DatePickerGrid,
  DatePickerCell,
  DatePickerFooter
} from './DatePicker';

const MyDatePicker = () => {
  return (
    <DatePickerRoot defaultValue={new Date()}>
      <DatePickerTrigger>날짜 선택</DatePickerTrigger>
      <DatePickerContent>
        <DatePickerHeader />
        <DatePickerGrid>
          {/* 날짜 셀들 */}
          <DatePickerCell $today>오늘</DatePickerCell>
        </DatePickerGrid>
        <DatePickerFooter>
          <button>오늘</button>
        </DatePickerFooter>
      </DatePickerContent>
    </DatePickerRoot>
  );
};
\`\`\`

## 주의사항
1. 날짜 계산 로직 구현
2. 지역화(l10n) 지원
3. 키보드 네비게이션
4. 날짜 범위 선택 지원 시 추가 로직 필요
`;

export const COMBOBOX_GUIDE = `
# Combobox 컴포넌트 가이드

## 제공되는 StyledComponents
- ComboboxRoot: 콤보박스 루트
- ComboboxInput: 입력 필드
- ComboboxPopover: 옵션 팝오버
- ComboboxList: 옵션 리스트
- ComboboxOption: 개별 옵션
- ComboboxEmpty: 결과 없음 표시

## Props
- ComboboxRoot:
  defaultValue?: string
  onSelect?: (value: string) => void
- ComboboxInput:
  $error?: boolean
  placeholder?: string
- ComboboxOption:
  value: string
  $selected?: boolean
  $highlighted?: boolean

## 사용 예시
\`\`\`tsx
import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxEmpty
} from './Combobox';

const MyCombobox = () => {
  return (
    <ComboboxRoot onSelect={(value) => console.log(value)}>
      <ComboboxInput placeholder="검색..." />
      <ComboboxPopover>
        <ComboboxList>
          <ComboboxOption value="option1">옵션 1</ComboboxOption>
          <ComboboxOption value="option2">옵션 2</ComboboxOption>
          <ComboboxEmpty>결과 없음</ComboboxEmpty>
        </ComboboxList>
      </ComboboxPopover>
    </ComboboxRoot>
  );
};
\`\`\`

## 주의사항
1. 필터링 로직 구현
2. 비동기 데이터 로딩 처리
3. 키보드 네비게이션
4. 가상 스크롤링 고려 (많은 옵션의 경우)
`;

export const PROGRESS_GUIDE = `
# Progress 컴포넌트 가이드

## 제공되는 StyledComponents
- ProgressRoot: 프로그레스 루트
- ProgressTrack: 프로그레스 트랙
- ProgressBar: 진행 상태 바
- ProgressLabel: 진행률 레이블
- ProgressIndicator: 로딩 인디케이터

## Props
- ProgressRoot:
  value: number
  max?: number
  $size?: "sm" | "md" | "lg"
- ProgressBar:
  $animated?: boolean
  $color?: string
- ProgressIndicator:
  $indeterminate?: boolean

## 사용 예시
\`\`\`tsx
import {
  ProgressRoot,
  ProgressTrack,
  ProgressBar,
  ProgressLabel,
  ProgressIndicator
} from './Progress';

const MyProgress = ({ value }) => {
  return (
    <ProgressRoot value={value} max={100} $size="md">
      <ProgressTrack>
        <ProgressBar $animated />
      </ProgressTrack>
      <ProgressLabel>{value}%</ProgressLabel>
    </ProgressRoot>
  );
};

const LoadingProgress = () => {
  return (
    <ProgressRoot>
      <ProgressTrack>
        <ProgressIndicator $indeterminate />
      </ProgressTrack>
    </ProgressRoot>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 성능 최적화
2. 접근성 속성 설정
3. 불확정 상태 처리
4. 반응형 크기 조정
`;

export const ALERT_DIALOG_GUIDE = `
# AlertDialog 컴포넌트 가이드

## 제공되는 StyledComponents
- AlertDialogRoot: 알럿 다이얼로그 루트
- AlertDialogTrigger: 트리거 버튼
- AlertDialogContent: 컨텐츠 영역
- AlertDialogTitle: 제목
- AlertDialogDescription: 설명
- AlertDialogActions: 액션 버튼 영역
- AlertDialogCancel: 취소 버튼
- AlertDialogAction: 확인 버튼

## Props
- AlertDialogRoot:
  defaultOpen?: boolean
- AlertDialogContent:
  $size?: "sm" | "md" | "lg"
- AlertDialogAction:
  $variant?: "default" | "danger"

## 사용 예시
\`\`\`tsx
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogActions,
  AlertDialogCancel,
  AlertDialogAction
} from './AlertDialog';

const MyAlertDialog = () => {
  return (
    <AlertDialogRoot>
      <AlertDialogTrigger>삭제</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
        <AlertDialogDescription>
          이 작업은 되돌릴 수 없습니다.
        </AlertDialogDescription>
        <AlertDialogActions>
          <AlertDialogCancel>취소</AlertDialogCancel>
          <AlertDialogAction $variant="danger">삭제</AlertDialogAction>
        </AlertDialogActions>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};
\`\`\`

## 주의사항
1. 포커스 트랩 구현 필수
2. ESC 키 이벤트 처리
3. 애니메이션 처리
4. 접근성 속성 설정
`;

export const DRAWER_GUIDE = `
# Drawer 컴포넌트 가이드

## 제공되는 StyledComponents
- DrawerContainer: 드로어 컨테이너
- DrawerOverlay: 배경 오버레이
- DrawerContent: 컨텐츠 영역
- DrawerHeader: 헤더 영역
- DrawerBody: 본문 영역
- DrawerFooter: 푸터 영역
- DrawerCloseButton: 닫기 버튼

## Props
- DrawerContainer:
  isOpen: boolean
  onClose: () => void
  placement?: "left" | "right" | "top" | "bottom"
  size?: "sm" | "md" | "lg"
- DrawerContent:
  $placement: string
  $size: string

## 사용 예시
\`\`\`tsx
import {
  DrawerContainer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton
} from './Drawer';

const MyDrawer = ({ isOpen, onClose }) => {
  return (
    <DrawerContainer
      isOpen={isOpen}
      onClose={onClose}
      placement="right"
      size="md"
    >
      <DrawerOverlay onClick={onClose} />
      <DrawerContent $placement="right" $size="md">
        <DrawerCloseButton onClick={onClose} />
        <DrawerHeader>
          <h2>드로어 제목</h2>
        </DrawerHeader>
        <DrawerBody>
          {/* 드로어 컨텐츠 */}
        </DrawerBody>
        <DrawerFooter>
          <button onClick={onClose}>닫기</button>
        </DrawerFooter>
      </DrawerContent>
    </DrawerContainer>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 처리
2. 포커스 관리
3. 키보드 접근성
4. 스크롤 잠금
`;

export const RESIZABLE_GUIDE = `
# Resizable 컴포넌트 가이드

## 제공되는 StyledComponents
- ResizableRoot: 리사이즈 가능한 컨테이너
- ResizableHandle: 리사이즈 핸들
- ResizablePanel: 리사이즈 패널

## Props
- ResizableRoot:
  direction?: "horizontal" | "vertical"
  minSize?: number
  maxSize?: number
- ResizablePanel:
  defaultSize?: number
  $collapsible?: boolean

## 사용 예시
\`\`\`tsx
import {
  ResizableRoot,
  ResizableHandle,
  ResizablePanel
} from './Resizable';

const MyResizable = () => {
  return (
    <ResizableRoot direction="horizontal">
      <ResizablePanel defaultSize={30}>
        왼쪽 패널
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={70}>
        오른쪽 패널
      </ResizablePanel>
    </ResizableRoot>
  );
};
\`\`\`

## 주의사항
1. 드래그 이벤트 처리
2. 최소/최대 크기 제한
3. 리사이즈 중 성능 최적화
4. 반응형 대응
`;

export const COMMAND_GUIDE = `
# Command 컴포넌트 가이드

## 제공되는 StyledComponents
- CommandRoot: 커맨드 루트
- CommandInput: 검색 입력창
- CommandList: 명령어 리스트
- CommandGroup: 명령어 그룹
- CommandItem: 개별 명령어
- CommandSeparator: 구분선
- CommandShortcut: 단축키 표시

## Props
- CommandRoot:
  filter?: (value: string, search: string) => boolean
- CommandInput:
  placeholder?: string
  $size?: "sm" | "md" | "lg"
- CommandItem:
  $selected?: boolean
  onSelect?: () => void

## 사용 예시
\`\`\`tsx
import {
  CommandRoot,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut
} from './Command';

const MyCommand = () => {
  return (
    <CommandRoot>
      <CommandInput placeholder="명령어 검색..." />
      <CommandList>
        <CommandGroup heading="추천">
          <CommandItem onSelect={() => console.log('선택됨')}>
            새 파일
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="최근">
          <CommandItem>최근 파일</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandRoot>
  );
};
\`\`\`

## 주의사항
1. 검색 로직 최적화
2. 키보드 네비게이션
3. 단축키 처리
4. 필터링 성능
`;

export const CAROUSEL_GUIDE = `
# Carousel 컴포넌트 가이드

## 제공되는 StyledComponents
- CarouselRoot: 캐러셀 루트
- CarouselViewport: 뷰포트 영역
- CarouselSlide: 개별 슬라이드
- CarouselPrevButton: 이전 버튼
- CarouselNextButton: 다음 버튼
- CarouselPagination: 페이지네이션
- CarouselDot: 페이지 도트

## Props
- CarouselRoot:
  defaultIndex?: number
  autoPlay?: boolean
  interval?: number
- CarouselSlide:
  index: number
  $active?: boolean
- CarouselDot:
  $active?: boolean

## 사용 예시
\`\`\`tsx
import {
  CarouselRoot,
  CarouselViewport,
  CarouselSlide,
  CarouselPrevButton,
  CarouselNextButton,
  CarouselPagination,
  CarouselDot
} from './Carousel';

const MyCarousel = () => {
  return (
    <CarouselRoot defaultIndex={0} autoPlay interval={3000}>
      <CarouselViewport>
        <CarouselSlide index={0}>슬라이드 1</CarouselSlide>
        <CarouselSlide index={1}>슬라이드 2</CarouselSlide>
        <CarouselSlide index={2}>슬라이드 3</CarouselSlide>
      </CarouselViewport>
      <CarouselPrevButton>이전</CarouselPrevButton>
      <CarouselNextButton>다음</CarouselNextButton>
      <CarouselPagination>
        <CarouselDot $active />
        <CarouselDot />
        <CarouselDot />
      </CarouselPagination>
    </CarouselRoot>
  );
};
\`\`\`

## 주의사항
1. 터치/스와이프 제스처 지원
2. 자동 재생 타이머 관리
3. 무한 스크롤 구현
4. 반응형 이미지 처리
`;

export const CALENDAR_GUIDE = `
# Calendar 컴포넌트 가이드

## 제공되는 StyledComponents
- CalendarRoot: 캘린더 루트
- CalendarHeader: 헤더 영역
- CalendarGrid: 달력 그리드
- CalendarCell: 날짜 셀
- CalendarWeekHeader: 요일 헤더
- CalendarNavigation: 월 이동 네비게이션
- CalendarFooter: 푸터 영역

## Props
- CalendarRoot:
  defaultDate?: Date
  mode?: "single" | "range" | "multiple"
- CalendarCell:
  date: Date
  $selected?: boolean
  $disabled?: boolean
  $inRange?: boolean
  $today?: boolean

## 사용 예시
\`\`\`tsx
import {
  CalendarRoot,
  CalendarHeader,
  CalendarGrid,
  CalendarCell,
  CalendarWeekHeader,
  CalendarNavigation,
  CalendarFooter
} from './Calendar';

const MyCalendar = () => {
  return (
    <CalendarRoot defaultDate={new Date()} mode="single">
      <CalendarHeader>
        <CalendarNavigation />
      </CalendarHeader>
      <CalendarWeekHeader />
      <CalendarGrid>
        {/* 날짜 셀들 */}
        <CalendarCell 
          date={new Date()} 
          $today 
          $selected
        />
      </CalendarGrid>
      <CalendarFooter>
        <button>오늘</button>
      </CalendarFooter>
    </CalendarRoot>
  );
};
\`\`\`

## 주의사항
1. 날짜 계산 로직
2. 다국어/지역화 지원
3. 키보드 네비게이션
4. 날짜 범위 선택 처리
`;

export const CHART_GUIDE = `
# Chart 컴포넌트 가이드

## 제공되는 StyledComponents
- ChartRoot: 차트 루트
- ChartContainer: 차트 컨테이너
- ChartLegend: 범례
- ChartAxis: 축
- ChartGrid: 그리드
- ChartTooltip: 툴팁
- ChartSeries: 데이터 시리즈

## Props
- ChartRoot:
  type: "line" | "bar" | "pie" | "area"
  data: any[]
  options?: ChartOptions
- ChartSeries:
  $color?: string
  $animated?: boolean

## 사용 예시
\`\`\`tsx
import {
  ChartRoot,
  ChartContainer,
  ChartLegend,
  ChartAxis,
  ChartGrid,
  ChartTooltip,
  ChartSeries
} from './Chart';

const MyChart = () => {
  const data = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 200 },
    { month: 'Mar', value: 150 }
  ];

  return (
    <ChartRoot 
      type="line" 
      data={data}
      options={{
        responsive: true,
        animations: true
      }}
    >
      <ChartContainer>
        <ChartGrid />
        <ChartAxis />
        <ChartSeries $animated />
      </ChartContainer>
      <ChartLegend />
      <ChartTooltip />
    </ChartRoot>
  );
};
\`\`\`

## 주의사항
1. 데이터 포맷팅
2. 반응형 차트 구현
3. 애니메이션 성능
4. 접근성 고려
`;

export const COLLAPSIBLE_GUIDE = `
# Collapsible 컴포넌트 가이드

## 제공되는 StyledComponents
- CollapsibleRoot: 접을 수 있는 컨테이너
- CollapsibleTrigger: 토글 트리거
- CollapsibleContent: 접히는 컨텐츠
- CollapsibleIcon: 상태 아이콘

## Props
- CollapsibleRoot:
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
- CollapsibleContent:
  $expanded?: boolean
- CollapsibleIcon:
  $expanded?: boolean

## 사용 예시
\`\`\`tsx
import {
  CollapsibleRoot,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleIcon
} from './Collapsible';

const MyCollapsible = () => {
  return (
    <CollapsibleRoot defaultOpen={false}>
      <CollapsibleTrigger>
        섹션 제목
        <CollapsibleIcon />
      </CollapsibleTrigger>
      <CollapsibleContent>
        접히는 컨텐츠 내용
      </CollapsibleContent>
    </CollapsibleRoot>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 성능 최적화
2. 높이 계산 로직
3. 중첩 사용 시 구조
4. 접근성 속성 설정
`;

export const CONTEXT_MENU_GUIDE = `
# ContextMenu 컴포넌트 가이드

## 제공되는 StyledComponents
- ContextMenuRoot: 컨텍스트 메뉴 루트
- ContextMenuTrigger: 우클릭 영역
- ContextMenuContent: 메뉴 컨텐츠
- ContextMenuItem: 메뉴 아이템
- ContextMenuSeparator: 구분선
- ContextMenuSub: 서브메뉴
- ContextMenuRadioGroup: 라디오 그룹

## Props
- ContextMenuRoot:
  onOpenChange?: (open: boolean) => void
- ContextMenuContent:
  $visible?: boolean
- ContextMenuItem:
  $disabled?: boolean
  $highlighted?: boolean
- ContextMenuRadioGroup:
  value?: string
  onValueChange?: (value: string) => void

## 사용 예시
\`\`\`tsx
import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuRadioGroup
} from './ContextMenu';

const MyContextMenu = () => {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger>
        우클릭할 영역
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>새로 만들기</ContextMenuItem>
        <ContextMenuItem>복사</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuItem>더 보기</ContextMenuItem>
        </ContextMenuSub>
        <ContextMenuRadioGroup value="view">
          <ContextMenuItem value="list">리스트 뷰</ContextMenuItem>
          <ContextMenuItem value="grid">그리드 뷰</ContextMenuItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenuRoot>
  );
};
\`\`\`

## 주의사항
1. 우클릭 이벤트 처리
2. 포지셔닝 계산
3. 서브메뉴 처리
4. 키보드 네비게이션
`;

export const LOGIN_GUIDE = `
# Login 컴포넌트 가이드

## 제공되는 StyledComponents
- LoginRoot: 로그인 폼 컨테이너
- LoginHeader: 헤더 영역
- LoginForm: 폼 엘리먼트
- LoginInput: 입력 필드
- LoginButton: 로그인 버튼
- LoginDivider: 구분선
- LoginSocialButton: 소셜 로그인 버튼

## Props
- LoginRoot:
  onSubmit?: (data: LoginData) => void
- LoginInput:
  $error?: boolean
  $size?: "sm" | "md" | "lg"
- LoginButton:
  $loading?: boolean
  $variant?: "primary" | "secondary"
- LoginSocialButton:
  provider: "google" | "github" | "facebook"

## 사용 예시
\`\`\`tsx
import {
  LoginRoot,
  LoginHeader,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginDivider,
  LoginSocialButton
} from './Login';

const MyLogin = () => {
  return (
    <LoginRoot onSubmit={handleSubmit}>
      <LoginHeader>로그인</LoginHeader>
      <LoginForm>
        <LoginInput 
          type="email" 
          placeholder="이메일"
          $size="md"
        />
        <LoginInput 
          type="password" 
          placeholder="비밀번호"
          $size="md"
        />
        <LoginButton $variant="primary">
          로그인
        </LoginButton>
      </LoginForm>
      <LoginDivider>또는</LoginDivider>
      <LoginSocialButton provider="google">
        Google로 계속하기
      </LoginSocialButton>
    </LoginRoot>
  );
};
\`\`\`

## 주의사항
1. 폼 유효성 검사
2. 에러 상태 처리
3. 소셜 로그인 연동
4. 보안 고려사항
`;

export const HEADER_GUIDE = `
# Header 컴포넌트 가이드

## 제공되는 StyledComponents
- HeaderContainer: 헤더 컨테이너
- HeaderContent: 컨텐츠 영역
- HeaderLogo: 로고 영역
- HeaderNav: 네비게이션
- HeaderActions: 우측 액션 영역
- HeaderMobileMenu: 모바일 메뉴

## Props
- HeaderContainer:
  $fixed?: boolean
  $transparent?: boolean
  $variant?: "light" | "dark"
- HeaderNav:
  $collapsed?: boolean
  $direction?: "horizontal" | "vertical"

## 사용 예시
\`\`\`tsx
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  HeaderNav,
  HeaderActions,
  HeaderMobileMenu
} from './Header';

const MyHeader = () => {
  return (
    <HeaderContainer $fixed $variant="light">
      <HeaderContent>
        <HeaderLogo>
          <img src="/logo.png" alt="로고" />
        </HeaderLogo>
        <HeaderNav $direction="horizontal">
          <a href="/">홈</a>
          <a href="/products">제품</a>
          <a href="/about">소개</a>
        </HeaderNav>
        <HeaderActions>
          <button>로그인</button>
        </HeaderActions>
        <HeaderMobileMenu>
          {/* 모바일 메뉴 내용 */}
        </HeaderMobileMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};
\`\`\`

## 주의사항
1. 반응형 디자인
2. 스크롤 이벤트 처리
3. 모바일 메뉴 구현
4. 투명도 처리
`;

export const FOOTER_GUIDE = `
# Footer 컴포넌트 가이드

## 제공되는 StyledComponents
- FooterContainer: 푸터 컨테이너
- FooterContent: 컨텐츠 영역
- FooterLogo: 로고 영역
- FooterLinks: 링크 목록
- FooterCopyright: 저작권 정보
- FooterSocial: 소셜 미디어 링크

## Props
- FooterContainer:
  $variant?: "simple" | "complex"
  $sticky?: boolean
- FooterContent:
  $maxWidth?: string
  $padding?: string

## 사용 예시
\`\`\`tsx
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterCopyright,
  FooterSocial
} from './Footer';

const MyFooter = () => {
  return (
    <FooterContainer $variant="complex">
      <FooterContent $maxWidth="1200px">
        <FooterLogo>
          <img src="/logo.png" alt="로고" />
        </FooterLogo>
        <FooterLinks>
          <a href="/about">회사 소개</a>
          <a href="/terms">이용약관</a>
          <a href="/privacy">개인정보처리방침</a>
        </FooterLinks>
        <FooterSocial>
          {/* 소셜 미디어 링크 */}
        </FooterSocial>
        <FooterCopyright>
          © 2024 Company Name. All rights reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};
\`\`\`

## 주의사항
1. 반응형 레이아웃 구성
2. 링크 접근성
3. 스티키 푸터 설정
4. 컨텐츠 정렬
`;

export const SPINNER_GUIDE = `
# Spinner 컴포넌트 가이드

## 제공되는 StyledComponents
- SpinnerContainer: 스피너 컨테이너
- SpinnerCircle: 회전하는 원형 요소
- SpinnerText: 로딩 텍스트

## Props
- SpinnerContainer:
  size?: "sm" | "md" | "lg"
  $color?: string
  $centered?: boolean
- SpinnerCircle:
  $speed?: "slow" | "normal" | "fast"
  $thickness?: number

## 사용 예시
\`\`\`tsx
import { SpinnerContainer, SpinnerCircle, SpinnerText } from './Spinner';

const LoadingSpinner = () => {
  return (
    <SpinnerContainer size="md" $centered>
      <SpinnerCircle $speed="normal" $thickness={2} />
      <SpinnerText>로딩중...</SpinnerText>
    </SpinnerContainer>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 성능 최적화
2. 접근성 고려 (aria-label 등)
3. 반응형 크기 조정
4. 텍스트 표시 여부 선택적 적용
`;

export const TEXTAREA_GUIDE = `
# Textarea 컴포넌트 가이드

## 제공되는 StyledComponents
- TextareaRoot: 텍스트영역 컨테이너
- TextareaField: 실제 textarea 요소
- TextareaLabel: 레이블
- TextareaCounter: 글자 수 카운터
- TextareaError: 에러 메시지

## Props
- TextareaRoot:
  $error?: boolean
  $disabled?: boolean
- TextareaField:
  $resize?: "none" | "vertical" | "horizontal" | "both"
  $minRows?: number
  $maxRows?: number
- TextareaCounter:
  maxLength?: number
  current: number

## 사용 예시
\`\`\`tsx
import {
  TextareaRoot,
  TextareaField,
  TextareaLabel,
  TextareaCounter,
  TextareaError
} from './Textarea';

const MyTextarea = () => {
  const [value, setValue] = useState('');

  return (
    <TextareaRoot>
      <TextareaLabel>메시지</TextareaLabel>
      <TextareaField
        $resize="vertical"
        $minRows={3}
        $maxRows={10}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={1000}
      />
      <TextareaCounter
        current={value.length}
        maxLength={1000}
      />
      {error && (
        <TextareaError>{error}</TextareaError>
      )}
    </TextareaRoot>
  );
};
\`\`\`

## 주의사항
1. 자동 높이 조절
2. 글자 수 제한
3. 포커스 관리
4. 유효성 검사
`;

export const SKELETON_GUIDE = `
# Skeleton 컴포넌트 가이드

## 제공되는 StyledComponents
- SkeletonRoot: 스켈레톤 컨테이너
- SkeletonText: 텍스트 스켈레톤
- SkeletonCircle: 원형 스켈레톤
- SkeletonRect: 사각형 스켈레톤
- SkeletonImage: 이미지 스켈레톤

## Props
- SkeletonRoot:
  $animate?: boolean
  $speed?: number
- SkeletonText:
  $lines?: number
  $spacing?: number
- SkeletonRect:
  $width?: string | number
  $height?: string | number
  $radius?: string | number

## 사용 예시
\`\`\`tsx
import {
  SkeletonRoot,
  SkeletonText,
  SkeletonCircle,
  SkeletonRect,
  SkeletonImage
} from './Skeleton';

const CardSkeleton = () => {
  return (
    <SkeletonRoot $animate $speed={1.5}>
      <SkeletonImage $width="100%" $height="200px" />
      <SkeletonText $lines={2} $spacing={8} />
      <SkeletonRect $width="60%" $height="24px" />
    </SkeletonRoot>
  );
};

const ProfileSkeleton = () => {
  return (
    <SkeletonRoot>
      <SkeletonCircle $width="48px" $height="48px" />
      <SkeletonText $lines={1} />
    </SkeletonRoot>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 성능
2. 실제 컨텐츠와 크기 일치
3. 접근성 고려
4. 로딩 상태 관리
`;

export const TOGGLE_GROUP_GUIDE = `
# ToggleGroup 컴포넌트 가이드

## 제공되는 StyledComponents
- ToggleGroupRoot: 토글 그룹 컨테이너
- ToggleGroupItem: 개별 토글 아이템
- ToggleGroupLabel: 그룹 레이블
- ToggleGroupSeparator: 구분선

## Props
- ToggleGroupRoot:
  type: "single" | "multiple"
  defaultValue?: string | string[]
  orientation?: "horizontal" | "vertical"
- ToggleGroupItem:
  value: string
  $selected?: boolean
  $disabled?: boolean

## 사용 예시
\`\`\`tsx
import {
  ToggleGroupRoot,
  ToggleGroupItem,
  ToggleGroupLabel,
  ToggleGroupSeparator
} from './ToggleGroup';

const MyToggleGroup = () => {
  return (
    <>
      <ToggleGroupLabel>정렬</ToggleGroupLabel>
      <ToggleGroupRoot 
        type="single" 
        defaultValue="center"
        orientation="horizontal"
      >
        <ToggleGroupItem value="left">
          왼쪽
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
          가운데
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          오른쪽
        </ToggleGroupItem>
      </ToggleGroupRoot>
    </>
  );
};
\`\`\`

## 주의사항
1. 상태 관리
2. 키보드 네비게이션
3. 접근성 속성
4. 반응형 레이아웃
`;

export const SELECT_GUIDE = `
# Select 컴포넌트 가이드

## 제공되는 StyledComponents
- SelectRoot: 셀렉트 컨테이너
- SelectTrigger: 트리거 버튼
- SelectValue: 선택된 값 표시
- SelectIcon: 드롭다운 아이콘
- SelectContent: 옵션 컨텐츠
- SelectViewport: 옵션 뷰포트
- SelectItem: 개별 옵션
- SelectGroup: 옵션 그룹
- SelectLabel: 그룹 레이블
- SelectSeparator: 구분선

## Props
- SelectRoot:
  defaultValue?: string
  onSelect?: (value: string) => void
- SelectTrigger:
  $error?: boolean
  $disabled?: boolean
- SelectContent:
  $position?: "popper" | "item-aligned"
- SelectItem:
  value: string
  $disabled?: boolean
  $highlighted?: boolean

## 사용 예시
\`\`\`tsx
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator
} from './Select';

const MySelect = () => {
  return (
    <SelectRoot defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="과일 선택" />
        <SelectIcon />
      </SelectTrigger>
      <SelectContent>
        <SelectViewport>
          <SelectGroup>
            <SelectLabel>과일</SelectLabel>
            <SelectItem value="apple">사과</SelectItem>
            <SelectItem value="banana">바나나</SelectItem>
            <SelectItem value="orange">오렌지</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>채소</SelectLabel>
            <SelectItem value="carrot">당근</SelectItem>
            <SelectItem value="potato">감자</SelectItem>
          </SelectGroup>
        </SelectViewport>
      </SelectContent>
    </SelectRoot>
  );
};
\`\`\`

## 주의사항
1. 키보드 네비게이션
2. 포지셔닝 계산
3. 가상 스크롤링
4. 접근성 속성
`;

export const NAVIGATION_GUIDE = `
# Navigation 컴포넌트 가이드

## 제공되는 StyledComponents
- NavigationRoot: 네비게이션 컨테이너
- NavigationList: 네비게이션 리스트
- NavigationItem: 네비게이션 아이템
- NavigationLink: 링크 요소
- NavigationIcon: 아이콘
- NavigationText: 텍스트
- NavigationBadge: 뱃지

## Props
- NavigationRoot:
  variant?: "vertical" | "horizontal"
  $collapsed?: boolean
- NavigationItem:
  $active?: boolean
  $disabled?: boolean
- NavigationBadge:
  $variant?: "primary" | "secondary" | "danger"

## 사용 예시
\`\`\`tsx
import {
  NavigationRoot,
  NavigationList,
  NavigationItem,
  NavigationLink,
  NavigationIcon,
  NavigationText,
  NavigationBadge
} from './Navigation';

const MyNavigation = () => {
  return (
    <NavigationRoot variant="vertical">
      <NavigationList>
        <NavigationItem $active>
          <NavigationLink href="/dashboard">
            <NavigationIcon name="home" />
            <NavigationText>대시보드</NavigationText>
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href="/messages">
            <NavigationIcon name="message" />
            <NavigationText>메시지</NavigationText>
            <NavigationBadge $variant="primary">
              3
            </NavigationBadge>
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationRoot>
  );
};
\`\`\`

## 주의사항
1. 라우팅 통합
2. 활성 상태 관리
3. 반응형 처리
4. 중첩 메뉴 구현
`;

export const KEYVALUE_GUIDE = `
# KeyValue 컴포넌트 가이드

## 제공되는 StyledComponents
- KeyValueRoot: 키-값 컨테이너
- KeyValueRow: 행 컨테이너
- KeyValueKey: 키 레이블
- KeyValueValue: 값 컨텐츠
- KeyValueDivider: 구분선
- KeyValueGroup: 그룹 컨테이너

## Props
- KeyValueRoot:
  layout?: "horizontal" | "vertical"
  $spacing?: number
- KeyValueRow:
  $highlighted?: boolean
- KeyValueKey:
  $width?: string
  $align?: "left" | "right"
- KeyValueValue:
  $type?: "text" | "number" | "date" | "custom"

## 사용 예시
\`\`\`tsx
import {
  KeyValueRoot,
  KeyValueRow,
  KeyValueKey,
  KeyValueValue,
  KeyValueDivider,
  KeyValueGroup
} from './KeyValue';

const MyKeyValue = () => {
  return (
    <KeyValueRoot layout="horizontal" $spacing={16}>
      <KeyValueGroup>
        <KeyValueRow>
          <KeyValueKey $width="120px">이름</KeyValueKey>
          <KeyValueValue>홍길동</KeyValueValue>
        </KeyValueRow>
        <KeyValueRow>
          <KeyValueKey $width="120px">이메일</KeyValueKey>
          <KeyValueValue>hong@example.com</KeyValueValue>
        </KeyValueRow>
      </KeyValueGroup>
      <KeyValueDivider />
      <KeyValueGroup>
        <KeyValueRow $highlighted>
          <KeyValueKey $width="120px">가입일</KeyValueKey>
          <KeyValueValue $type="date">
            2024-01-01
          </KeyValueValue>
        </KeyValueRow>
      </KeyValueGroup>
    </KeyValueRoot>
  );
};
\`\`\`

## 주의사항
1. 레이아웃 정렬
2. 반응형 처리
3. 데이터 포맷팅
4. 접근성 고려
`;

export const INPUT_OTP_GUIDE = `
# InputOTP 컴포넌트 가이드

## 제공되는 StyledComponents
- OTPRoot: OTP 입력 컨테이너
- OTPInput: 개별 OTP 입력 필드
- OTPSeparator: 구분자
- OTPLabel: 레이블
- OTPError: 에러 메시지
- OTPHint: 힌트 텍스트

## Props
- OTPRoot:
  length?: number
  defaultValue?: string
  onComplete?: (value: string) => void
- OTPInput:
  $error?: boolean
  $filled?: boolean
  $focused?: boolean
- OTPSeparator:
  $variant?: "dash" | "dot" | "space"

## 사용 예시
\`\`\`tsx
import {
  OTPRoot,
  OTPInput,
  OTPSeparator,
  OTPLabel,
  OTPError,
  OTPHint
} from './InputOTP';

const MyOTPInput = () => {
  const handleComplete = (value: string) => {
    console.log('OTP 입력 완료:', value);
  };

  return (
    <OTPRoot length={6} onComplete={handleComplete}>
      <OTPLabel>인증 코드 입력</OTPLabel>
      <div style={{ display: 'flex', gap: '8px' }}>
        <OTPInput />
        <OTPSeparator $variant="dash" />
        <OTPInput />
        <OTPInput />
        <OTPSeparator $variant="dash" />
        <OTPInput />
        <OTPInput />
        <OTPInput />
      </div>
      <OTPHint>이메일로 전송된 6자리 코드를 입력하세요</OTPHint>
      <OTPError>잘못된 인증 코드입니다</OTPError>
    </OTPRoot>
  );
};
\`\`\`

## 주의사항
1. 자동 포커스 이동
2. 붙여넣기 처리
3. 백스페이스 처리
4. 모바일 키보드 최적화
`;

export const MENUBAR_GUIDE = `
# Menubar 컴포넌트 가이드

## 제공되는 StyledComponents
- MenubarRoot: 메뉴바 컨테이너
- MenubarTrigger: 메뉴 트리거
- MenubarContent: 메뉴 컨텐츠
- MenubarItem: 메뉴 아이템
- MenubarSeparator: 구분선
- MenubarShortcut: 단축키 표시
- MenubarGroup: 메뉴 그룹
- MenubarSub: 서브메뉴

## Props
- MenubarRoot:
  defaultValue?: string
  orientation?: "horizontal" | "vertical"
- MenubarTrigger:
  $active?: boolean
  $disabled?: boolean
- MenubarItem:
  $highlighted?: boolean
  onSelect?: () => void
- MenubarShortcut:
  $platform?: "mac" | "windows"

## 사용 예시
\`\`\`tsx
import {
  MenubarRoot,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarGroup,
  MenubarSub
} from './Menubar';

const MyMenubar = () => {
  return (
    <MenubarRoot orientation="horizontal">
      <MenubarTrigger>
        파일
        <MenubarContent>
          <MenubarItem onSelect={() => console.log('새로 만들기')}>
            새로 만들기
            <MenubarShortcut $platform="mac">⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            열기
            <MenubarShortcut $platform="mac">⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarTrigger>최근 파일</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>문서1.txt</MenubarItem>
              <MenubarItem>문서2.txt</MenubarItem>
            </MenubarContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarTrigger>
    </MenubarRoot>
  );
};
\`\`\`

## 주의사항
1. 키보드 네비게이션
2. 서브메뉴 포지셔닝
3. 단축키 처리
4. 운영체제별 대응
`;

export const RESIZABLE_PANEL_GUIDE = `
# ResizablePanel 컴포넌트 가이드

## 제공되는 StyledComponents
- ResizablePanelRoot: 리사이즈 패널 컨테이너
- ResizablePanelGroup: 패널 그룹
- ResizableHandle: 리사이즈 핸들
- ResizablePanel: 개별 패널
- ResizablePanelContent: 패널 컨텐츠

## Props
- ResizablePanelRoot:
  direction?: "horizontal" | "vertical"
  defaultSizes?: number[]
- ResizablePanel:
  minSize?: number
  maxSize?: number
  $collapsed?: boolean
- ResizableHandle:
  $hidden?: boolean
  $disabled?: boolean

## 사용 예시
\`\`\`tsx
import {
  ResizablePanelRoot,
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelContent
} from './ResizablePanel';

const MyResizablePanel = () => {
  return (
    <ResizablePanelRoot 
      direction="horizontal"
      defaultSizes={[25, 50, 25]}
    >
      <ResizablePanelGroup>
        <ResizablePanel minSize={20} maxSize={40}>
          <ResizablePanelContent>
            왼쪽 패널
          </ResizablePanelContent>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ResizablePanelContent>
            중앙 패널
          </ResizablePanelContent>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ResizablePanelContent>
            오른쪽 패널
          </ResizablePanelContent>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ResizablePanelRoot>
  );
};
\`\`\`

## 주의사항
1. 크기 계산 로직
2. 드래그 이벤트 처리
3. 최소/최대 크기 제한
4. 반응형 레이아웃
`;

export const LABEL_GUIDE = `
# Label 컴포넌트 가이드

## 제공되는 StyledComponents
- LabelRoot: 레이블 컨테이너
- LabelText: 레이블 텍스트
- LabelRequired: 필수 표시
- LabelOptional: 선택 표시
- LabelHint: 힌트 텍스트

## Props
- LabelRoot:
  htmlFor?: string
  $error?: boolean
  $disabled?: boolean
- LabelRequired:
  $color?: string
- LabelHint:
  $variant?: "info" | "warning"

## 사용 예시
\`\`\`tsx
import {
  LabelRoot,
  LabelText,
  LabelRequired,
  LabelOptional,
  LabelHint
} from './Label';

const MyLabel = () => {
  return (
    <>
      <LabelRoot htmlFor="username">
        <LabelText>사용자 이름</LabelText>
        <LabelRequired>*</LabelRequired>
        <LabelHint $variant="info">
          영문, 숫자 조합 2-10자
        </LabelHint>
      </LabelRoot>
      <input id="username" type="text" />
      
      <LabelRoot htmlFor="bio">
        <LabelText>자기소개</LabelText>
        <LabelOptional>(선택)</LabelOptional>
      </LabelRoot>
      <textarea id="bio" />
    </>
  );
};
\`\`\`

## 주의사항
1. htmlFor 속성 연결
2. 접근성 속성 설정
3. 에러 상태 처리
4. 레이아웃 정렬
`;

export const SIGNUP_GUIDE = `
# Signup 컴포넌트 가이드

## 제공되는 StyledComponents
- SignupRoot: 회원가입 폼 컨테이너
- SignupHeader: 헤더 영역
- SignupForm: 폼 엘리먼트
- SignupInput: 입력 필드
- SignupButton: 버튼
- SignupDivider: 구분선
- SignupSocialButton: 소셜 회원가입 버튼
- SignupError: 에러 메시지
- SignupSuccess: 성공 메시지

## Props
- SignupRoot:
  onSubmit?: (data: SignupData) => void
  redirectUrl?: string
- SignupInput:
  $error?: boolean
  $validated?: boolean
- SignupButton:
  $loading?: boolean
  $disabled?: boolean
- SignupSocialButton:
  provider: "google" | "github" | "facebook"

## 사용 예시
\`\`\`tsx
import {
  SignupRoot,
  SignupHeader,
  SignupForm,
  SignupInput,
  SignupButton,
  SignupDivider,
  SignupSocialButton,
  SignupError,
  SignupSuccess
} from './Signup';

const MySignup = () => {
  const handleSubmit = async (data: SignupData) => {
    try {
      await signupUser(data);
      // 성공 처리
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <SignupRoot onSubmit={handleSubmit} redirectUrl="/dashboard">
      <SignupHeader>회원가입</SignupHeader>
      <SignupForm>
        <SignupInput
          type="email"
          placeholder="이메일"
          required
        />
        <SignupInput
          type="password"
          placeholder="비밀번호"
          required
        />
        <SignupInput
          type="password"
          placeholder="비밀번호 확인"
          required
        />
        <SignupButton>가입하기</SignupButton>
      </SignupForm>
      <SignupDivider>또는</SignupDivider>
      <SignupSocialButton provider="google">
        Google로 가입하기
      </SignupSocialButton>
    </SignupRoot>
  );
};
\`\`\`

## 주의사항
1. 폼 유효성 검사
2. 비밀번호 확인 로직
3. 소셜 로그인 연동
4. 보안 처리
`;

export const LOGOUT_GUIDE = `
# Logout 컴포넌트 가이드

## 제공되는 StyledComponents
- LogoutRoot: 로그아웃 컨테이너
- LogoutButton: 로그아웃 버튼
- LogoutDialog: 확인 다이얼로그
- LogoutDialogContent: 다이얼로그 내용
- LogoutDialogActions: 다이얼로그 액션

## Props
- LogoutRoot:
  onLogout?: () => void
  redirectUrl?: string
- LogoutButton:
  $variant?: "text" | "outlined" | "contained"
  $loading?: boolean
- LogoutDialog:
  $open?: boolean
  onClose?: () => void

## 사용 예시
\`\`\`tsx
import {
  LogoutRoot,
  LogoutButton,
  LogoutDialog,
  LogoutDialogContent,
  LogoutDialogActions
} from './Logout';

const MyLogout = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      // 로그아웃 후 리다이렉트
    } catch (error) {
      // 에러 처리
    }
  };

  return (
    <LogoutRoot onLogout={handleLogout} redirectUrl="/login">
      <LogoutButton 
        $variant="outlined"
        onClick={() => setShowDialog(true)}
      >
        로그아웃
      </LogoutButton>
      
      <LogoutDialog $open={showDialog} onClose={() => setShowDialog(false)}>
        <LogoutDialogContent>
          정말 로그아웃 하시겠습니까?
        </LogoutDialogContent>
        <LogoutDialogActions>
          <button onClick={() => setShowDialog(false)}>취소</button>
          <button onClick={handleLogout}>확인</button>
        </LogoutDialogActions>
      </LogoutDialog>
    </LogoutRoot>
  );
};
\`\`\`

## 주의사항
1. 세션/토큰 처리
2. 리다이렉트 처리
3. 에러 핸들링
4. 사용자 확인 절차
`;

export const SCROLL_AREA_GUIDE = `
# ScrollArea 컴포넌트 가이드

## 제공되는 StyledComponents
- ScrollAreaRoot: 스크롤 영역 컨테이너
- ScrollAreaViewport: 뷰포트
- ScrollAreaScrollbar: 스크롤바
- ScrollAreaThumb: 스크롤바 썸
- ScrollAreaCorner: 스크롤바 코너

## Props
- ScrollAreaRoot:
  type?: "auto" | "always" | "scroll" | "hover"
  scrollHideDelay?: number
- ScrollAreaViewport:
  $smooth?: boolean
- ScrollAreaScrollbar:
  orientation?: "vertical" | "horizontal"
  $visible?: boolean

## 사용 예시
\`\`\`tsx
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from './ScrollArea';

const MyScrollArea = () => {
  return (
    <ScrollAreaRoot type="hover" scrollHideDelay={600}>
      <ScrollAreaViewport $smooth>
        {/* 스크롤될 컨텐츠 */}
        <div style={{ padding: '20px' }}>
          <h3>긴 컨텐츠</h3>
          <p>스크롤되는 내용...</p>
        </div>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};
\`\`\`

## 주의사항
1. 스크롤바 스타일링
2. 성능 최적화
3. 터치 디바이스 대응
4. 접근성 고려
`;

export const PROGRESS_BAR_GUIDE = `
# ProgressBar 컴포넌트 가이드

## 제공되는 StyledComponents
- ProgressRoot: 프로그레스바 컨테이너
- ProgressTrack: 트랙
- ProgressBar: 진행 상태 바
- ProgressLabel: 레이블
- ProgressValue: 수치 표시
- ProgressIndicator: 로딩 인디케이터

## Props
- ProgressRoot:
  value: number
  max?: number
  $size?: "sm" | "md" | "lg"
- ProgressBar:
  $variant?: "determinate" | "indeterminate"
  $color?: string
  $animated?: boolean
- ProgressValue:
  $showPercentage?: boolean

## 사용 예시
\`\`\`tsx
import {
  ProgressRoot,
  ProgressTrack,
  ProgressBar,
  ProgressLabel,
  ProgressValue,
  ProgressIndicator
} from './ProgressBar';

const MyProgressBar = ({ value, max = 100 }) => {
  return (
    <ProgressRoot value={value} max={max} $size="md">
      <ProgressLabel>진행 상태</ProgressLabel>
      <ProgressTrack>
        <ProgressBar 
          $variant="determinate"
          $animated
        />
      </ProgressTrack>
      <ProgressValue $showPercentage>
        {value}
      </ProgressValue>
    </ProgressRoot>
  );
};

const LoadingProgress = () => {
  return (
    <ProgressRoot value={undefined}>
      <ProgressTrack>
        <ProgressBar $variant="indeterminate" />
      </ProgressTrack>
      <ProgressIndicator />
    </ProgressRoot>
  );
};
\`\`\`

## 주의사항
1. 애니메이션 성능
2. 접근성 속성
3. 상태 관리
4. 반응형 처리
`;

export const DATA_TABLE_GUIDE = `
# DataTable 컴포넌트 가이드

## 제공되는 StyledComponents
- DataTableRoot: 테이블 컨테이너
- DataTableHeader: 헤더 영역
- DataTableBody: 본문 영역
- DataTableRow: 행
- DataTableCell: 셀
- DataTablePagination: 페이지네이션
- DataTableSorter: 정렬 컨트롤
- DataTableFilter: 필터 컨트롤
- DataTableEmpty: 빈 상태 표시

## Props
- DataTableRoot:
  data: any[]
  columns: ColumnDef[]
  $loading?: boolean
- DataTableHeader:
  $sticky?: boolean
  $resizable?: boolean
- DataTableRow:
  $selected?: boolean
  $hoverable?: boolean
- DataTableCell:
  $align?: "left" | "center" | "right"
  $ellipsis?: boolean

## 사용 예시
\`\`\`tsx
import {
  DataTableRoot,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableCell,
  DataTablePagination,
  DataTableSorter,
  DataTableFilter,
  DataTableEmpty
} from './DataTable';

const MyDataTable = () => {
  const columns = [
    { 
      id: 'name',
      header: '이름',
      accessorKey: 'name',
      sortable: true
    },
    {
      id: 'age',
      header: '나이',
      accessorKey: 'age',
      sortable: true
    }
  ];

  const data = [
    { name: '홍길동', age: 20 },
    { name: '김철수', age: 25 }
  ];

  return (
    <DataTableRoot data={data} columns={columns}>
      <DataTableHeader $sticky $resizable>
        <DataTableRow>
          {columns.map(column => (
            <DataTableCell key={column.id}>
              {column.header}
              {column.sortable && (
                <DataTableSorter column={column} />
              )}
            </DataTableCell>
          ))}
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody>
        {data.map((row, index) => (
          <DataTableRow key={index} $hoverable>
            {columns.map(column => (
              <DataTableCell key={column.id}>
                {row[column.accessorKey]}
              </DataTableCell>
            ))}
          </DataTableRow>
        ))}
      </DataTableBody>
      <DataTablePagination />
      {data.length === 0 && (
        <DataTableEmpty>데이터가 없습니다</DataTableEmpty>
      )}
    </DataTableRoot>
  );
};
\`\`\`

## 주의사항
1. 데이터 정렬/필터링
2. 페이지네이션 처리
3. 가상 스크롤링
4. 반응형 레이아웃
`;
