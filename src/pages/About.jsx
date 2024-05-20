import logo from "../assets/about.jpg";

function About() {
  return (
    <>
      <section className="max-w-[90%] h-full m-auto pb-28">
        <img
          src={logo}
          alt="러브이즈트루"
          className="h-[80vh] m-auto md:h-[45vh] sm:h-[35vh]"
        />

        <div className="flex flex-col items-center text-center gap-10 text-sm">
          <p>
            러브이즈트루는 심플, 미니멀, 컬러감이 있는 것들에서 영감을 받으며,
            시즌마다 재미있는 요소를 더한 위트 있는 컨템포러리 웨어를
            제안합니다.
            <br />
            사랑, 우정, 일 그리고 패션에 대해 자기만의 스타일을 가지고 있는
            사람들과 함께, 오늘도 사랑을 노래합니다. &quot;LUV IS TRUE&quot;
          </p>
          <p>
            LUV IS TRUE is inspired by simple, minimalist colors, and offers
            witty contemporary wear that adds spice to every season.
            <br />
            I sing love today with people who have their own style of love,
            friendship, work and fashion.
            <br />
            &quot;LUV IS TRUE&quot;
          </p>
          <p className="flex flex-col">
            <strong>Number</strong> (02) 924-0975
          </p>
          <p className="flex flex-col">
            <strong>Hours</strong> Mon - Fri am 10 - pm 06.Sat -Sun & Holiday
            off <br /> Lunch. 12 : 00 pm - 1 : 00 pm
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
