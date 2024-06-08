/// 날짜
/// 텍스트 에디터 (placeholer)

import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Editor() {
    const [text, setText] = useState("요즘 무슨 생각을 많이 하세요?")

    return (
        <MDEditor value={text} onChange={(text) => setText(text ?? '')} />
    )
}

export default Editor
