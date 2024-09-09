import {useEffect, useState} from "react";
import {getColorList, getLastColor} from "../helpers/getColors";

export const useColor = () => {
    const [color, setColor] = useState(getLastColor())
    const [colorList, setColorList] = useState(getColorList())
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleSubmitSaveColor = (e) => {
        e.preventDefault();
        const copyColor = [color, ...colorList]
        setColorList(copyColor);
    }

    useEffect(() => {
        localStorage.setItem("colors", JSON.stringify(colorList));
    }, [colorList]);

    return {
        color, colorList, handleColorChange, handleSubmitSaveColor
    }
}