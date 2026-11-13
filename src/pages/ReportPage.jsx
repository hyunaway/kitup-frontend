// 분석 리포트 화면
import { useNavigate } from "react-router";
import styled from "styled-components";
import ConditionSummary from "@/features/report/components/ConditionSummary";
import ProfitStructure from "@/features/report/components/ProfitStructure";
import SalesPattern from "@/features/report/components/SalesPattern";
import CustomerReaction from "@/features/report/components/CustomerReaction";
import ExperimentSuggestion from "@/features/report/components/ExperimentSuggestion";
import add_circle_icon from "@/images/Report/add_circle_icon.svg";

export default function ReportPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageTitle>분석 리포트</PageTitle>
      <ConditionSummary />
      <ProfitStructure />
      <SalesPattern />
      <CustomerReaction />
      <BottomGroup>
        <ExperimentSuggestion />
        <ActionBar>
          <ActionText>
            <p>실시간 시뮬레이션으로 수치를 즉시 검증해보세요</p>
            <span>
              원가 절감안 및 배달 패키지 변경 시 예상 영업이익의 변동을 즉각
              확인할 수 있습니다.
            </span>
          </ActionText>
          <NewTestButton type="button" onClick={() => navigate("/tests/new")}>
            <img src={add_circle_icon} alt="" aria-hidden="true" />새 테스트
            만들기
          </NewTestButton>
        </ActionBar>
      </BottomGroup>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 100%;
  min-height: calc(100dvh - 64px);
  padding: 20px 120px 60px 104px;
  background-color: #fcfeff;

  line-height: 1.4;
  letter-spacing: -0.024em;
  color: #0f172a;
`;

const PageTitle = styled.h1`
  width: 960px;
  padding: 2px 0 9px;
  border-bottom: 1px solid #e2e8f0;

  font-size: 30px;
  font-weight: 600;
  letter-spacing: -2.4px;
`;

const BottomGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 4px 16px -2px rgba(15, 23, 42, 0.06),
    0 2px 6px -1px rgba(15, 23, 42, 0.03);
`;

const ActionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  font-size: 12px;
  color: #64748b;

  & > p {
    font-size: 14px;
    font-weight: 600;
    color: #0f172a;
  }
`;

const NewTestButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;

  width: 138px;
  height: 36px;
  padding: 0 20px;
  border: none;
  border-radius: 8px;
  background-color: #0f172a;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.05));

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  color: #fcfeff;
`;
