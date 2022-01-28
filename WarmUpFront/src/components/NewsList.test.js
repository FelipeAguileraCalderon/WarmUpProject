import ReactDOM from "react-dom";
import NewsList from './NewsList';

test('Render without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewsList />, div);
});