import { useState } from "react";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import { pledgeRef, updateRef } from "./firebase";
import { addDoc, updateDoc } from "@firebase/firestore";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});

  const handleGetData = (azkar, juzs, user_total, users_total) => {
    setData({
      azkar: azkar,
      juzs: juzs,
      user_total: user_total,
      users_total: users_total,
    });
  };

  const handleSubmit = (e, name, id) => {
    e.preventDefault();

    let arr = [];
    data.users_total.map((zikr) => {
      const record = data.user_total.find(
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
      azkar: data.azkar,
      juzs: data.juzs,
      user_total: data.user_total,
      name: name,
      id: id,
    };

    let totalData = {
      users_total: arr,
      // users_total: user_total,
    };

    updateDoc(updateRef, totalData);

    addDoc(pledgeRef, pledgeData).then(() => {
      // console.log("added");
      window.location.reload();
      // formRef.current.reset();
    });
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{ display: `${openModal ? "none" : "flex"}` }}
      >
        <div className="title-section">
          <Title />
        </div>
        <div className="content-section">
          <Form setOpenModal={setOpenModal} handleGetData={handleGetData} />
        </div>
      </div>
      {openModal && (
        <Modal closeModal={setOpenModal} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
