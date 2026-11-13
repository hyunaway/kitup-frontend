import styled from "styled-components";
import pin_icon from "@/images/Report/pin_icon.svg";
import bulb_icon from "@/images/Report/bulb_icon.svg";
import play_icon from "@/images/Report/play_icon.svg";
import caution_icon from "@/images/Report/caution_icon.svg";

const INSIGHTS = [
  {
    icon: pin_icon,
    title: "[결과] 집중 시간대",
    description:
      "점심(12시)과 저녁(18~19시) 시간대에 주문이 극명하게 집중됩니다.",
  },
  {
    icon: bulb_icon,
    title: "[의미] 매출 기여도",
    description:
      "두 식사 시간대가 전체 매출의 약 67%를 차지하며 피크타임 중심 운영 구조입니다.",
  },
  {
    icon: play_icon,
    title: "[권장 행동] 운영 최적화",
    description:
      "피크 전 프렙(사전준비)을 마치고 비피크 시간대 픽업 프로모션을 전개하세요.",
  },
  {
    icon: caution_icon,
    title: "[한계] 모델 가정",
    description:
      "이 데이터는 가상 주문 패키지 기반이며 실제 운영 결과를 보장하지 않습니다.",
  },
];

export default function InsightCards() {
  return (
    <List>
      {INSIGHTS.map(({ icon, title, description }) => (
        <Item key={title}>
          <ItemTitle>
            <img src={icon} alt="" aria-hidden="true" />
            {title}
          </ItemTitle>
          <ItemDescription>{description}</ItemDescription>
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 12px;

  font-size: 12px;
  line-height: 1.4;
  letter-spacing: -0.288px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 220px;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fcfeff;
`;

const ItemTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 18px;

  font-weight: 500;
  color: #0f172a;
`;

const ItemDescription = styled.p`
  color: #64748b;
`;
