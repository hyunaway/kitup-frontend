import { useState } from "react";
import "./OrdersTabPage.css";
import info_icon from "@/images/Dashboard/info_icon.svg";

const orders = [
  { id: 1, time: "11/15 17:23", type: "배달", price: 12000 },
  { id: 2, time: "11/15 17:47", type: "배달", price: 12000 },
  { id: 3, time: "11/15 17:50", type: "픽업", price: 12000 },
  { id: 4, time: "11/15 18:10", type: "배달", price: 12000 },
  { id: 5, time: "11/15 18:15", type: "픽업", price: 12000 },
  { id: 6, time: "11/15 18:20", type: "배달", price: 12000 },
  { id: 7, time: "11/15 18:25", type: "픽업", price: 12000 },
  { id: 8, time: "11/15 18:30", type: "배달", price: 12000 },
  { id: 9, time: "11/15 18:35", type: "픽업", price: 12000 },
  { id: 10, time: "11/15 18:40", type: "배달", price: 12000 },
];

const OrdersTabPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  const visiblePages = [1, 2];

  return (
    <div className="OrdersTabPage_wrap">
      <div className="orderstabpage_top">
        <h3>주문 목록</h3>
        <span>
          <img src={info_icon} alt="" />
          완료 전 주문은 위 매출에서 제외
        </span>
      </div>

      <div className="orderstabpage_table_wrap">
        <table className="orderstabpage_table">
          <thead>
            <tr>
              <th>주문</th>
              <th>주문 시간</th>
              <th>유형</th>
              <th>금액</th>
              <th>리뷰</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.time}</td>
                <td>
                  <span
                    className={`orders_type ${
                      order.type === "배달" ? "delivery" : "pickup"
                    }`}
                  >
                    {order.type}
                  </span>
                </td>
                <td>{order.price.toLocaleString()}원</td>
                <td>
                  <button className="orders_review" type="button">
                    리뷰 확인하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="orderstabpage_bot">
        <p>
          {startIndex + 1} - {startIndex + currentOrders.length} / 전체{" "}
          {orders.length}개 주문 표시
        </p>

        <div className="orders_pagination">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            이전
          </button>

          {visiblePages.map((page) => (
            <button
              key={page}
              type="button"
              className={currentPage === page ? "selected" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTabPage;
