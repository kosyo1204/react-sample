import React from 'react'

const TitleContext = React.createContext('defa')

const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            <TitleContext.Provider value="Hello World">
                <Title />
            </TitleContext.Provider>
        </div>
    )
}

const Page = () => {
    return (
        // <TitleContext.Provider value="Hello World">
            <Header />
        // </TitleContext.Provider>
    )
}

const Container = (props: {title: string; children: React.ReactElement }) => {
    const { title, children } = props
    return (
        <div style={{ background: 'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>背景色がありまっせ</p>
        </Container>
    )
}

export default Page