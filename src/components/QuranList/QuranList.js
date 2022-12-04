import QuranHeader from "../QuranHeader/QuranHeader";
import QuranJuzs from "../QuranJuzs/QuranJuzs";
import "./QuranList.css";

const QuranList = ({ handleChecker, users_total }) => {
  return (
    <div>
      <QuranHeader />
      <QuranJuzs handleChecker={handleChecker} users_total={users_total} />
      <div className="quran-list-footer"></div>
    </div>
  );
};

export default QuranList;
