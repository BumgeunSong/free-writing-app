import CurrentDate from "./CurrentDate";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Duration from "./Duration";

function TodayCard() {
    return (
        <Card className="text-center" border="success" bg="success" text="white">
            <Card.Body>
                <Card.Title>
                    <CurrentDate />
                </Card.Title>
                <Card.Text>
                    <Duration />
                </Card.Text>
                <Button variant="primary">시작하기</Button>
            </Card.Body>
        </Card>
    )
}
        {/* 
        // 오늘 시작 전
        // - 목표 글쓰기 시간
        // - 시작 버튼

        // 오늘 완료
        // - 아이콘
        // - 완료 텍스트
         */}
        
export default TodayCard