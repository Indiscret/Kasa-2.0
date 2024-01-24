import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
        <div className="Dropdwon">
            <button className="Dropdown_btn" onClick={() => setIsOpen(false)}>
                {title}
                <FontAwesomeIcon className="Dropdown_open" icon={faChevronUp} />
            </button>
            <p className="Dropdown_content">{content}</p>
        </div>
    ) : (
        <div className="Dropdown">
            <button className="Dropdown_btn" onClick={() => setIsOpen(true)}>
                {title}
                <FontAwesomeIcon className="Dropdown_close" icon={faChevronUp} />
            </button>
        </div>
    )
}

export default Dropdown