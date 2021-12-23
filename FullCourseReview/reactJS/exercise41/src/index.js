import { render } from "react-dom";
import Chart from "./LineChart";

const App = () => {
    return (
        <div>
            <h1>Chart</h1>
            <Chart />
        </div>
    );
};

render(<App />, document.getElementById("root"));