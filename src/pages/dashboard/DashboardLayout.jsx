import { Outlet, useNavigate, useParams } from "react-router";
import DashboardSummary from "@/features/dashboard/components/DashboardSummary";
import DashboardTabs from "@/features/dashboard/components/DashboardTabs";
import "./DashboardLayout.css";
import update_icon from "@/images/Dashboard/update_icon.svg";
import edit_icon from "@/images/Dashboard/edit_icon.svg";
import add_icon from "@/images/Dashboard/add_icon.svg";

function DashboardLayout() {
  const navigate = useNavigate();
  const { testId } = useParams();

  return (
    <div className="DashboardLayout_wrap">
      <div className="dashboardlayout_top">
        <div className="d_t_title">
          <p>운영 대시보드</p>
          <span>매출 소스 통합 테스트</span>
          <div className="d_t_title_txt">
            <p>2026.11.02 ~ 11.15</p>
            <p>성수 공유주방 A</p>
          </div>
        </div>
        <button className="d_t_finish" type="button">
          테스트 종료
        </button>
      </div>

      <div className="dashboardlayout_buttons">
        <button className="d_l_load" type="button">
          <img src={update_icon} alt="" />
          데이터 불러오기
        </button>
        <button
          type="button"
          onClick={() =>
            navigate(`/tests/${testId}/dashboard/cost/ingredients`)
          }
        >
          <img src={edit_icon} alt="" />
          원가 수정하기
        </button>
        <button
          type="button"
          onClick={() => navigate(`/tests/${testId}/dashboard/cost/fixed-cost`)}
        >
          <img src={add_icon} alt="" />
          추가 고정비 입력
        </button>
      </div>

      <DashboardSummary />

      <DashboardTabs />

      <div className="dashboardlayout_main">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
