import { useState } from "react";
import { useNavigate } from "react-router";
import OnboardingHeader from "@/features/cost/components/OnboardingHeader";
import IngredientRowList from "@/features/cost/components/IngredientRowList";
import DeleteModal from "@/features/cost/components/DeleteModal";
import "./RecipeInputPage.css";
import next_btn from "@/images/Onboarding/next_btn.svg";
import prev_btn from "@/images/Onboarding/prev_btn.svg";
import plus_icon from "@/images/Onboarding/plus_icon.svg";

function RecipeInputPage() {
  const navigate = useNavigate();
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  return (
    <div className="RecipeInputPage_wrap">
      <div className="recipeinputpage_top">
        <OnboardingHeader
          title="레시피 직접 입력"
          description="사용한 재료를 한 항목씩 입력하세요. 수량과 단가를 정확히 입력할수록 식재료비와 공헌이익이 정밀해집니다."
        />
      </div>

      <div className="recipeinputpage_main">
        <div className="r_m_top">
          <div className="r_m_t_left">
            <p>식재료 명세서</p>
            <span>1인분 조리 기준 실투입 품목 목록</span>
          </div>
          <div className="r_m_t_right">총 4개 항목</div>
        </div>
        <div className="r_m_main">
          <div className="r_m_m_top">
            <p>
              재료명 <span>*</span>
            </p>
            <p>수량</p>
            <p>단위</p>
            <p>구매 단가 (원)</p>
            <p>삭제</p>
          </div>
          <div className="r_m_m_mid">
            {ingredients.map((id) => (
              <IngredientRowList
                key={id}
                onDelete={() => setDeleteTarget(id)}
              />
            ))}
          </div>

          <div
            className="r_m_m_bot"
            onClick={() =>
              setIngredients((prev) => [...prev, Math.max(0, ...prev) + 1])
            }
          >
            <img src={plus_icon} alt="" />
            <p>재료 추가</p>
          </div>
        </div>
        <div className="r_m_bot">
          <div className="r_m_b_left">
            <p>산출 총 식재료비 (추정)</p>
            <span>
              입력된 재료 수량과 구매 단가를 바탕으로 1인분 총 식재료비가 자동
              계산됩니다.
            </span>
          </div>
          <div className="r_m_b_right">₩ 2,700</div>
        </div>
      </div>

      <div className="recipeinputpage_bot">
        <button
          className="recipeinputpage_bot_prev"
          onClick={() => navigate("/tests/1/onboarding/menu")}
        >
          <img src={prev_btn} alt="" />
          이전 단계로
        </button>
        <button
          className="recipeinputpage_bot_next"
          onClick={() => navigate("/tests/1/onboarding/result")}
        >
          원가 확인하러 가기
          <img src={next_btn} alt="" />
        </button>
      </div>

      {deleteTarget !== null && (
        <DeleteModal
          onClose={() => setDeleteTarget(null)}
          onDelete={() => {
            setIngredients((prev) => prev.filter((id) => id !== deleteTarget));
            setDeleteTarget(null);
          }}
        />
      )}
    </div>
  );
}

export default RecipeInputPage;
