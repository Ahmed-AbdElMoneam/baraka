import { useState } from "react";
import QuranItem from "../QuranItem/QuranItem";
import "./QuranJuzs.css";

const QuranJuzs = ({ handleChecker }) => {
  const quran_juzs = [
    {
      id: 1,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
    {
      id: 2,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
    {
      id: 3,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
    {
      id: 4,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
    {
      id: 5,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
    {
      id: 6,
      juz_description: "Fatiha 1 : Baqarah 141",
      total_pledged: 3.5,
    },
  ];
  const [juzs, setJuzs] = useState(quran_juzs);
  return (
    <ul className="content-quran-list">
      {juzs.map((juz) => {
        return (
          <li key={juz.id} className="quran-list-item">
            <QuranItem
              juz_number={juz.id}
              juz_description={juz.juz_description}
              juz_radio={juz.id}
              total_pledged={juz.total_pledged}
              handleChecker={handleChecker}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default QuranJuzs;
