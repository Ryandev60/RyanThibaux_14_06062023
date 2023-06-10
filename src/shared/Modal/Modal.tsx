import '../../../../package-modal/modal/src/Modal/modal.scss'
import {useEffect, useState} from "react";

interface ModalProps {
    text: string,
    showModal: boolean
    error?: boolean
}
/**
 * Modal component.
 * @component
 * @param {ModalProps} props - Props for the Modal component.
 * @param {string} props.message - The message to display in the modal.
 * @param {boolean} props.showModal - Controls the visibility of the modal.
 * @param {boolean} [props.error] - Indicates if the modal should display an error style.
 * @returns {JSX.Element} The Modal component.
 * @example
 * // Example 1: Modal with success message.
 * <Modal message="Employee created successfully!" showModal={true} error={false} />
 *
 * // Example 2: Modal with error message.
 * <Modal message="Please fill all fields!" showModal={true} error={true} />
 */
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
        <div className={`modal ${props.error ? "modal-err" : "modal-success"}`}>
            <span className={"close"} onClick={()=> setOpen(false)}>
              &times;
            </span>
            {props.text}
        </div>
    );
};

//make proptypes


export default Modal;
