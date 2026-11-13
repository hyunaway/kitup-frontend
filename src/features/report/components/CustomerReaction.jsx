import styled from "styled-components";
import ReportSectionTitle from "@/features/report/components/ReportSectionTitle";
import thumb_icon from "@/images/Report/thumb_icon.svg";
import arrow_icon from "@/images/Report/arrow_icon.svg";

const TONE = {
  positive: { dot: "#10b981", text: "#047857", bar: "#10b981" },
  negative: { dot: "#f43f5e", text: "#e11d48", bar: "#e11d48" },
};

const VOC_GROUPS = [
  {
    title: "유지할 강점",
    tone: "positive",
    items: [
      {
        name: "맛·품질 만족",
        rate: 71,
        count: 27,
        keywords: ["맛있어요", "재료가 신선해요", "양이 넉넉해요"],
      },
      {
        name: "빠른 배달 속도",
        rate: 34,
        count: 13,
        keywords: ["생각보다 빨리 왔어요", "배달이 신속해요"],
      },
    ],
  },
  {
    title: "개선 후보",
    tone: "negative",
    items: [
      {
        name: "포장 품질",
        rate: 26,
        count: 10,
        keywords: ["포장이 터져 있었어요", "국물이 샜어요"],
      },
      {
        name: "가격 대비 만족도",
        rate: 18,
        count: 7,
        keywords: ["조금 비싼 것 같아요", "양 대비 가격이 아쉬워요"],
      },
    ],
  },
];

export default function CustomerReaction() {
  return (
    <Section>
      <ReportSectionTitle title="고객 반응 분석 (VOC)" />
      <Banner>
        <BannerInfo>
          <img src={thumb_icon} alt="" aria-hidden="true" />
          <div>
            <p>VOC 종합 만족도 지수</p>
            <span>리뷰 38건 중 27건에서 명확한 긍정 평가 확인</span>
          </div>
        </BannerInfo>
        <Gauge>
          <GaugeLegend>
            <GaugeLabel $color={TONE.positive.text}>긍정 71.0% (27건)</GaugeLabel>
            <GaugeLabel $color={TONE.negative.text}>
              개선요구 29.0% (11건)
            </GaugeLabel>
          </GaugeLegend>
          <GaugeBar>
            <GaugeFill $ratio={71} />
          </GaugeBar>
        </Gauge>
      </Banner>

      <Columns>
        {VOC_GROUPS.map(({ title, tone, items }) => (
          <Column key={title}>
            <ColumnTitle $color={TONE[tone].dot}>{title}</ColumnTitle>
            {items.map(({ name, rate, count, keywords }) => (
              <Item key={name}>
                <ItemHeader $color={TONE[tone].text}>
                  <p>{name}</p>
                  <span>
                    언급 {rate}% · {count}건
                  </span>
                </ItemHeader>
                <ItemBar>
                  <ItemFill $ratio={rate} $color={TONE[tone].bar} />
                </ItemBar>
                <Keywords>
                  {keywords.map((keyword) => (
                    <li key={keyword}>“{keyword}”</li>
                  ))}
                </Keywords>
                {/* TODO: EvidenceReviewModal 연결 */}
                <EvidenceButton type="button">
                  근거 리뷰 {count}개 보기
                  <img src={arrow_icon} alt="" aria-hidden="true" />
                </EvidenceButton>
              </Item>
            ))}
          </Column>
        ))}
      </Columns>
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

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 1px 3px 0 rgba(15, 23, 42, 0.05),
    0 1px 2px -1px rgba(15, 23, 42, 0.03);
`;

const BannerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  font-weight: 500;
  letter-spacing: 0;

  p {
    font-size: 12px;
    line-height: 16px;
  }

  span {
    font-size: 11px;
    line-height: 16.5px;
    color: #64748b;
  }
`;

const Gauge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 288px;
`;

const GaugeLegend = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GaugeLabel = styled.p`
  font-size: 11px;
  font-weight: 700;
  line-height: 16.5px;
  letter-spacing: 0;
  color: ${({ $color }) => $color};
`;

const GaugeBar = styled.div`
  height: 10px;
  border-radius: 9999px;
  background-color: #ffe4e6;
  overflow: hidden;
`;

const GaugeFill = styled.div`
  width: ${({ $ratio }) => $ratio}%;
  height: 100%;
  border-radius: 9999px;
  background-color: #10b981;
`;

const Columns = styled.div`
  display: flex;
  gap: 20px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;

  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 1px 3px 0 rgba(15, 23, 42, 0.05),
    0 1px 2px -1px rgba(15, 23, 42, 0.03);
`;

const ColumnTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 36px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background-color: ${({ $color }) => $color};
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  padding: 16px 16px 19px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #f8fafc;

  font-size: 12px;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;

  & > span {
    color: ${({ $color }) => $color};
  }
`;

const ItemBar = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 9999px;
  background-color: #e2e8f0;
  overflow: hidden;
`;

const ItemFill = styled.div`
  width: ${({ $ratio }) => $ratio}%;
  height: 100%;
  border-radius: 9999px;
  background-color: ${({ $color }) => $color};
`;

const Keywords = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  & > li {
    padding: 4px 8px;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    background-color: #fcfeff;
    color: #64748b;
  }
`;

const EvidenceButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  padding-top: 4px;
  border: none;

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #64748b;
`;
