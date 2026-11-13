import styled from "styled-components";
import ReportSectionTitle from "@/features/report/components/ReportSectionTitle";
import trend_icon from "@/images/Report/trend_icon.svg";
import fixedcost_icon from "@/images/Report/fixedcost_icon.svg";
import warning_icon from "@/images/Report/warning_icon.svg";
import donut01 from "@/images/Report/donut01.svg";
import donut02 from "@/images/Report/donut02.svg";
import donut03 from "@/images/Report/donut03.svg";
import donut04 from "@/images/Report/donut04.svg";
import donut05 from "@/images/Report/donut05.svg";
import donut06 from "@/images/Report/donut06.svg";

// Figma 도넛 조각별 위치 (outer: 조각 영역, inner: 획 두께 보정)
const DONUT_VECTORS = [
  { src: donut01, outer: "10.71% 11.61% 11.61% 10.71%", inner: "-7.15% -7.28% -7.28% -7.15%" },
  { src: donut02, outer: "50% 11.61% 10.71% 35.71%", inner: "0 -11.05% -13.13% -3.81%" },
  { src: donut03, outer: "28.57% 64.29% 13.39% 10.71%", inner: "-5.31% -7.38% -8.54% -22.22%" },
  { src: donut04, outer: "13.39% 63.39% 71.43% 17.86%", inner: "-34.23% -9.69% -17.9% -24.66%" },
  { src: donut05, outer: "11.61% 56.25% 86.61% 36.61%", inner: "-306.62% -13.66% -300.48% -27.53%" },
  { src: donut06, outer: "10.71% 10.71% 50% 43.75%", inner: "-14.14% -12.09% 1.01% -2.07%" },
];

const MINI_CARDS = [
  { label: "총 매출", value: "594,000원", sub: "60건 × 9,900원", color: "#0f172a" },
  { label: "건당 공헌이익", value: "3,040원", sub: "객단가 대비 30.7%", color: "#2563eb" },
  { label: "추정 영업이익", value: "62,400원", sub: "영업이익률 10.5%", color: "#10b981" },
];

const COST_ITEMS = [
  { label: "공헌이익 (30.7%)", value: "3,040", color: "#2563eb", main: true },
  { label: "식재료비 (28.3%)", value: "2,800", color: "#f59e0b" },
  { label: "배달 수수료 (9.8%)", value: "970", prefix: "평균 ", color: "#f43f5e" },
  { label: "포장 부자재 (3.0%)", value: "300", color: "#a855f7" },
];

