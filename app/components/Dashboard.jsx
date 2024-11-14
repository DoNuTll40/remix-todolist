/* eslint-disable react/prop-types */
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Select } from "@material-tailwind/react";
import { useTheme } from "../contexts/ThemeContext";

export default function Dashboard({ onSearch, setAction, action }) {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="my-2 w-full">
      <h1 className="font-semibold text-xl text-center my-2">TODO LIST</h1>
      <div className="flex mt-2 gap-2">
        <Input size="md" className="w-8/12">
          <Input.Field
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <Input.Icon placement="end">
            <FontAwesomeIcon icon={faSearch} />
          </Input.Icon>
        </Input>
        <Select size="lg" value={action} onValueChange={ (e) => setAction(e)}>
          <Select.Trigger className="w-3/12" placeholder="All" />
          <Select.List>
            <Select.Option defaultValue defaultChecked value="" >All</Select.Option>
            <Select.Option value="true">Complete</Select.Option>
            <Select.Option value="false">Incomplete</Select.Option>
          </Select.List>
        </Select>
        <Button size="lg" className="w-1/12" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
        </Button>
      </div>
    </div>
  );
}
