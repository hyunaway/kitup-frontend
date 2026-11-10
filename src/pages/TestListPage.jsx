import styled from "styled-components";
import PageHeading from "../shared/ui/PageHeading";
import { useState } from "react";
import TestFilterTabs from "../features/test/components/TestFilterTabs";
import TestToolbar from "../features/test/components/TestToolbar";

export default function TestListPage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // 추후 실제 API 데이터로 교체
  const counts = {
    ALL: 0,
    RUNNING: 0,
    DRAFT: 0,
    COMPLETED: 0,
  };

  return (
    <PageContainer>
      <PageHeading
        title="내 테스트"
        description="판매해 본 결과로, 다음 선택을 준비하세요."
      />

      <TestToolbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={counts}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* TestList / TestEmptyState */}
    </PageContainer>
  );
}

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 0;

  @media (max-width: 1248px) {
    padding: 40px 24px;
  }
`;
