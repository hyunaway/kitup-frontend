import styled from "styled-components";
import ReportSectionTitle from "@/features/report/components/ReportSectionTitle";
import checklist_icon from "@/images/Report/checklist_icon.svg";

const SUGGESTIONS = [
  {
    title: "점심시간에 늦어지는 배달",
    quotes: [
      "지난번엔 괜찮았는데 오늘은 소스가 짜요.",
      "참기름 향이 강해서 닭강정 맛이 잘 안 느껴져요.",
    ],
    plan: "재료와 소스를 저울로 재서 1인분 기준량을 정합니다. 그래도 향이 강하다는 불만이 남으면 향이 덜한 참기름을 같은 양으로 써봅니다.",
    check:
      "간이 달라진다는 리뷰가 줄었는지, 참기름을 바꾼 뒤 맛에 대한 반응은 어떤지 확인합니다.",
  },
  {
    title: "양을 유지하면서 재료비 줄이기",
    quotes: ["양이 넉넉해서 한 끼로 든든해요."],
    plan: "다져쓰는 양파는 모양이 중요하지 않으므로 못난이 양파의 견적을 받아봅니다. 손질한 양파 60g으로 소스를 만들어 맛을 비교합니다. 제공량은 그대로 유지합니다.",
    check:
      "손질 후 60g당 비용이 줄어드는지 계산합니다. 맛과 손질 시간도 함께 비교합니다.",
  },
  {
    title: "식은 밥과 눅눅한 닭강정",
    quotes: [
      "밥은 식고 샐러드는 미지근해졌어요.",
      "매장에서 먹을 땐 바삭했는데 배달은 눅눅해요.",
    ],
    plan: "따뜻한 음식과 차가운 샐러드를 서로 다른 봉투에 담습니다. 닭강정이 여전히 눅눅하다면 김이 빠지는 용기도 시험합니다.",
    check:
      "포장 후 같은 시간이 지났을 때 온도와 바삭함을 비교합니다. 소스가 새는지 살피도 추가 포장비도 계산합니다.",
  },
  {
    title: "점심시간에 늦어지는 배달",
    quotes: ["점심에 주문했는데 도착까지 오래 걸렸어요."],
    plan: "지연 원인을 찾으려면 조리부터 배달까지 어디에서 오래 걸리는지 알아야 합니다. 다음 운영에서는 주문 접수, 조리 완료, 포장 완료, 기사 픽업 시각을 세부 기록합니다.",
    check:
      "점심 시간에 조리가 오래 걸리는지, 포장이나 기사 픽업을 기다리는 대기 시간이 긴지 다른 시간대와 비교합니다.",
  },
];

export default function ExperimentSuggestion() {
  return (
    <Section>
      <ReportSectionTitle title="개선 제안 보고서" />
      <CardList>
        {SUGGESTIONS.map(({ title, quotes, plan, check }, i) => (
          <Card key={i}>
            <CardHeader>
              <NumberBadge>{String(i + 1).padStart(2, "0")}</NumberBadge>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <Quote>
              {quotes.map((quote) => (
                <p key={quote}>“{quote}”</p>
              ))}
            </Quote>
            <Plan>{plan}</Plan>
            <CheckPoint>
              <img src={checklist_icon} alt="" aria-hidden="true" />
              <p>확인 포인트: {check}</p>
            </CheckPoint>
          </Card>
        ))}
      </CardList>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  line-height: 1.4;
  letter-spacing: -0.024em;
  color: #0f172a;
`;

const CardList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background-color: #fcfeff;
  box-shadow:
    0 1px 3px 0 rgba(15, 23, 42, 0.05),
    0 1px 2px -1px rgba(15, 23, 42, 0.03);

  font-size: 12px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  height: 40px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e8f0;
`;

const NumberBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border-radius: 8px;
  background-color: #0f172a;

  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0;
  color: #fcfeff;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const Quote = styled.div`
  padding: 14px 14px 14px 18px;
  border-left: 4px solid #fde68a;
  border-radius: 0 8px 8px 0;
  background-color: #f8fafc;
  color: #64748b;
`;

const Plan = styled.p`
  font-weight: 500;
`;

const CheckPoint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  padding: 13px 12px 12px;
  border: 1px solid #fde68a;
  border-radius: 8px;
  background-color: #fffbeb;

  font-weight: 500;
  color: #b45309;

  & > img {
    margin-top: 2px;
  }
`;
