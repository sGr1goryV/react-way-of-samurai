import React from "react";
import s from './Dialogs.module.css'
const Dialogs = () =>{
    return (
      <div className={s.dialogs}>
          <div className={s.dialogs_items}>
              <div className={s.item}>
                  Joy
              </div>
              <div className={s.item}>
                  Officer K
              </div>
          </div>
      </div>
    );
}
export default Dialogs;