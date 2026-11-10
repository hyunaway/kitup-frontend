import styled from "styled-components";
import PageHeading from "../shared/ui/PageHeading";
import { useState } from "react";
import TestToolbar from "../features/test/components/TestToolbar";
import Header from "@/app/layouts/HeaderLayout.jsx";
import Empty from "../features/test/components/EmptyTestList"
import UsageGuide from "../features/test/components/UsageGuide";

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
      <Header />
      <MainContent>
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

        <Empty/>

        <UsageGuide />
      </MainContent>
    </PageContainer>
  );
}

const PageContainer = styled.main`
`

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
`