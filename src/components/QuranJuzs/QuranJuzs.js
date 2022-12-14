import { useState } from "react";
import QuranItem from "../QuranItem/QuranItem";
import "./QuranJuzs.css";

const QuranJuzs = ({ handleChecker, users_total }) => {
  const quran_juzs = [
    {
      id: 1,
      juz_description: "Fatiha 1 : Baqarah 141",
    },
    {
      id: 2,
      juz_description: "Baqarah 142 : Baqarah 252",
    },
    {
      id: 3,
      juz_description: "Baqarah 253 : Imran 92",
    },
    {
      id: 4,
      juz_description: "Imran 93 : Nisa 23",
    },
    {
      id: 5,
      juz_description: "Nisa 24 : Nisa 147",
    },
    {
      id: 6,
      juz_description: "Nisa 148 : Ma'idah 81",
    },
    {
      id: 7,
      juz_description: "Ma'idah 82 : An'am 110",
    },
    {
      id: 8,
      juz_description: "An'am 111 : A'raf 87",
    },
    {
      id: 9,
      juz_description: "A'raf 88 : Anfal 40",
    },
    {
      id: 10,
      juz_description: "Anfal 41 : Tauba 92",
    },
    {
      id: 11,
      juz_description: "Tauba 93 : Hud 5",
    },
    {
      id: 12,
      juz_description: "Hud 6 : Yusuf 52",
    },
    {
      id: 13,
      juz_description: "Yusuf 53 : Ibrahim 52",
    },
    {
      id: 14,
      juz_description: "Hijr 1 : Nahl 128",
    },
    {
      id: 15,
      juz_description: "Isra 1 : Kahf 74",
    },
    {
      id: 16,
      juz_description: "Kahf 75 : Ta-Ha 135",
    },
    {
      id: 17,
      juz_description: "Anbiyaa 1 : Hajj 78",
    },
    {
      id: 18,
      juz_description: "Muminum 1 : Furqan 20",
    },
    {
      id: 19,
      juz_description: "Furqan 21 : Naml 55",
    },
    {
      id: 20,
      juz_description: "Naml 56 : Ankabut 45",
    },
    {
      id: 21,
      juz_description: "Ankabut 46 : Azhab 30",
    },
    {
      id: 22,
      juz_description: "Azhab 31 : Ya-Sin 27",
    },
    {
      id: 23,
      juz_description: "Ya-Sin 28 : Zumar 31",
    },
    {
      id: 24,
      juz_description: "Zumar 32 : Fussilat 46",
    },
    {
      id: 25,
      juz_description: "Fussilat 47 : Jasiyah 37",
    },
    {
      id: 26,
      juz_description: "Ahqaf 1 : Dhariyat 30",
    },
    {
      id: 27,
      juz_description: "Dhariyat 31 : Hadid 29",
    },
    {
      id: 28,
      juz_description: "Mujadilah 1 : Tahrim 12",
    },
    {
      id: 29,
      juz_description: "Mulk 1 : Mursalat 50",
    },
    {
      id: 30,
      juz_description: "Naba 1 : Nas 6",
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
              handleChecker={handleChecker}
              // total_pledged={users_total[juz.id - 1].count}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default QuranJuzs;
