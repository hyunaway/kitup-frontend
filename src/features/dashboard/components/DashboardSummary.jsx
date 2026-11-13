import "./DashboardSummary.css";
import info_icon from "@/images/Dashboard/info_icon.svg";

const summaryData = [
  { title: "완료 주문", value: "60", unit: "건" },
  { title: "완료 매출", value: "720,000", unit: "원" },
  {
    title: "추정 총공헌이익",
    value: "243,000",
    unit: "원",
    highlight: true,
  },
  { title: "평균 건당 공헌이익", value: "4,050", unit: "원" },
];

const DashboardSummary = () => {
  return (
    <div className="DashboardSummary_wrap">
      <div className="dashboardsummary_main">
        {summaryData.map((item) => (
          <div className="d_s_card" key={item.title}>
            <p>{item.title}</p>
            <div
              className={item.highlight ? "d_s_value highlight" : "d_s_value"}
            >
              <strong>{item.value}</strong>
              <span>{item.unit}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="dashboardsummary_notice">
        <img src={info_icon} alt="" />
        완료 주문 및 입력된 변동비를 기준으로 산출되었으며, 추가 비용은 아직
        반영되지 않았습니다.
      </p>
    </div>
  );
};

export default DashboardSummary;
