import { useNavigate } from "react-router";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import "./RecipeInputPage.css";
import next_btn from "@/images/Onboarding/next_btn.svg";

function RecipeInputPage() {
  const navigate = useNavigate();

  return (
    <div className="RecipeInputPage_wrap">
      <div className="recipeinputpage_top">
        <OnboardingHeader
          title="레시피 직접 입력"
          description="사용한 재료를 한 항목씩 입력하세요. 수량과 단가를 정확히 입력할수록 식재료비와 공헌이익이 정밀해집니다."
        />
      </div>
      <div className="recipeinputpage_main">메인 영역입니다.</div>
      <button
        className="recipeinputpage_bot"
        onClick={() => navigate("/tests/1/onboarding/recipe")}
      >
        계속 (레시피 입력)
        <img src={next_btn} alt="" />
      </button>
    </div>
  );
}

export default RecipeInputPage;
