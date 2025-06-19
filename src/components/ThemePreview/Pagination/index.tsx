import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  StyledPagination,
  StyledContent,
  StyledItem,
  StyledLink,
  StyledPrevious,
  StyledNext,
} from "@/components/complex/Pagination";

export const PaginationPreview: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>기본 페이지네이션</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <h2 style={{ marginTop: "2rem" }}>커스텀 스타일 페이지네이션</h2>
      <StyledPagination>
        <StyledContent>
          <StyledItem>
            <StyledPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) setCurrentPage(currentPage - 1);
              }}
              $disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
              이전
            </StyledPrevious>
          </StyledItem>

          {[...Array(5)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <StyledItem key={pageNum}>
                <StyledLink
                  href="#"
                  $isActive={pageNum === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(pageNum);
                  }}
                >
                  {pageNum}
                </StyledLink>
              </StyledItem>
            );
          })}

          <StyledItem>
            <StyledNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
              }}
              $disabled={currentPage === totalPages}
            >
              다음
              <ChevronRight size={16} />
            </StyledNext>
          </StyledItem>
        </StyledContent>
      </StyledPagination>
    </div>
  );
};
