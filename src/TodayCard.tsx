import CurrentDate from "./CurrentDate";
import { Col, Container, Row } from "react-bootstrap";

function TodayCard() {
    return (
        <Container>
        <Row>
            <Col>
                <CurrentDate />
            </Col>
        </Row>
        {/* 
        // 오늘 시작 전
        // - 목표 글쓰기 시간
        // - 시작 버튼

        // 오늘 완료
        // - 아이콘
        // - 완료 텍스트
         */}
    </Container>
    )
}

export default TodayCard