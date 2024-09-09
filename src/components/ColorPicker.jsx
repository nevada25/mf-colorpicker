

const ColorPicker = ({color, colorList, handleColorChange, handleSubmitSaveColor}) => {

    return (
        <>
            <form onSubmit={handleSubmitSaveColor}>
                <input type="color" name="color" id="color"
                       value={color}
                       onChange={handleColorChange}
                       className="form-control" style={{
                    width: "100%",
                    height: "300px",
                }}
                       placeholder="Seleccione un color"
                       title="seleccione un color"
                />
                <div className="text-center">
                    <h2 className="mt-3 fw-bolder">
                        <div style={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: color,
                            display: "inline-block",
                            margin: "0 1rem",
                            borderRadius: "100%"
                        }}>

                        </div>
                        {color}
                    </h2>
                    <button type="submit" className="btn btn-success">
                        Guardar Color
                    </button>
                </div>
            </form>
            <pre>
                {JSON.stringify(colorList, null, 2)}
            </pre>
        </>
    )
}

export default ColorPicker;