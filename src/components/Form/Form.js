import { useEffect, useState, useRef } from "react";
import ZikrList from "../ZikrList/ZikrList";
import QuranList from "../QuranList/QuranList";
import "./Form.css";
import { pledgeRef, totalRef, updateRef } from "../../firebase";
import { addDoc, getDocs, updateDoc } from "@firebase/firestore";

const Form = () => {
  const [loading, setLoading] = useState(true);
  const [azkar, setAzkar] = useState([
    { id: 0, field_title: "Salawat" },
    { id: 1, field_title: "Tasbeeh" },
  ]);
  const [juzs, setJuzs] = useState([]);
  const [user_total, setTotalAzkar] = useState([
    { zikr_type: "Salawat", count: 0 },
    { zikr_type: "Tasbeeh", count: 0 },
    { zikr_type: "Takbeer", count: 0 },
    { zikr_type: "Tahleel", count: 0 },
    { zikr_type: "juz_1", count: 0 },
    { zikr_type: "juz_2", count: 0 },
    { zikr_type: "juz_3", count: 0 },
    { zikr_type: "juz_4", count: 0 },
    { zikr_type: "juz_5", count: 0 },
    { zikr_type: "juz_6", count: 0 },
    { zikr_type: "juz_7", count: 0 },
    { zikr_type: "juz_8", count: 0 },
    { zikr_type: "juz_9", count: 0 },
    { zikr_type: "juz_10", count: 0 },
    { zikr_type: "juz_11", count: 0 },
    { zikr_type: "juz_12", count: 0 },
    { zikr_type: "juz_13", count: 0 },
    { zikr_type: "juz_14", count: 0 },
    { zikr_type: "juz_15", count: 0 },
    { zikr_type: "juz_16", count: 0 },
    { zikr_type: "juz_17", count: 0 },
    { zikr_type: "juz_18", count: 0 },
    { zikr_type: "juz_19", count: 0 },
    { zikr_type: "juz_20", count: 0 },
    { zikr_type: "juz_21", count: 0 },
    { zikr_type: "juz_22", count: 0 },
    { zikr_type: "juz_23", count: 0 },
    { zikr_type: "juz_24", count: 0 },
    { zikr_type: "juz_25", count: 0 },
    { zikr_type: "juz_26", count: 0 },
    { zikr_type: "juz_27", count: 0 },
    { zikr_type: "juz_28", count: 0 },
    { zikr_type: "juz_29", count: 0 },
    { zikr_type: "juz_30", count: 0 },
  ]);
  const [users_total, setUsersTotal] = useState([]);

  const formRef = useRef(false);

  useEffect(() => {
    getDocs(totalRef)
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          // console.log(doc.data().users_total);
          setUsersTotal(doc.data().users_total);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleTitleChange = (e) => {
    const target_field_id = e.target.id;
    const target_field_type = e.target.value;

    setAzkar((prevAzkar) => {
      const other_azkar = prevAzkar.filter(
        (field) => field.id != target_field_id
      );
      const ordered_azkar = [
        ...other_azkar,
        { id: Number(target_field_id), field_title: target_field_type },
      ];
      ordered_azkar.sort((a, b) => a.id - b.id);
      return ordered_azkar;
    });
  };

  const handleZikrNumber = (e, val) => {
    const field_id = e.target.id;
    const field_name = e.target.name;
    const zikr_number = e.target.value;

    const zikr_record = user_total.filter(
      (zikr) => zikr.zikr_type === field_name
    );
    const previous_count = zikr_record[0].count;
    const other_zikr_records = user_total.filter(
      (zikr) => zikr.zikr_type !== field_name
    );

    setAzkar((prevAzkar) => {
      const other_azkar = prevAzkar.filter((field) => field.id != field_id);
      const ordered_azkar = [
        ...other_azkar,
        {
          id: Number(field_id),
          field_title: field_name,
          zikr_number: zikr_number,
        },
      ];
      ordered_azkar.sort((a, b) => a.id - b.id);
      return ordered_azkar;
    });

    other_zikr_records.push({
      zikr_type: field_name,
      count: Number(previous_count) + Number(zikr_number),
    });
    setTotalAzkar(other_zikr_records);
  };

  const handleAddingField = (e) => {
    e.preventDefault();
    setAzkar([...azkar, { id: azkar.length, field_title: "Takbeer" }]);
  };

  const handleChecker = (e, first, second, full, juz_number) => {
    let numeric_value_read = 0;
    let part = "";

    full
      ? (numeric_value_read = 1)
      : full === false
      ? (numeric_value_read = 0.5)
      : (numeric_value_read = 0);

    full
      ? (part = "full")
      : full === false && first === true
      ? (part = "first")
      : full === false && second === true
      ? (part = "second")
      : (part = "");

    setJuzs((prev) => {
      const edited_juzs = prev.filter((juz) => juz.id !== juz_number - 1);
      const juzID = juz_number - 1;
      return [
        ...edited_juzs,
        { id: juzID, juz: juz_number, read: numeric_value_read, part: part },
      ];
    });

    setTotalAzkar((prevTotalAzkar) => {
      const prevArray = prevTotalAzkar.filter(
        (arr) =>
          arr.zikr_type !== `juz_${juz_number}` && arr.zikr_type !== "Juzs"
      );
      return [
        ...prevArray,
        {
          zikr_type: `juz_${juz_number}`,
          count: Number(numeric_value_read),
        },
      ];
    });
  };

  // const submitted = {
  //   azkar,
  //   juzs,
  //   user_total,
  //   // users_total,
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(submitted);

    let arr = [];
    users_total.map((zikr) => {
      const record = user_total.find(
        (userRecord) => userRecord.zikr_type === zikr.zikr_type
      );
      // record && console.log(record.count);
      if (record) {
        arr.push({
          zikr_type: zikr.zikr_type,
          count: Number(zikr.count) + Number(record.count),
        });
      }
    });
    // console.log(arr);

    let pledgeData = {
      azkar,
      juzs,
      user_total,
    };

    let totalData = {
      users_total: arr,
      // users_total: user_total,
    };

    // addDoc(totalRef, totalData).then(() => {
    //   console.log("total added");
    //   // window.location.reload();
    //   // formRef.current.reset();
    // });

    updateDoc(updateRef, totalData);

    addDoc(pledgeRef, pledgeData).then(() => {
      // console.log("added");
      window.location.reload();
      // formRef.current.reset();
    });
  };

  if (!loading) {
    return (
      <>
        <h1 className="content-header">Your Baraka Pledge</h1>
        <form className="content-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="content-form-inputs">
            <ZikrList
              handleTitleChange={handleTitleChange}
              handleZikrNumber={handleZikrNumber}
              handleAddingField={handleAddingField}
              azkar={azkar}
            />
            <QuranList
              handleChecker={handleChecker}
              users_total={users_total.slice(4)}
            />
          </div>
          <button className="pledge-button">Pledge</button>
        </form>
      </>
    );
  }
};

export default Form;
