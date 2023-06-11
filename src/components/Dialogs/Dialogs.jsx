import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.container}>
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <div className={s.dialog + ' ' + s.active}>
                        Joy
                    </div>
                    <div className={s.dialog}>
                        Officer K
                    </div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Oh you don't even smile</div>
                    <div className={s.message}>you got damn right</div>
                    <div className={s.message}>why ?</div>
                </div>
            </div>
        </div>


    );
}
export default Dialogs;