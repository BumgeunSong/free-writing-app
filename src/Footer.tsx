import styled from "@emotion/styled"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

interface FooterProps {
    timeTotal: string
    timePast: string
}

function Footer({ timeTotal, timePast }: FooterProps) {
    return (
        <footer className='footer fixed-bottom bg-dark text-white'>
            <Container>
                <Row>
                    <Col>
                        <Link to={`/`}>
                            <Button>나가기</Button>
                        </Link>
                    </Col>
                    <Col>
                        <p>{timePast} : {timeTotal} </p>
                    </Col>
                    <Col>
                        <Button>출간하기</Button>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer