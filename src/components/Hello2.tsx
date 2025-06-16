const Hello2 = () => {
    const onClick = () => {
        alert('Hello2')
    }
    const text = 'Hello2'

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello2