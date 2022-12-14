import "./Title.css";

const Title = () => {
  return (
    <>
      <div className="title-container">
        <h2 className="title-header">
          Welcome to Diana & Ahmed’s Baby’s Registry
        </h2>
        <p className="title-paragraph">
          Assalamu alaikum wa rahmatullahi wa barakatuhu! Thank you so much for
          joining us in welcoming our baby into this world! As we prepare for
          parenthood and this next stage of life, we’re truly grateful for the
          people Allah has placed in our lives whose prayers we cannot do
          without. Thank you for choosing to be a part of our baby’s journey! We
          are overwhelmed by your generosity in wanting to welcome our daughter
          into this world with the gift of love and warmth{" "}
          <span id="heart-span">&#10084;</span> Instead of a regular registry,
          we’re doing a thikr registry &#x1F4FF; We can’t think of a better way
          of honoring our daughter than with a gift that will carry her
          throughout her life and into her akhira. If you would like, you can
          sign up to make salawat &#x1F4FF; or contribute to a khatm on her
          behalf. We will gift her a collective certificate with everyone’s
          names at her birth, insha Allah &#x1F38A; We love you and we can’t
          wait for her to meet you &#129303; Diana & Ahmed
        </p>
      </div>
    </>
  );
};

export default Title;
