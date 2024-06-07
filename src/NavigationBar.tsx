import { Container, Navbar } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>✍️ 매일 글쓰기</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavigationBar