import { Container, Navbar, Stack } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar className="bg-body-tertiary" fixed="top">
            <Stack direction="horizontal" gap={2}>
                <Navbar.Brand>✍️ 매일 글쓰기</Navbar.Brand>
            </Stack>
        </Navbar>
    )
}

export default NavigationBar