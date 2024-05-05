import Carousel from "./components/Carousel";
import catFirst from './assets/first.jpeg';
import catSecond from './assets/second.jpeg';
import catThird from './assets/third.jpeg';



function App() {
    const img = [catFirst, catSecond, catThird];

  return (
      <div className="App">
          <Carousel images={img} />
      </div>
  );
}

export default App;
