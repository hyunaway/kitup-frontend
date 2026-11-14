import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import IngredientRowList from "@/features/cost/components/IngredientRowList";
import DeleteModal from "@/features/cost/components/DeleteModal";
import "./IngredientEditPage.css";
import plus_icon from "@/images/Dashboard/plus_icon.svg";

const initialIngredients = [
  { id: 1, name: "쌀 (국내산 쌀)", quantity: 50, unit: "g", price: 500 },
  { id: 2, name: "닭고기 (정육)", quantity: 50, unit: "g", price: 500 },
  { id: 3, name: "특제 소스", quantity: 50, unit: "g", price: 500 },
  { id: 4, name: "양파", quantity: 50, unit: "g", price: 500 },
];

const summaryData = [
  { title: "기존 추정 원가", amount: "12,500" },
  { title: "변경된 실측 원가", amount: "11,200" },
  { title: "건당 공헌이익", amount: "8,300", highlight: true },
  { title: "추정 총공헌이익 (60건)", amount: "498,000" },
];

const IngredientEditPage = () => {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const { testId } = useParams();

  const handleChange = (id, field, value) => {
    setIngredients((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const handleAdd = () => {
    setIngredients((prev) => [
      ...prev,
      {
        id: Math.max(0, ...prev.map((item) => item.id)) + 1,
        name: "",
        quantity: "",
        unit: "",
        price: "",
      },
    ]);
  };

  const handleDelete = () => {
    setIngredients((prev) => prev.filter((item) => item.id !== deleteTarget));
    setDeleteTarget(null);
  };

  const handleConfirm = () => {
    navigate(`/tests/${testId}/dashboard`);
  };

  return (
    <div className="IngredientEditPage_wrap">
      <div className="ingredienteditpage_top">
        <h2>개별 식재료비 수정</h2>
        <span>
          메뉴에 사용된 식재료의 실제 구매 단가를 입력하면 추정 원가가 실측치로
          업데이트됩니다.
        </span>
      </div>

      <div className="ingredienteditpage_main">
        <div className="i_e_m_top">
          <div className="i_e_m_t_left">
            <p>식재료 명세서</p>
            <span>1인분 조리 기준 실투입 품목 목록</span>
          </div>
          <div className="i_e_m_t_right">총 {ingredients.length}개 항목</div>
        </div>

        <div className="i_e_m_main">
          <div className="i_e_m_m_top">
            <p>
              재료명 <span>*</span>
            </p>
            <p>수량</p>
            <p>단위</p>
            <p>구매 단가 (원)</p>
            <p>삭제</p>
          </div>

          <div className="i_e_m_m_mid">
            {ingredients.map((item) => (
              <IngredientRowList
                key={item.id}
                ingredient={item}
                onChange={(field, value) => handleChange(item.id, field, value)}
                onDelete={() => setDeleteTarget(item.id)}
              />
            ))}
          </div>

          <button className="i_e_m_m_bot" type="button" onClick={handleAdd}>
            <img src={plus_icon} alt="" />
            <p>재료 추가</p>
          </button>
        </div>
      </div>

      <div className="ingredienteditpage_summary">
        <div className="i_e_s_top">
          <p>수정 결과 요약</p>
        </div>

        <div className="i_e_s_main">
          {summaryData.map((item) => (
            <div className="i_e_s_box" key={item.title}>
              <p>{item.title}</p>
              <div className={item.highlight ? "highlight" : ""}>
                {item.amount} <span>원</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ingredienteditpage_bot">
        <button
          type="button"
          className="ingredienteditpage_cancel"
          onClick={() => navigate(-1)}
        >
          취소
        </button>
        <button
          type="button"
          className="ingredienteditpage_confirm"
          onClick={handleConfirm}
        >
          확인
        </button>
      </div>

      {deleteTarget !== null && (
        <DeleteModal
          onClose={() => setDeleteTarget(null)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default IngredientEditPage;
