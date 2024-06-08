import CurrentDate from "./CurrentDate";
import { Button, Card } from "react-bootstrap";
import Duration from "./Duration";

function TodayCard() {
    const isTodayWritingDone = false
    return (
        <Card className="text-center" bg="light">
            <Card.Body>
                <Card.Title>
                    <CurrentDate />
                </Card.Title>
                {
                    isTodayWritingDone ? (
                        <>
                        <Card.Text>
                            🎉
                        </Card.Text>
                        <Card.Text>
                            완료!
                        </Card.Text>
                        </>
                    ) : (
                        <>
                        <Card.Text>
                            <Duration />
                        </Card.Text>
                        <Button variant="primary">시작하기</Button>
                        </>
                    )
                }

            </Card.Body>
        </Card>
    )
}

export default TodayCard