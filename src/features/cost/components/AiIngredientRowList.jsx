import "./AiIngredientRowList.css";
import del_icon from "@/images/Onboarding/del_icon.svg";

const AiIngredientRowList = ({ name, index, onDelete }) => {
  return (
    <div className="AiIngredientRowList_wrap">
      <div className="aiingredientrowlist_left">
        <p>{index}.</p>
        <div className="aiingredientrowlist_txt">
          <h1>{name}</h1>
          <p>
            <span>추천 분류: </span>육류 · 가금류
          </p>
        </div>
      </div>

      <div
        className="aiingredientrowlist_right"
        role="button"
        tabIndex={0}
        onClick={onDelete}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onDelete();
          }
        }}
      >
        <img src={del_icon} alt="삭제" />
        <p>삭제</p>
      </div>
    </div>
  );
};

export default AiIngredientRowList;
