import { render } from "react-dom";
import LineChart from "./LineChart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Box from '@mui/material/Box';

const App = () => {
    return (
        <Provider store={store}>
            <Box component="h1" color="brown">Chart</Box>
            <LineChart />
        </Provider>
    );
};

render(<App />, document.getElementById("root"));