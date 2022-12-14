import { useRef } from "react";
import "./QuranItem.css";

const QuranItem = ({
  juz_number,
  juz_description,
  juz_radio,
  total_pledged,
  handleChecker,
}) => {
  const first_check = useRef(false);
  const second_check = useRef(false);
  const full_check = useRef(false);
  // const added_radio_check = useRef(false);

  // const handleFirstChange = (e) => {
  //   if (full_check.current.checked == true) {
  //     added_radio_check.current.checked = true;
  //   } else if (second_check.current.checked == true) {
  //     full_check.current.checked = true;
  //   }
  // };

  const handleFirstChange = () => {
    if (full_check.current.checked === true) {
      full_check.current.checked = false;
    } else if (second_check.current.checked === true) {
      full_check.current.checked = true;
    }
  };

  // const handleSecondChange = (e) => {
  //   if (full_check.current.checked === true) {
  //     added_radio_check.current.checked = true;
  //   } else if (first_check.current.checked === true) {
  //     full_check.current.checked = true;
  //   }
  // };

  const handleSecondChange = () => {
    if (full_check.current.checked === true) {
      full_check.current.checked = false;
    } else if (first_check.current.checked === true) {
      full_check.current.checked = true;
    }
  };

  // const handleFullClick = () => {
  //   console.log("clicked");
  //   // full_check.current.checked = true;
  //   // first_check.current.checked = true;
  //   // second_check.current.checked = true;
  //   if (
  //     first_check.current.checked === true &&
  //     second_check.current.checked === false
  //   ) {
  //     second_check.current.checked = true;
  //     full_check.current.checked = true;
  //   } else if (
  //     second_check.current.checked === true &&
  //     first_check.current.checked === false
  //   ) {
  //     first_check.current.checked = true;
  //     full_check.current.checked = true;
  //   } else {
  //     first_check.current.checked = true;
  //     second_check.current.checked = true;
  //     full_check.current.checked = true;
  //   }
  // };

  const handleFullChange = () => {
    if (
      first_check.current.checked === true &&
      second_check.current.checked === false
    ) {
      second_check.current.checked = true;
    } else if (
      second_check.current.checked === true &&
      first_check.current.checked === false
    ) {
      first_check.current.checked = true;
    } else {
      first_check.current.checked = !first_check.current.checked;
      second_check.current.checked = !second_check.current.checked;
    }
  };

  return (
    <ul className="juz-review">
      <li className="juz-review-items juz-name-and-descriptions">
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          Juz {juz_number}
        </p>
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            backgroundColor: "#EAEAEA",
            borderRadius: "10px",
            padding: "2px",
          }}
        >
          {juz_description}
        </p>
      </li>
      <li
        className="juz-review-items juz-radios"
        onChange={(e) =>
          handleChecker(
            e,
            first_check.current.checked,
            second_check.current.checked,
            full_check.current.checked,
            juz_number
          )
        }
      >
        <input
          type="checkbox"
          id="first-half-check"
          name={juz_radio}
          style={{ margin: "0 0.4vw" }}
          ref={first_check}
          onChange={handleFirstChange}
        />
        <label className="juz-radio-half-label" id="first-half-check">
          1st half
        </label>
        <input
          type="checkbox"
          id="second-half-check"
          name={juz_radio}
          style={{ margin: "0 0.4vw" }}
          ref={second_check}
          onChange={handleSecondChange}
        />
        <label className="juz-radio-half-label" id="second-half-check">
          2nd half
        </label>
        <div className="full-juz-section">
          <input
            type="checkbox"
            id="full-juz"
            name={juz_radio}
            ref={full_check}
            onChange={handleFullChange}
          />
          {/* <input
            type="radio"
            id="full-juz"
            name={juz_radio}
            value="3"
            ref={full_check}
            onClick={handleFullClick}
          />
          <input
            type="radio"
            name={juz_radio}
            style={{ display: "none" }}
            ref={added_radio_check}
          /> */}
          <label className="juz-radio-full-label" id="full-juz">
            Full
          </label>
        </div>
      </li>
      <li className="juz-review-items total-pledged-section">
        <p
          style={{
            fontFamily: "Ledger",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
          }}
        >
          {total_pledged}
        </p>
      </li>
    </ul>
  );
};

export default QuranItem;
