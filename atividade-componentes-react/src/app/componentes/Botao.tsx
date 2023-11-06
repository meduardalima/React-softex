"use client";
import "./styles.css";
const Botao = () => {
    function handleColor() {
        const button = document.getElementById("btn");
        if (button) {
            button.style.backgroundColor = "red";
        }
    }
    return (
        <div>
            <button id="btn" className="btn" onClick={handleColor}>
                Botao
            </button>
        </div>
    );
};

export default Botao;
