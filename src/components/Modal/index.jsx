import React, {useEffect} from "react";

import Portal from './Portal';

import { Overlay, Dialog } from "./style";

const Modal =({children, open, onClose})=> {
    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);

        return() => {
            window.removeEventListener('keydown', onEsc);
        };
    },[onClose]);

    if (!open) return null;

    function onOverlayClick(){
        onClose();
    }

    function onDialogClick(e){
        e.stopPropagation();//Utilizado para parar a propagação, sem isto ao clicar no Diolog o sistema encerraria a modal
    }



    return(
        <Portal>
            <Overlay onClick={onOverlayClick}> {/*Ao clicar fora da modal ele ira encerrar */}
                <Dialog onClick={onDialogClick}>
                    {children}
                </Dialog>
            </Overlay>
        </Portal>
);
};

export default Modal;