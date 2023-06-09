import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee.tsx";
import CurrentEmployees from "./Pages/CurrentEmployees/CurrentEmployees.tsx";
import {store, persistor} from "./redux/configureStore.ts";
import {PersistGate} from "redux-persist/integration/react";

function App() {

    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <Routes>
                            <Route path={"/"} element={<CreateEmployee/>}/>
                            <Route path={"/current"} element={<CurrentEmployees/>}/>
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </>
    )
}

export default App
