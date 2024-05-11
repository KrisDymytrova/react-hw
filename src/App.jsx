import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card>
        <Card.Body>
          <Card.Title>Title</Card.Title>
          <Card.Text>Text</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
