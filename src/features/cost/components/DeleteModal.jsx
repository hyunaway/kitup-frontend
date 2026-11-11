import "./DeleteModal.css";

const DeleteModal = ({ onClose, onDelete }) => {
  return (
    <div className="DeleteModal_wrap">
      <div className="deletemodal_box">
        <p>식재료 삭제 확인</p>
        <span>
          특제 소스를 삭제하시겠습니까? 삭제된 식재료는 원가 계산에서
          제외됩니다.
        </span>
        <div className="deletemodal_btn">
          <button className="deletemodal_prev" onClick={onClose}>취소</button>
          <button className="deletemodal_next" onClick={onDelete}>삭제</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
