import "./AiIngredientList.css";
import AiIngredientRowList from "./AiIngredientRowList";

const AiIngredientList = () => {
  return (
    <div className="AiIngredientList_wrap">
      <div className="aiingredientlist_top">
        <h1>입력된 재료 목록</h1>
        <p>
          최대 20종까지 추가 가능합니다 (현재 <span>3종</span> 입력됨)
        </p>
      </div>
      <div className="aiingredientlist_main">
        <AiIngredientRowList />
        <AiIngredientRowList />
        <AiIngredientRowList />
      </div>
    </div>
  );
};

export default AiIngredientList;
