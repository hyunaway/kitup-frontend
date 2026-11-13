import "./AiIngredientRowList.css";
import del_icon from "@/images/Onboarding/del_icon.svg";

const AiIngredientRowList = () => {
  return (
    <div className="AiIngredientRowList_wrap">
      <div className="aiingredientrowlist_left">
        <p>1.</p>
        <div className="aiingredientrowlist_txt">
          <h1>닭가슴살</h1>
          <p>
            <span>추천 분류: </span>육류 · 가금류
          </p>
        </div>
      </div>

      <div className="aiingredientrowlist_right">
        <img src={del_icon} alt="삭제" />
        <p>삭제</p>
      </div>
    </div>
  );
};

export default AiIngredientRowList;
