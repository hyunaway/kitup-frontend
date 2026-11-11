// 내 테스트 화면
import { useMemo } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import PageHeading from "../shared/ui/PageHeading";
import EmptyState from "../shared/ui/EmptyState";
import TestToolbar from "../features/test/components/TestToolbar";
import Header from "@/app/layouts/HeaderLayout.jsx";
import Empty from "../features/test/components/EmptyTestList";
import NoSearchResult from "../features/test/components/NoSearchResult";
import TestTable from "../features/test/components/TestTable";
import UsageGuide from "../features/test/components/UsageGuide";
import useTests from "../features/test/api/useTests";
import useTestListParams from "../features/test/hooks/useTestListParams";
import { getTestListView } from "../features/test/utils/testListView";

export default function TestListPage() {
  const navigate = useNavigate();
  const { status, page, query, setStatus, setPage, setQuery } =
    useTestListParams();
  const { data: tests = [], isPending, isError, refetch } = useTests();

  const view = useMemo(
    () => getTestListView({ tests, status, query, page }),
    [tests, status, query, page],
  );

  const renderList = () => {
    if (isPending) {
      return <EmptyState title="테스트 목록을 불러오는 중입니다." />;
    }
    if (isError) {
      return (
        <EmptyState
          title="테스트 목록을 불러오지 못했습니다."
          description="잠시 후 다시 시도해 주세요."
          action={
            <RetryButton type="button" onClick={() => refetch()}>
              다시 시도
            </RetryButton>
          }
        />
      );
    }
    if (tests.length === 0) {
      return <Empty onStartTest={() => navigate("/tests/new")} />;
    }
    if (view.isSearching && view.searchedTotal === 0) {
      return <NoSearchResult query={view.query} />;
    }
    return (
      <TestTable
        rows={view.rows}
        total={view.total}
        isSearching={view.isSearching}
        page={view.page}
        totalPages={view.totalPages}
        onPageChange={setPage}
      />
    );
  };

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PageHeading
          title="내 테스트"
          description="판매해 본 결과로, 다음 선택을 준비하세요."
        />

        <TestToolbar
          activeTab={status}
          onTabChange={setStatus}
          counts={view.counts}
          searchQuery={query}
          onSearchChange={setQuery}
        />

        {renderList()}

        <UsageGuide />
      </MainContent>
    </PageContainer>
  );
}

const PageContainer = styled.main`
  padding-bottom: 60px;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 24px;

  padding-top: 64px;
  box-sizing: border-box;

  @media (max-width: 1248px) {
    padding: 40px 24px;
  }
`;

const RetryButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fcfeff;

  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`;
