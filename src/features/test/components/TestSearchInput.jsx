import styled from "styled-components";
import { Search } from "lucide-react";

export default function TestSearchInput({
  value = "",
  onChange,
}) {
  return (
    <SearchContainer>
      <SearchIcon size={20} strokeWidth={2} />

      <SearchField
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="테스트명 검색"
        aria-label="테스트명 검색"
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  box-sizing: border-box;
  width: 442px;
  max-width: 100%;
  min-height: 44px;
  padding: 10px;

  background-color: #fcfeff;
  border: 1px solid #64748b;
  border-radius: 8px;

  &:focus-within {
    border-color: #0f172a;
  }
`;

const SearchIcon = styled(Search)`
  flex-shrink: 0;
  color: #64748b;
`;

const SearchField = styled.input`
  flex: 1;
  min-width: 0;
  padding: 0;

  border: none;
  outline: none;
  background: transparent;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.384px;
  color: #0f172a;

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`;
