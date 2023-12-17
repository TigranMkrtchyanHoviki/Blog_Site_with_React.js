import videoCover from "../../video/Sultans of Swing - Dire Straits (Fingerstyle Guitar).mp4"
import CoverStyles from "./style.module.css"
import { Link } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Cover = () => {

    const [showInput, setShowInput] = useState(false)
    const [text, setText] = useState("leaf")

    const handlerShowInput = () => {
        setShowInput(true)
    }

    const handlerChangeText = () => {
        setShowInput(false)
    }

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                setShowInput(false)
            }
        })
    }, [])

    return (
        <div className={`${CoverStyles.cover_container}`}>
            <header>

                <div className={`${CoverStyles.header_inner_container}`}>
                    <div className={`${CoverStyles.logo_container}`}>
                        <img src={require("../../image/logo.png")} />
                    </div>
                    <nav>
                        <ul>
                            <a href="#">
                                <li>Ինչպես օգտվել</li>
                            </a>
                            <a href="#">
                                <li>Խանութներ</li>
                            </a>
                            <a href="#">
                                <li>Հարցեր</li>
                            </a>
                            <a href="#">
                                <li>Գրանցվել</li>
                            </a>
                        </ul>

                        <a
                            href="#"
                            className={`${CoverStyles.link_to_other_page}`}
                        >
                            <span>leaf վլոգ</span>
                        </a>
                    </nav>

                </div>

            </header>

            <video className={`${CoverStyles.video}`} src={videoCover} autoPlay loop muted />

            <div className={`${CoverStyles.texts}`}>
                <h3>

                    {
                        showInput
                            ?
                            <div className={`${CoverStyles.change_name_container}`}>
                                <input
                                    onChange={(e) => setText(e.target.value)}
                                    type="text"
                                    placeholder="որոշեք անուն"
                                />
                            </div>
                            :
                            ""
                    }
                    <span
                        onDoubleClick={handlerShowInput}>{text}</span>
                    <span>Բլոգ</span>
                </h3>

                <p>lorem lorem lorem lorem lorem loremlore lorem loremlorem lorem lorem lorem lorem</p>
            </div>

            <div className={`${CoverStyles.vlog_container}`}>
                <a >
                    <span>leaf վլոգ</span>
                </a>
            </div>

            <div className={`${CoverStyles.arrow_down}`}>
                <FaAngleDown className={`${CoverStyles.arrow_down_icon}`} />
            </div>

            <div
                onClick={handlerChangeText}
                className={`${CoverStyles.background}`}></div>
        </div>
    )
}

export default Cover