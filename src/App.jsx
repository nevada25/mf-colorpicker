import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorPicker from "./components/ColorPicker";
import {useColor} from "./hooks/useColor";

const App = () => {
    const {color, colorList, handleColorChange, handleSubmitSaveColor} = useColor();
    return <div className="container">
        <ColorPicker color={color} colorList={colorList} handleColorChange={handleColorChange}
                     handleSubmitSaveColor={handleSubmitSaveColor}/>
    </div>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)