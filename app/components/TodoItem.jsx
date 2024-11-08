/* eslint-disable react/prop-types */

import { useState } from "react";

export default function TodoItem({ job }) {
    // eslint-disable-next-line no-unused-vars
    const [editValue, setEditedValue] = useState(job.todo);

  return (
    <div className="flex gap-2">
        <input type="checkbox" name="" id="" />
        <p>{editValue}</p>
    </div>
  )
}
