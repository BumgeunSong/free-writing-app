import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { freeWritingText } from './atoms';

function FreeWritingTextField() {
    const [text, setText] = useRecoilState(freeWritingText)
    return (
        <TextField
            multiline
            value={text}
            onChange={(event) => {
                setText(event.target.value)
            }} />
    )
}

export default FreeWritingTextField