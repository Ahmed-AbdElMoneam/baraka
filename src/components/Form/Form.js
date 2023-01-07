import { useEffect, useState, useRef } from "react";
import ZikrList from "../ZikrList/ZikrList";
import QuranList from "../QuranList/QuranList";
import "./Form.css";
import { totalRef, updateRef } from "../../firebase";
import { getDocs, updateDoc } from "@firebase/firestore";

const Form = ({ setOpenModal, handleGetData }) => {
  const [loading, setLoading] = useState(true);
  const [azkar, setAzkar] = useState([
    { id: 0, field_title: "Salawat", zikr_number: Number(0) },
    { id: 1, field_title: "Tasbeeh", zikr_number: Number(0) },
  ]);
  const [juzs, setJuzs] = useState([]);
  const [juz_total, setTotalJuzs] = useState([
    // { zikr_type: "Salawat", count: 0 },
    // { zikr_type: "Tasbeeh", count: 0 },
    // { zikr_type: "Takbeer", count: 0 },
    // { zikr_type: "Tahleel", count: 0 },
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

  const handleTitleChange = (e, field_id) => {
    const field_title = e.target.value;

    setAzkar((prevAzkar) => {
      const other_azkar = prevAzkar.filter((field) => field.id !== field_id);
      const targeted_zikr = prevAzkar.filter((field) => field.id === field_id);

      let ordered_azkar = [];

      targeted_zikr[0].zikr_number
        ? (ordered_azkar = [
            ...other_azkar,
            {
              id: Number(field_id),
              field_title: field_title,
              zikr_number: Number(targeted_zikr[0].zikr_number),
            },
          ])
        : (ordered_azkar = [
            ...other_azkar,
            {
              id: Number(field_id),
              field_title: field_title,
              zikr_number: Number(0),
            },
          ]);

      ordered_azkar.sort((a, b) => a.id - b.id);

      return ordered_azkar;
    });
  };

  const handleZikrNumber = (e, field_id, field_title) => {
    const zikr_value = e.target.value;

    setAzkar((prevAzkar) => {
      const other_azkar = prevAzkar.filter((field) => field.id !== field_id);

      const ordered_azkar = [
        ...other_azkar,
        {
          id: Number(field_id),
          field_title: field_title,
          zikr_number: Number(zikr_value),
        },
      ];

      ordered_azkar.sort((a, b) => a.id - b.id);

      return ordered_azkar;
    });
  };

  const handleAddingField = (e) => {
    e.preventDefault();
    setAzkar([
      ...azkar,
      { id: azkar.length, field_title: "Takbeer", zikr_number: Number(0) },
    ]);
  };

  const azkarSummer = () => {
    let azkar_total = [];

    azkar.map((zikr) => {
      const index = azkar_total.findIndex(
        (zikr_in_azkarTotal) =>
          zikr_in_azkarTotal.zikr_type === zikr.field_title
      );
      if (index > -1) {
        azkar_total[index] = {
          zikr_type: zikr.field_title,
          count: Number(zikr.zikr_number) + Number(azkar_total[index].count),
        };
      } else {
        azkar_total.push({
          zikr_type: zikr.field_title,
          count: Number(zikr.zikr_number),
        });
      }
    });

    return azkar_total;
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

    setTotalJuzs((prevTotalAzkar) => {
      const prevArray = prevTotalAzkar.filter(
        (arr) => arr.zikr_type !== `juz_${juz_number}`
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
  //   // juz_total,
  //   // users_total,
  // };

  const handlePledge = (e) => {
    e.preventDefault();
    // console.log(submitted);

    const azkar_total = azkarSummer();

    setOpenModal(true);
    handleGetData(azkar, juzs, azkar_total, juz_total, users_total);

    // let totalData = {
    //   // juz_total,
    //   users_total: juz_total,
    // };

    // addDoc(updateRef, totalData).then(() => {
    //   console.log("total added");
    //   // window.location.reload();
    //   // formRef.current.reset();
    // });
    // updateDoc(updateRef, totalData);
  };

  if (!loading) {
    return (
      <>
        <h1 className="content-header">Your Baraka Pledge</h1>
        <form className="content-form" ref={formRef}>
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
          <button className="pledge-button" onClick={handlePledge}>
            Pledge
          </button>
        </form>
      </>
    );
  }
};

export default Form;
