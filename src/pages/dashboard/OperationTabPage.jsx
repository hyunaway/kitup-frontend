import "./OperationTabPage.css";
import info_icon_blue from "@/images/Dashboard/info_icon_blue.svg";
import calculation_icon from "@/images/Dashboard/calculation_icon.svg";

const hourlyData = [
  { time: "12:00 - 13:00", count: 21, percent: 35 },
  { time: "11:00 - 12:00", count: 6, percent: 10 },
  { time: "18:00 - 19:00", count: 21, percent: 35 },
  { time: "19:00 - 20:00", count: 6, percent: 10 },
  { time: "15:00 - 16:00", count: 6, percent: 10 },
];

const orderTypeData = [
  { type: "픽업", count: 30, profit: "4,800", color: "blue" },
  { type: "배달", count: 30, profit: "3,300", color: "yellow" },
];

function OperationTabPage() {
  return (
    <div className="OperationTabPage_wrap">
      <div className="operationtabpage_left">
        <div className="o_l_top">
          <div>
            <p>시간대별 판매</p>
            <span>매출 집중 구간 및 시간대별 주문 분포</span>
          </div>
          <span className="o_l_t_label">단위: 건수</span>
        </div>

        <div className="o_l_sales">
          <div className="o_l_sales_header">
            <span>시간대 구분</span>
            <span>주문 분포 게이지</span>
            <span>주문 건수 (비중)</span>
          </div>

          {hourlyData.map((item) => (
            <div
              className={`o_l_sales_row ${
                item.percent === 35 ? "selected" : ""
              }`}
              key={item.time}
            >
              <span>{item.time}</span>

              <div className="o_l_bar">
                <div
                  className="o_l_bar_fill"
                  style={{ width: `${(item.percent / 50) * 100}%` }}
                />
              </div>

              <span>
                {item.count}건<span>({item.percent}%)</span>
              </span>
            </div>
          ))}
        </div>

        <div className="o_notice01">
          <img src={info_icon_blue} alt="" />
          12~13시 및 18~19시에 전체 주문의 70% (총 42건)가 집중되어 있습니다.
        </div>
      </div>

      <div className="operationtabpage_right">
        <div className="o_r_top">
          <div>
            <p>배달·픽업 비교</p>
          </div>
        </div>

        <div className="o_r_compare">
          <div className="o_r_compare_header">
            <span>유형</span>
            <span>완료 주문</span>
            <span>건당 공헌이익</span>
          </div>

          {orderTypeData.map((item) => (
            <div className="o_r_compare_row" key={item.type}>
              <div className="o_r_type">
                <span className={`o_r_circle ${item.color}`} />
                <span>{item.type}</span>
              </div>
              <span>{item.count}건</span>
              <strong>{item.profit}원</strong>
            </div>
          ))}
        </div>

        <div className="o_notice02">
          <img src={calculation_icon} alt="" />
          픽업 주문이 배달 대비 건당 공헌이익이 1,500원 더 높게 산출되었습니다.
        </div>
      </div>
    </div>
  );
}

export default OperationTabPage;
