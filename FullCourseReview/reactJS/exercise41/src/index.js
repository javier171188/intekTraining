import { render } from "react-dom";
import LineChart from "./LineChart";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <h1>Chart</h1>
            <LineChart />
        </Provider>
    );
};

render(<App />, document.getElementById("root"));