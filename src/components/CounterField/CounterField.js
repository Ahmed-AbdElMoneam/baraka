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
    // console.log(e.target.value);
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
          onChange={(e) => handleTitleChange(e, field_id)}
          value={field_title}
        >
          <option value="Salawat">Salawat</option>
          <option value="Tasbeeh">Tasbeeh</option>
          <option value="Takbeer">Takbeer</option>
          <option value="Tahleel">Tahleel</option>
        </select>
      )}
      <input
        type="number"
        id={field_id}
        className="field"
        name={field_title}
        value={val ? val : ""}
        onChange={(e) => {
          handleFieldValue(e);
          handleZikrNumber(e, field_id, field_title, val);
        }}
        placeholder="Zikr Count"
      />
    </>
  );
};

export default CounterField;
