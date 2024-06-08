import CurrentDate from "./CurrentDate";
import { Button, Card, Col, Container } from "react-bootstrap";
import Duration from "./Duration";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function TodayCard() {
    const isTodayWritingDone = false
    return (
        <Container className='my-4'>
            <Row>
                <Col>
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
                                        <Link to={`write`}>
                                            <Button variant="primary">
                                                시작하기
                                            </Button>
                                        </Link>
                                    </>
                                )
                            }

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TodayCard