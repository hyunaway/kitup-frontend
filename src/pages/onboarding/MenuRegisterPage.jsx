import { useState } from "react";
import { useNavigate } from "react-router";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import MenuBasicForm from "@/features/cost/components/MenuBasicForm";
import CostMethodSelector from "@/features/cost/components/CostMethodSelector";
import "./MenuRegisterPage.css";
import next_btn from "@/images/Onboarding/next_btn.svg";
import "@/features/cost/components/IngredientRowList";

function MenuRegisterPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("recipe");

  return (
    <div className="MenuRegister_wrap">
      <div className="menuregister_top">
        <OnboardingHeader
          title="메뉴 등록"
          description="새로운 메뉴의 수익성을 분석하려면 먼저 메뉴명과 판매가를 입력하세요."
        />
      </div>
      <div className="menuregister_main">
        <MenuBasicForm />
        <div className="menuregister_main_02">
          <CostMethodSelector
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        </div>
      </div>
      <button
        className="menuregister_bot"
        onClick={() =>
          navigate(
            selectedMethod === "recipe"
              ? "/tests/1/onboarding/recipe"
              : "/tests/1/onboarding/ai",
          )
        }
      >
        {selectedMethod === "recipe"
          ? "계속 (레시피 입력)"
          : "계속 (AI 원가 추정)"}
        <img src={next_btn} alt="" />
      </button>
    </div>
  );
}

export default MenuRegisterPage;
