import { Provider } from "react-redux";
import { useMemo } from "react";
import { makeStore } from "../redux/store";
import { Dashboard } from "../features/Dashboard";

export default function Home() {
    const store = useMemo(() => {
        return makeStore();
    }, []);

    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );
}