export default function ProfitStructure() {
  return (
    <Section>
      <ReportSectionTitle title="수익 구조 분석" />
      <Panel>
        <LeftColumn>
          <LeftTop>
            <SubTitle>수익 및 마진 핵심 요약</SubTitle>
            <TotalCard>
              <TotalHeader>
                <p>총 공헌이익</p>
                <RateBadge>
                  <img src={trend_icon} alt="" aria-hidden="true" />
                  <span>
                    공헌이익률 <b>30.7%</b>
                  </span>
                </RateBadge>
              </TotalHeader>
              <TotalValue>
                182,400<span>원</span>
              </TotalValue>
              <p>
                총 매출 594,000원에서 변동비(식재료·포장·수수료)를 제외한
                금액입니다.
              </p>
            </TotalCard>
            <MiniRow>
              {MINI_CARDS.map(({ label, value, sub, color }) => (
                <MiniCard key={label}>
                  <MiniLabel>{label}</MiniLabel>
                  <MiniValue $color={color}>{value}</MiniValue>
                  <p>{sub}</p>
                </MiniCard>
              ))}
            </MiniRow>
          </LeftTop>
          <FixedCost>
            <FixedCostInfo>
              <img src={fixedcost_icon} alt="" aria-hidden="true" />
              <div>
                <p>추가 고정비 (총계 반영)</p>
                <span>임차료 및 클라우드 키친 슬롯 분할 배분</span>
              </div>
            </FixedCostInfo>
            <FixedCostValue>120,000원</FixedCostValue>
          </FixedCost>
        </LeftColumn>

        <RightColumn>
          <RightTop>
            <RightHeader>
              <SubTitle>1건 판매(9,900원) 비용 및 마진 구조</SubTitle>
              <span>단위: 원 (KRW)</span>
            </RightHeader>
            <Breakdown>
              <Donut>
                <DonutVectors>
                  {DONUT_VECTORS.map(({ src, outer, inner }) => (
                    <DonutPiece key={src} $inset={outer}>
                      <DonutPiece $inset={inner}>
                        <img src={src} alt="" aria-hidden="true" />
                      </DonutPiece>
                    </DonutPiece>
                  ))}
                </DonutVectors>
                <DonutLabel>
                  <p>공헌이익률</p>
                  <span>30.7%</span>
                </DonutLabel>
              </Donut>
              <Legend>
                {COST_ITEMS.map(({ label, value, prefix, color, main }) => (
                  <LegendItem key={label} $main={main}>
                    <p>
                      <LegendDot $color={color} />
                      {label}
                    </p>
                    <span>
                      {prefix}
                      <b>{value}</b>원
                    </span>
                  </LegendItem>
                ))}
              </Legend>
            </Breakdown>
          </RightTop>
          <Notice>
            <img src={warning_icon} alt="" aria-hidden="true" />
            <div>
              <p>제외된 항목 안내</p>
              <p>
                인건비·감가상각·세금은 미포함이며 실운영비용과 일부 차이가 있을
                수 있습니다.
              </p>
            </div>
          </Notice>
        </RightColumn>
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
  height: 400px;
  overflow: hidden;

  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 1px 3px 0 rgba(15, 23, 42, 0.05),
    0 1px 2px -1px rgba(15, 23, 42, 0.03);
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 478px;
  padding: 24px;
`;

const LeftTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TotalCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  font-size: 12px;
  color: #64748b;
`;

const TotalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RateBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 2px 8px;
  border-radius: 4px;
  background-color: #f3fef9;
  color: #047857;

  b {
    font-weight: 600;
  }
`;

const TotalValue = styled.p`
  display: flex;
  align-items: baseline;
  gap: 4px;

  font-size: 36px;
  font-weight: 600;
  letter-spacing: -2.4px;
  color: #0f172a;

  & > span {
    font-size: 18px;
    font-weight: 400;
    color: #64748b;
  }
`;

const MiniRow = styled.div`
  display: flex;
  gap: 10px;
`;

const MiniCard = styled.div`
  width: 136px;
  height: 84px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;

  font-size: 12px;
  color: #94a3b8;
`;

const MiniLabel = styled.p`
  font-weight: 500;
`;

const MiniValue = styled.span`
  display: block;
  padding-top: 2px;

  font-size: 16px;
  font-weight: 600;
  color: ${({ $color }) => $color};
`;

const FixedCost = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 58px;
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

const FixedCostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;

  p {
    font-weight: 500;
  }

  span {
    color: #94a3b8;
  }
`;

const FixedCostValue = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const RightColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px;
  border-left: 1px solid #e2e8f0;
`;

const RightTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-size: 12px;
    color: #64748b;
  }
`;

const Breakdown = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

const Donut = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 112px;
  height: 112px;
`;

const DonutVectors = styled.div`
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
`;

const DonutPiece = styled.div`
  position: absolute;
  inset: ${({ $inset }) => $inset};

  & > img {
    width: 100%;
    height: 100%;
    max-width: none;
  }
`;

const DonutLabel = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  color: #64748b;

  & > span {
    font-weight: 600;
    color: #2563eb;
  }
`;

const Legend = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
`;

const LegendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 18px;

  & + & {
    padding-top: 5px;
    border-top: 1px solid #e2e8f0;
  }

  & > p {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: ${({ $main }) => ($main ? 600 : 400)};
    color: ${({ $main }) => ($main ? "#0f172a" : "#64748b")};
  }

  & > span {
    color: ${({ $main }) => ($main ? "#2563eb" : "#0f172a")};
  }

  b {
    font-weight: 600;
  }
`;

const LegendDot = styled.i`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
`;

const Notice = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  padding: 12px;
  border: 1px solid #fde68a;
  border-radius: 8px;
  background-color: #fffbeb;

  font-size: 12px;
  color: #b45309;

  & > img {
    margin-top: 2px;
  }
`;
