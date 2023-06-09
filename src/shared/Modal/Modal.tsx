import './modal.scss'
import {useEffect, useState} from "react";

interface ModalProps {
    text: string,
    showModal: boolean
}

const Modal = (props: ModalProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        if (mounted) {
            setOpen(true);
        } else {
            setMounted(true);
        }
    }, [props.showModal]);
    return (
        open &&
        <div className={"modal"}>
            <span className={"close"} onClick={()=> setOpen(false)}>
              &times;
            </span>
            {props.text}
        </div>
    );
};

export default Modal;
