
import styled from "styled-components";
import flask_icon from "@/images/CommonComponents/flask_icon.svg";
import add_icon from "@/images/CommonComponents/add_circle_icon.svg";

export default function EmptyTestList({ onStartTest }) {
  return (
    <Container>
      <EmptyContent>
        <IconWrapper>
          <FlaskIcon src={flask_icon} alt="" aria-hidden="true"/>
        </IconWrapper>

        <Title>아직 등록된 테스트가 없습니다.</Title>

        <Description>
          식재료 원가율 산출부터 가상 데이터 테스트까지,
          <br/>
          첫 번째 시뮬레이션을 실행하고 대시보드 리포트를
          확인해 보세요.
        </Description>

        <StartButton type="button" onClick={onStartTest}>
          <AddIconWrapper>
            <AddIcon src={add_icon} alt="" aria-hidden="true"/>
          </AddIconWrapper>
          첫 테스트 시작하기
        </StartButton>
      </EmptyContent>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 462px;
  box-sizing: border-box;

  background-color: #fcfeff;
  border-radius: 8px;
`;

const EmptyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 480px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fcfeff;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.05) inset;
  margin-bottom: 12px;
`;

const FlaskIcon = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`

const Title = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.384px;
  color: #0f172a;
`;

const Description = styled.p`
  margin-bottom:32px;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.384px;
  color: #64748b;
`;

const StartButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  padding: 14px 40px;

  border: none;
  border-radius: 8px;

  background-color: #f4faff;
  color: #0f172a;

  font-family: "Pretendard", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.384px;
  text-align: center;
  white-space: nowrap;

  filter: drop-shadow(0 4px 2px rgba(134, 112, 255, 0.08));
  cursor: pointer;

  &:hover {
    background-color: #e8f3ff;
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const AddIconWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16px;
  height: 16px;
`;

const AddIcon = styled.img`
  width: 16.667px;
  height: 16.667px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`