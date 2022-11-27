import QuranHeader from "../QuranHeader/QuranHeader";
import QuranJuzs from "../QuranJuzs/QuranJuzs";
import "./QuranList.css";

const QuranList = ({ handleChecker }) => {
  return (
    <div>
      <QuranHeader />
      <QuranJuzs handleChecker={handleChecker} />
      <div className="quran-list-footer"></div>
    </div>
  );
};

export default QuranList;
