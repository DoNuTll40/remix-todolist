/* eslint-disable react/prop-types */

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function TodoItem({ job, status, count, length }) {
    // eslint-disable-next-line no-unused-vars
    const [editValue, setEditedValue] = useState(job.todo);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`flex gap-2 justify-between pb-2 ${count === length ? "border-none" : "border-b"} group`}>
            <div className="flex gap-2 line-clamp-1 w-11/12">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isChecked || status}
                        onChange={handleCheckboxChange}
                        className="form-checkbox hover:cursor-pointer"
                    />
                    <p className={`line-clamp-1 ${isChecked || status ? 'line-through select-none opacity-50' : ''}`}>{editValue}</p>
                </label>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4 w-1/12 justify-end">
                <FontAwesomeIcon icon={faPen} className="hover:text-[#6c63ff] opacity-25 hover:opacity-100 hover:cursor-pointer" />
                <FontAwesomeIcon icon={faTrash} className=" hover:text-red-500 opacity-25 hover:opacity-100 hover:cursor-pointer" />
            </div>
        </div>
    );
}
