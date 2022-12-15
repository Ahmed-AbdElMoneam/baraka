import { useEffect, useState, useRef } from "react";
import ZikrList from "../ZikrList/ZikrList";
import QuranList from "../QuranList/QuranList";
import "./Form.css";
import { totalRef, updateRef } from "../../firebase";
import { getDocs, updateDoc } from "@firebase/firestore";

const Form = ({ setOpenModal, handleGetData }) => {
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

  const handleTitleChange = (e, val) => {
    const target_field_id = e.target.id;
    const target_field_type = e.target.value;
    const target_field_value = val;

    const zikr_record = user_total.filter(
      (zikr) => zikr.zikr_type == target_field_type
    );
    const previous_count = zikr_record[0].count;
    const other_zikr_records = user_total.filter(
      (zikr) => zikr.zikr_type != target_field_type
    );

    setAzkar((prevAzkar) => {
      const other_azkar = prevAzkar.filter(
        (field) => field.id != target_field_id
      );
      const targeted_azkar = prevAzkar.filter(
        (field) => field.id == target_field_id
      );
      let ordered_azkar = [];
      // console.log(targeted_azkar);
      // zikr_number: zikr_number;
      targeted_azkar[0].zikr_number
        ? (ordered_azkar = [
            ...other_azkar,
            {
              id: Number(target_field_id),
              field_title: target_field_type,
              zikr_number: targeted_azkar[0].zikr_number,
            },
          ])
        : (ordered_azkar = [
            ...other_azkar,
            {
              id: Number(target_field_id),
              field_title: target_field_type,
            },
          ]);
      ordered_azkar.sort((a, b) => a.id - b.id);
      return ordered_azkar;
    });

    other_zikr_records.push({
      zikr_type: target_field_type,
      count: Number(previous_count) + Number(target_field_value),
    });
    setTotalAzkar(other_zikr_records);
    // setTotalAzkar((prevTotalAzkar) => {
    //   const zikr_record = prevTotalAzkar.filter(
    //     (zikr) => zikr.zikr_type == target_field_type
    //   );
    //   return zikr_record;
    //   // const previous_count = zikr_record[0].count;
    //   // const other_zikr_records = prevTotalAzkar.filter(
    //   //   (zikr) => zikr.zikr_type != target_field_type
    //   // );
    //   // let total_array = [];
    //   // Number(previous_count)
    //   //   ? (total_array = [
    //   //       ...other_zikr_records,
    //   //       {
    //   //         zikr_type: target_field_type,
    //   //         count: Number(previous_count) + Number(target_field_value),
    //   //       },
    //   //     ])
    //   //   : (total_array = [
    //   //       ...other_zikr_records,
    //   //       {
    //   //         zikr_type: target_field_type,
    //   //         count: Number(previous_count),
    //   //       },
    //   //     ]);
    //   // return total_array;
    // });
    // let total_array = [];
    // azkar.map((zikr) => {
    //   if (zikr.field_title === "Salawat") {
    //     total_array[0] = Number(total_array[0]) + Number(zikr.zikr_number);
    //   } else if (zikr.field_title === "Tasbeeh") {
    //     total_array[1] = Number(total_array[1]) + Number(zikr.zikr_number);
    //   } else if (zikr.field_title === "Takbeer") {
    //     total_array[2] = Number(total_array[2]) + Number(zikr.zikr_number);
    //   } else if (zikr.field_title === "Tahleel") {
    //     total_array[3] = Number(total_array[3]) + Number(zikr.zikr_number);
    //   }
    // });
    // setTotalAzkar((prevTotalAzkar) => {
    //   let total_azkar_array = [];
    //   prevTotalAzkar.map((zikr) => {
    //     if (zikr.zikr_type === "Salawat") {
    //       total_azkar_array[0] =
    //         Number(total_azkar_array[0]) + Number(zikr.count);
    //     } else if (zikr.zikr_type === "Tasbeeh") {
    //       total_azkar_array[1] =
    //         Number(total_azkar_array[1]) + Number(zikr.count);
    //     } else if (zikr.zikr_type === "Takbeer") {
    //       total_azkar_array[2] =
    //         Number(total_azkar_array[2]) + Number(zikr.count);
    //     } else if (zikr.zikr_type === "Tahleel") {
    //       total_azkar_array[3] =
    //         Number(total_azkar_array[3]) + Number(zikr.count);
    //     }
    //   });
    //   total_array.map((zikr, index) => {
    //     total_array[index] = Number(zikr) + Number(total_azkar_array[index]);
    //   });
    //   const other_zikr_records = prevTotalAzkar.filter(
    //     (zikr) =>
    //       zikr.zikr_type != "Salawat" &&
    //       zikr.zikr_type != "Tasbeeh" &&
    //       zikr.zikr_type != "Takbeer" &&
    //       zikr.zikr_type != "Tahleel"
    //   );
    //   return [
    //     ...other_zikr_records,
    //     {
    //       zikr_type: "Salawat",
    //       count: total_array[0],
    //     },
    //     {
    //       zikr_type: "Tasbeeh",
    //       count: total_array[1],
    //     },
    //     {
    //       zikr_type: "Takbeer",
    //       count: total_array[2],
    //     },
    //     {
    //       zikr_type: "Tahleel",
    //       count: total_array[3],
    //     },
    //   ];
    // });
  };

  const handleZikrNumber = (e, field_id, field_title, field_value) => {
    const field_name = field_title;
    const zikr_number = e.target.value;

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

    setTotalAzkar((prevTotalAzkar) => {
      const zikr_record = prevTotalAzkar.filter(
        (zikr) => zikr.zikr_type == field_name
      );
      const previous_count = zikr_record[0].count;
      const other_zikr_records = prevTotalAzkar.filter(
        (zikr) => zikr.zikr_type != field_name
      );
      return [
        ...other_zikr_records,
        {
          zikr_type: field_name,
          count: Number(previous_count) + Number(zikr_number),
        },
      ];
    });
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

  const handlePledge = (e) => {
    e.preventDefault();
    // console.log(submitted);

    setOpenModal(true);
    handleGetData(azkar, juzs, user_total, users_total);

    // let totalData = {
    //   // user_total,
    //   users_total: user_total,
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
