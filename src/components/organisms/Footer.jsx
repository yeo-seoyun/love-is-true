function Footer() {
  return (
    <>
      <footer className="w-full h-[30vh] flex">
        <div className="flex flex-col items-center gap-6 m-auto text-xs custom-gray sm:w-[90%]">
          <ul className="text-center space-y-1">
            <li>
              Company. <span>주식회사 러브이즈트루</span>
            </li>
            <li>
              Address.{" "}
              <span>26, Dasan-ro 6-gil, Jung-gu, Seoul, Republic of Korea</span>{" "}
              Call. <span>02 924 0975</span>
            </li>
            <li>
              Business License. <span>419-81-02856</span> Mail Order License.{" "}
              <span>제 2023-서울중구-0647 호</span>
            </li>
            <li>
              Owner. <span>Siyoung Lee</span> Email.
              <span>luvistrueofficial@gmail.com</span>
            </li>
            <li>
              Mon - Fri am 09 - pm 06.<span>Sat -Sun & Holiday off</span> Lunch.{" "}
              <span>12 : 00 pm - 1 : 00 pm</span>
            </li>
          </ul>
          <p>© 2021 LUVISTRUE </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
