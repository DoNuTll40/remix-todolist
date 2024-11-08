/* eslint-disable react/prop-types */

import { useState } from "react";

export default function TodoItem({ job }) {
    // eslint-disable-next-line no-unused-vars
    const [editValue, setEditedValue] = useState(job.todo);

  return (
    <div>
        <p>{editValue}</p>
    </div>
  )
}
