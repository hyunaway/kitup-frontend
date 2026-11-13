import { useNavigate } from "react-router";
import "./CostEditPage.css";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import SalesCondition from "@/features/cost/components/SalesCondition";
import VariableCost from "@/features/cost/components/VariableCost";
import ContributionMargin from "@/features/cost/components/ContributionMargin";

const CostEditPage = () => {
  const navigate = useNavigate();

  return (
    <div className="CostEditPage_wrap">
      <div className="costeditpage_top">
        <OnboardingHeader
          title="원가 확인 · 수정"
          description="등록된 메뉴의 판매가 및 원가 구성 항목을 검토하고 최적의 공헌이익을 산정합니다."
        />
      </div>
      <div className="costeditpage_main">
        <SalesCondition />
        <VariableCost />
        <ContributionMargin />
      </div>
      <div className="costeditpage_bot">
        <button
          className="costeditpage_bot_next"
          onClick={() => navigate("/tests/1/onboarding/result")}
        >
          원가 설정 완료
        </button>
      </div>
    </div>
  );
};

export default CostEditPage;
