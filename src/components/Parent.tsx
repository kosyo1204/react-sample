import React, { memo, useCallback, useState } from 'react'

type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const { isFizz } = props
    console.log(`Fizzコンポーネントがレンダリングされました, isFizz=${isFizz}`)
    return (<span>{isFizz ? 'Fizz' : ''}</span>)
}

type BuzzProps = {
    isBuzz: boolean
    onClick: () => void
}
const Buzz = memo<BuzzProps>((props) => {
    const { isBuzz, onClick } = props
    console.log(`Buzzコンポーネントがレンダリングされました, isBuzz=${isBuzz}`)
    return (<span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>)
})

export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    // 毎回定義するのでBuzzも再レンダリングされる
    const onBuzzClick = useCallback(() => {
        console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
    }, [])
    console.log(`Parentコンポーネントがレンダリングされました, count=${count}`)
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>カウントアップ</button>
            <p>{`現在のカウント: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}