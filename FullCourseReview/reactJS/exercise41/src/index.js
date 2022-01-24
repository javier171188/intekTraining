import { render } from "react-dom";
import LineChart from "./LineChart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Box from '@mui/material/Box';

const componentType = "h1";
const defaultColor = "brown";

const App = () => {
    return (
        <Provider store={store}>
            <Box component={componentType} color={defaultColor}>Chart</Box>
            <LineChart />
        </Provider>
    );
};

render(<App />, document.getElementById("root"));