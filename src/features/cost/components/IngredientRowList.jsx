import "./IngredientRowList.css";
import del_icon from "@/images/Onboarding/del_icon.svg";
import drop_icon from "@/images/Onboarding/drop_icon.svg";

const IngredientRowList = () => {
  return (
    <div className="IngredientRowList_wrap">
      <input type="text" className="ingredientrowlist_1" />
      <input type="number" className="ingredientrowlist_2" />
      <div className="ingredientrowlist_3">
        <select name="unit" id="unit" defaultValue="">
          <option value="" disabled hidden></option>
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="ml">ml</option>
          <option value="L">L</option>
          <option value="개">개</option>
          <option value="장">장</option>
          <option value="봉">봉</option>
          <option value="팩">팩</option>
        </select>
        <img src={drop_icon} alt="" />
      </div>
      <div className="ingredientrowlist_4">
        <input type="number" />
        <p>원</p>
      </div>
      <div className="ingredientrowlist_5">
        <img src={del_icon} alt="" />
      </div>
    </div>
  );
};

export default IngredientRowList;
