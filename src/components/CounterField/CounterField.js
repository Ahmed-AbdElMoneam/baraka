import { useState } from "react";
import "./CounterField.css";

const CounterField = ({
  field_title,
  field_id,
  handleTitleChange,
  handleZikrNumber,
}) => {
  const [val, setVal] = useState(0);

  const handleFieldValue = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      {field_id == 0 && (
        <input
          type="text"
          name={field_title}
          id="0"
          value={field_title}
          className="field-type"
          disabled
        />
      )}
      {field_id > 0 && (
        <select
          className="field-type field-type-arrow"
          name={field_title}
          id={field_id}
          onChange={(e) => handleTitleChange(e, val)}
          value={field_title}
        >
          <option value="Salawat">Salawat</option>
          <option value="Tasbeeh">Tasbeeh</option>
          <option value="Takbeer">Takbeer</option>
          <option value="Tahleel">Tahleel</option>
        </select>
      )}
      <select
        className="field"
        name={field_title}
        id={field_id}
        onChange={(e) => {
          handleFieldValue(e);
          handleZikrNumber(e, field_id, field_title, val);
        }}
        value={val}
        // defaultValue="zikrCount"
      >
        <optgroup label="Suggestions">
          <option value="0" disabled hidden>
            Zikr Count
          </option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="5000">5000</option>
        </optgroup>
      </select>
      {/* <input list="browsers" name="myBrowser" className="field" />
      <datalist id="browsers">
        <option value="Chrome" />
        <option value="Firefox" />
        <option value="Internet Explorer" />
        <option value="Opera" />
        <option value="Safari" />
        <option value="Microsoft Edge" />
      </datalist> */}
      {/* <input className="field" type="text" name="myText" value="Norway"></input> */}
      {/* <input
        // type="search"
        list="mylist"
        className="field"
        value={val}
        onChange={handleChange}
        onClick={handleClick}
      />
      <datalist id="mylist">
        <option value="Option 1" />
        <option value="Option 2" />
        <option value="Option 3" />
      </datalist> */}
      {/* <input
        className="field"
        list="browsers"
        name="field"
        onChange={handleCounter}
        value={counter}
      />
      <datalist id="browsers">
        <optgroup label="Suggestions">
          <option value="zikrCount" disabled hidden>
            Zikr Count
          </option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="5000">5000</option>
        </optgroup> */}
      {/* <option value="Chrome"></option>
        <option value="Firefox"></option>
        <option value="Internet Explorer"></option>
        <option value="Opera"></option>
        <option value="Safari"></option>
        <option value="Microsoft Edge"></option> */}
      {/* </datalist> */}
    </>
  );
};

export default CounterField;
