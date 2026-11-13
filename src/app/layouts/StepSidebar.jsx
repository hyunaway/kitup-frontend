import { useNavigate, useLocation, useParams } from "react-router";
import "./StepSidebar.css";
import sidebar_icon01 from "@/images/CommonComponents/sidebar_icon01.svg";
import sidebar_icon01_active from "@/images/CommonComponents/sidebar_icon01_active.svg";
import sidebar_icon02 from "@/images/CommonComponents/sidebar_icon02.svg";
import sidebar_icon02_active from "@/images/CommonComponents/sidebar_icon02_active.svg";
import sidebar_icon03 from "@/images/CommonComponents/sidebar_icon03.svg";
import sidebar_icon03_active from "@/images/CommonComponents/sidebar_icon03_active.svg";

const StepSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { testId } = useParams();

  const isActive01 = location.pathname.includes("/onboarding/");
  const isActive02 = location.pathname.includes("/dashboard");
  const isActive03 = location.pathname.endsWith("/report");

  return (
    <div className="StepSidebar_wrap">
      <button
        type="button"
        className={`stepsidebar_1 ${isActive01 ? "active" : ""}`}
        onClick={() =>
          navigate(testId ? `/tests/${testId}/onboarding/menu` : "/tests/new")
        }
      >
        <img
          src={isActive01 ? sidebar_icon01_active : sidebar_icon01}
          alt="사이드바01 아이콘"
        />
        <p>메뉴 등록·원가 산정</p>
      </button>
      <button
        type="button"
        className={`stepsidebar_2 ${isActive02 ? "active" : ""}`}
        onClick={() => navigate(`/tests/${testId}/dashboard`)}
      >
        <img
          src={isActive02 ? sidebar_icon02_active : sidebar_icon02}
          alt="사이드바02 아이콘"
        />
        <p>운영 대시보드</p>
      </button>
      <button
        type="button"
        className={`stepsidebar_3 ${isActive03 ? "active" : ""}`}
        onClick={() => navigate(`/tests/${testId}/report`)}
      >
        <img
          src={isActive03 ? sidebar_icon03_active : sidebar_icon03}
          alt="사이드바03 아이콘"
        />
        <p>분석 리포트</p>
      </button>
      {/* <button
        type="button"
        className={`stepsidebar_4 ${isActive04 ? "active" : ""}`}
        onClick={() => navigate(`/tests/${testId}/simulator`)}
      >
        <img src={sidebar_icon04} alt="사이드바04 아이콘" />
        <p>개선 시뮬레이터</p>
      </button> */}
    </div>
  );
};

export default StepSidebar;
