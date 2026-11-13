import { useNavigate } from "react-router";
import "./CostResultPage.css";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import CostCondition from "@/features/cost/components/CostCondition";
import CostValidation from "@/features/cost/components/CostValidation";
import prev_btn from "@/images/Onboarding/prev_btn.svg";

const CostResultPage = () => {
  const navigate = useNavigate();

  return (
    <div className="CostResultPage_wrap">
      <div className="costresultpage_top">
        <OnboardingHeader title="원가 추정 결과" />
      </div>
      <div className="costresultpage_main">
        <CostCondition />
        <CostValidation />
      </div>
      <div className="costresultpage_bot">
        <button
          className="costresultpage_bot_prev"
          onClick={() => navigate("/tests/1/onboarding/ai")}
        >
          <img src={prev_btn} alt="" />
          이전 단계로
        </button>
        <button
          className="costresultpage_bot_next"
          onClick={() => navigate("/tests/1/dashboard")}
        >
          운영 대시보드
        </button>
      </div>
    </div>
  );
};

export default CostResultPage;
