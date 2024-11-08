/* eslint-disable react/prop-types */
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Select } from "@material-tailwind/react";
import { useState } from "react";

export default function Dashboard({ onSearch }) {

  const [theme, setTheme] = useState(false);

  return (
    <div className="my-2 w-full">
      <h1 className="font-semibold text-xl text-center my-2">TODO LIST</h1>
      <div className="flex mt-2 gap-2">
        <Input size="md" className="w-7/12">
          <Input.Field
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <Input.Icon placement="end">
            <FontAwesomeIcon icon={faSearch} />
          </Input.Icon>
        </Input>
        <Select size="lg">
          <Select.Trigger className="w-[22%]" placeholder="All" />
          <Select.List>
            <Select.Option defaultChecked >All</Select.Option>
            <Select.Option>Complete</Select.Option>
            <Select.Option>Incomplete</Select.Option>
          </Select.List>
        </Select>
        <Button size="lg" className="w-[10%]" onClick={ () => setTheme(!theme)}>
            <FontAwesomeIcon icon={theme ? faMoon : faSun} />
        </Button>
      </div>
    </div>
  );
}
