import styled from "@emotion/styled"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function Footer() {
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
                        Place sticky footer content here.
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