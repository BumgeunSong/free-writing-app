import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { freeWritingText } from './atoms';
import styled from '@emotion/styled'

const TextFieldContainer = styled.div`
    display: block;
`

function FreeWritingTextField() {
    const [text, setText] = useRecoilState(freeWritingText)
    return (
        <TextFieldContainer>
            <TextField
                multiline
                value={text}
                onChange={(event) => {
                    setText(event.target.value)
                }} />
        </TextFieldContainer>
    )
}

export default FreeWritingTextField