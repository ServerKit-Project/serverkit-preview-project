import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SortButton,
  PaginationContainer,
  PageInfo,
  PageButton,
  StyledTableRow,
} from "@/components/complex/DataTable";
import {
  TableRoot,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/primitive/Table/Table";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const DataTablePreview = () => {
  const [sortColumn, setSortColumn] = useState<keyof User | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const itemsPerPage = 5;

  const users: User[] = [
    {
      id: 1,
      name: "김철수",
      email: "kim@example.com",
      role: "관리자",
      status: "활성",
    },
    {
      id: 2,
      name: "이영희",
      email: "lee@example.com",
      role: "사용자",
      status: "활성",
    },
    {
      id: 3,
      name: "박지민",
      email: "park@example.com",
      role: "편집자",
      status: "비활성",
    },
    {
      id: 4,
      name: "정민수",
      email: "jung@example.com",
      role: "사용자",
      status: "활성",
    },
    {
      id: 5,
      name: "한소희",
      email: "han@example.com",
      role: "관리자",
      status: "활성",
    },
    {
      id: 6,
      name: "오승준",
      email: "oh@example.com",
      role: "편집자",
      status: "비활성",
    },
    {
      id: 7,
      name: "최유진",
      email: "choi@example.com",
      role: "사용자",
      status: "활성",
    },
  ];

  const handleSort = (column: keyof User) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortColumn || !sortDirection) return 0;

    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const toggleRowSelection = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div>
      <TableRoot>
        <TableHead>
          <tr>
            <TableCell>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedRows(paginatedUsers.map((user) => user.id));
                  } else {
                    setSelectedRows([]);
                  }
                }}
                checked={
                  paginatedUsers.length > 0 &&
                  paginatedUsers.every((user) => selectedRows.includes(user.id))
                }
              />
            </TableCell>
            <TableCell>
              <SortButton
                onClick={() => handleSort("name")}
                $direction={
                  sortColumn === "name"
                    ? (sortDirection as "asc" | "desc")
                    : undefined
                }
              >
                이름
              </SortButton>
            </TableCell>
            <TableCell>
              <SortButton
                onClick={() => handleSort("email")}
                $direction={
                  sortColumn === "email"
                    ? (sortDirection as "asc" | "desc")
                    : undefined
                }
              >
                이메일
              </SortButton>
            </TableCell>
            <TableCell>
              <SortButton
                onClick={() => handleSort("role")}
                $direction={
                  sortColumn === "role"
                    ? (sortDirection as "asc" | "desc")
                    : undefined
                }
              >
                역할
              </SortButton>
            </TableCell>
            <TableCell>
              <SortButton
                onClick={() => handleSort("status")}
                $direction={
                  sortColumn === "status"
                    ? (sortDirection as "asc" | "desc")
                    : undefined
                }
              >
                상태
              </SortButton>
            </TableCell>
          </tr>
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user) => (
            <StyledTableRow
              key={user.id}
              $selected={selectedRows.includes(user.id)}
              onClick={() => toggleRowSelection(user.id)}
            >
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(user.id)}
                  onChange={() => toggleRowSelection(user.id)}
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableRoot>

      <PaginationContainer>
        <PageInfo>
          {startIndex + 1}-
          {Math.min(startIndex + itemsPerPage, sortedUsers.length)} /{" "}
          {sortedUsers.length} 항목
        </PageInfo>
        <div>
          <PageButton
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </PageButton>
          <PageButton
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </PageButton>
        </div>
      </PaginationContainer>
    </div>
  );
};
