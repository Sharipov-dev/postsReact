import classes from './Modal.module.css';
function Modal(props) {
  return (
    <>
      {props.isVisible ? (
        <>
          <div className={classes.backdrop} onClick={props.onClose} />
          <dialog open className={classes.modal}>
            {props.children}
          </dialog>
        </>
      ) : null}
    </>
  );
}

export default Modal;
