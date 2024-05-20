import { useRecoilValue } from "recoil"
import { freeWritingText } from "./atoms"

function CharacterCounter() {
    const text = useRecoilValue(freeWritingText)
    return (
        <span>
            글자 수: {text.trim().length}
        </span>
    )
}

export default CharacterCounter;