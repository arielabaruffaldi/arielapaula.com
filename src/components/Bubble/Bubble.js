import React from "react"
import PropTypes from "prop-types";
import style from "./Bubble.module.scss"

const Bubble = ({ width, x, y, color="black", opacity=1 }) => {
    const styles = {
        width: `${width}px`,
        transform: `translate(${x}px, ${y}px)`,
        color: color,
        opacity: opacity
    };

    return (

        <div className={style.Bubble}>
            <svg version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 216 216" style={styles}>
                <path d="M108,216L108,216C48.35,216,0,167.65,0,108v0C0,48.35,48.35,0,108,0h0c59.65,0,108,48.35,108,108v0
	            C216,167.65,167.65,216,108,216z" fill={color}/>
            </svg>
        </div >
    )
}
Bubble.propTypes = {
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
}

export default Bubble;