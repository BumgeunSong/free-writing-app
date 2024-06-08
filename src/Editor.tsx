import MDEditor, { TextAreaTextApi } from "@uiw/react-md-editor";
import { useState } from "react";
import CurrentDate from "./CurrentDate";
import { Col, Container, Row } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledMDEditor = styled.div`
    .w-md-editor {
    background-color: #ffffff !important; /* Change to your desired color */
    color: black;
    box-shadow: none;
  }
`

const EditorTitle = styled.h1`
    text-align: left;
`

function Editor() {
    const [text, setText] = useState("")
    return (
        <Container>
            <Row className="px-2 pt-4">
                <Col>
                    <EditorTitle>
                        <CurrentDate />
                    </EditorTitle>
                </Col>
            </Row>
            <Row>
                <Col>
                    <StyledMDEditor>
                        <MDEditor
                            value={text}
                            autoFocus={true}
                            onChange={(text) => setText(text ?? '')}
                            fullscreen={false}
                            preview="edit"
                            hideToolbar={true}
                            textareaProps={{
                                placeholder: "요즘 무슨 생각을 많이 하세요?",
                            }}
                        />
                    </StyledMDEditor>
                </Col>
            </Row>
        </Container>
    )
}

export default Editor
