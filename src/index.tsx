import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./custom.scss";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
