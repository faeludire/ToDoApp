function App() {
    const { Container, Row, Col } = ReactBootstrap;
    return (
        <Container>
            <Row>
                <Col md={{offset: 3, span: 6}}>
                    <TodoListCard />
                </Col>
            </Row>
        </Container>
    );
}

function TodoListCard() {
    const [items, setItems] = React.useState(null);

    React.useEffect(() => {
        fetch('./items')
            .then(r => r.json())
            .then(setItems)
    }, []);

    const onNewItem = React.useCallback(
        newItem => {
            setItems([...items, newItem]);
        }, [items],
    );

    const onItemRemoval = React.useCallback(
        item => {
            const index = items.findIndex(i => i.id === item.id);
            setItems([...items.slice(0, index), ...items.slice(index + 1)]);
        }, [items],
    );

    if (items === null ) return 'Loading...';

    return (
        <React.Fragment>
            {items.length === 0 && (
                <p className="text-center">You have no todo items yet! Add one above!</p>
            )}
        </React.Fragment>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
