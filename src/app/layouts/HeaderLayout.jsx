import { useNavigate } from "react-router";
import "./HeaderLayout.css";
import homeIcon from "@/images/CommonComponents/home_icon.svg";

const HeaderLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="HeaderLayout_wrap">
      <p>KITUP</p>
      <div className="header_icon">
        <img
          src={homeIcon}
          alt="KITUP 로고"
          onClick={() => navigate("/tests")}
        />
      </div>
    </div>
  );
};

export default HeaderLayout;
