import { useNavigate } from "react-router";
import "./AiIngredientPage.css";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import IngredientAddForm from "@/features/cost/components/IngredientAddForm";
import AiIngredientList from "@/features/cost/components/AiIngredientList";
import next_btn from "@/images/Onboarding/next_btn.svg";
import prev_btn from "@/images/Onboarding/prev_btn.svg";

const AiIngredientPage = () => {
  const navigate = useNavigate();

  return (
    <div className="AiIngredientPage_wrap">
      <div className="aiingredientpage_top">
        <OnboardingHeader
          title="메뉴에 사용할 재료를 입력하세요"
          description="AI가 재료를 바탕으로 식재료 원가를 추정합니다. 정확한 추정을 위해 메뉴에 실제 사용하는 재료를 모두 입력해주세요."
        />
      </div>
      <div className="aiingredientpage_main">
        <IngredientAddForm />
        <AiIngredientList />
      </div>
      <div className="aiingredientpage_bot">
        <button
          className="aiingredientpage_bot_prev"
          onClick={() => navigate("/tests/1/onboarding/menu")}
        >
          <img src={prev_btn} alt="" />
          이전 단계로
        </button>
        <button
          className="aiingredientpage_bot_next"
          onClick={() => navigate("/tests/1/onboarding/result")}
        >
          AI 추정 분석 시작
          <img src={next_btn} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AiIngredientPage;
