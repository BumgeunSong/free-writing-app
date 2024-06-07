function CurrentDate() {
    return (
        <div>
            <p>{getFormattedDate()}</p>
        </div>
    )
}

export default CurrentDate

function getFormattedDate(): string {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const paddedMonth = String(month).padStart(2, '0')
    const day = today.getDate()
    const paddedDay = String(day).padStart(2, '0')

    return `${year}. ${paddedMonth}. ${day}`
}