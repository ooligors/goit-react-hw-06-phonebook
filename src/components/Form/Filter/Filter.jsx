import React from "react";
import css from "./Filter.module.css";
export const Filter = ({ filter, onChange }) => { 
    return (
        <div className={css.div}>
       <label className={css.filterLabel}>Find contacts by name
            <input className={css.filterInput} type="text" name="filter" value={filter} onChange={ onChange} />
                </label>
         </div>
    );
}