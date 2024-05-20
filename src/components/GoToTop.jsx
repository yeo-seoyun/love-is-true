import topImage from "/assets/topbutton.png";

function GoToTop() {
  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-10 right-10 cursor-pointer sm:hidden">
      <img src={topImage} alt="상단으로 이동" onClick={MoveToTop} />
    </div>
  );
}

export default GoToTop;
