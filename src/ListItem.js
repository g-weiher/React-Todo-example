import { useRef, useState } from "react";
import "./App.css";

export function ListItem({ id, title, onEdit, onDelete }) {
    const [edit, setEdit] = useState(false);
    const textInput = useRef(null);

    const onEditClick = () => {
        textInput.current.focus();
        setEdit(true);
    };
    const onAbortClick = () => {
        setEdit(false);
    };
    const onConfirmClick = () => {
        if (textInput.current.value !== title) {
            onEdit(id, textInput.current.value);
        }
        setEdit(false);
    };
    const renderContent = (edit) => {
        if (!edit) {
            return (
                <>
                    <span className="text" ref={textInput}>
                        {title}
                    </span>
                    <span className="bttn edit" onClick={onEditClick}></span>
                    <span className="bttn delete" onClick={onDelete}></span>
                </>
            );
        } else {
            return (
                <>
                    <input
                        className="text"
                        defaultValue={title}
                        ref={textInput}
                    />
                    <span
                        className="bttn confirm"
                        onClick={onConfirmClick}
                    ></span>
                    <span className="bttn abort" onClick={onAbortClick}></span>
                </>
            );
        }
    };
    return <li id={id}>{renderContent(edit)}</li>;
}
