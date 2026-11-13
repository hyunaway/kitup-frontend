import styled from "styled-components";
import ReportSectionTitle from "@/features/report/components/ReportSectionTitle";
import InsightCards from "@/features/report/components/InsightCards";

const TIME_SLOTS = [
  {
    name: "점심 피크",
    time: "11~13시",
    range: "11:00 ~ 13:00 (점심 피크)",
    count: "22건",
    share: "36.7%",
    sales: "217,800원",
    barHeight: 80,
    color: "#2563eb",
  },
  {
    name: "저녁 피크",
    time: "18~20시",
    range: "18:00 ~ 20:00 (저녁 피크)",
    count: "18건",
    share: "30.0%",
    sales: "178,200원",
    barHeight: 65,
    color: "#6366f1",
  },
  {
    name: "기타 시간대",
    time: "오후/야간",
    range: "기타 시간대 (오후/야간)",
    count: "20건",
    share: "33.3%",
    sales: "198,000원",
    barHeight: 72,
    color: "#94a3b8",
    muted: true,
  },
];

export default function SalesPattern() {
  return (
    <Section>
      <ReportSectionTitle title="판매 패턴 분석" />
      <Panel>
        <TopRow>
          <Chart>
            <ChartTitle>시간대별 주문 점유율</ChartTitle>
            <Bars>
              {TIME_SLOTS.map(({ name, share, count, barHeight, color, muted }) => (
                <BarColumn key={name}>
                  <BarShare $color={muted ? "#64748b" : color}>{share}</BarShare>
                  <span>{count}</span>
                  <Bar $height={barHeight} $color={color} />
                </BarColumn>
              ))}
            </Bars>
            <BarLabels>
              {TIME_SLOTS.map(({ name, time }) => (
                <div key={name}>
                  <p>{name}</p>
                  <span>{time}</span>
                </div>
              ))}
            </BarLabels>
          </Chart>

          <Side>
            <Table>
              <thead>
                <tr>
                  <th>시간대 분류</th>
                  <th>주문 건수</th>
                  <th>점유율</th>
                  <th>예상 매출</th>
                </tr>
              </thead>
              <tbody>
                {TIME_SLOTS.map(({ name, range, count, share, sales, color, muted }) => (
                  <tr key={name}>
                    <td>
                      <SlotName $muted={muted}>
                        <Dot $color={color} />
                        {range}
                      </SlotName>
                    </td>
                    <td>{count}</td>
                    <ShareCell $color={muted ? "#0f172a" : color}>{share}</ShareCell>
                    <td>{sales}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Total>
              <p>점심·저녁 4시간 집중 매출 합계</p>
              <span>
                총 <b>396,000</b>원 (전체 매출의 66.7%)
              </span>
            </Total>
          </Side>
        </TopRow>
        <InsightCards />
      </Panel>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;

  line-height: 1.4;
  letter-spacing: -0.024em;
  color: #0f172a;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  height: 398px;
  padding: 24px;

  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 1px 3px 0 rgba(15, 23, 42, 0.05),
    0 1px 2px -1px rgba(15, 23, 42, 0.03);
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  height: 250px;
`;

const Chart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 448px;
  padding: 16px;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  background-color: #f8fafc;

  font-size: 12px;
`;

const ChartTitle = styled.p`
  display: flex;
  align-items: center;
  height: 24px;
  font-weight: 500;
`;

const Bars = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 30px;

  height: 144px;
  padding: 16px 16px 8px;
  border-bottom: 1px solid #e2e8f0;
`;

const BarColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 80px;

  & > span {
    color: #94a3b8;
  }
`;

const BarShare = styled.b`
  font-weight: 600;
  color: ${({ $color }) => $color};
`;

const Bar = styled.i`
  width: 48px;
  height: ${({ $height }) => $height}px;
  border-radius: 8px 8px 0 0;
  background-color: ${({ $color }) => $color};
`;

const BarLabels = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0 16px;
  text-align: center;

  & > div {
    width: 80px;
  }

  p {
    font-weight: 500;
  }

  span {
    color: #94a3b8;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 445px;
`;

const Table = styled.table`
  width: 100%;
  height: 154px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  border-collapse: separate;
  border-spacing: 0;
  background-color: #fcfeff;

  font-size: 12px;
  font-weight: 500;
  text-align: center;

  th {
    padding: 10px;
    font-weight: 500;
    color: #64748b;
  }

  td {
    padding: 10px;
  }

  td:first-child {
    padding: 10px 12px;
  }

  th:last-child,
  td:last-child {
    width: 113px;
  }
`;

const SlotName = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  color: ${({ $muted }) => ($muted ? "#64748b" : "#0f172a")};
`;

const Dot = styled.i`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ $color }) => $color};
`;

const ShareCell = styled.td`
  font-weight: 600;
  color: ${({ $color }) => $color};
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;

  font-size: 12px;
  font-weight: 500;
  color: #64748b;

  & > span {
    color: #2563eb;
  }

  b {
    font-weight: 600;
  }
`;
