function Join() {
  return (
    <>
      <section className="max-w-[90%] flex flex-col items-center m-auto py-28">
        <h2 className="sr-only">회원가입</h2>
        <article className="w-1/2 flex flex-col gap-4">
          <div className="w-full flex items-center gap-2 text-sm">
            <label className="w-28">아이디</label>
            <input type="text" className="border p-2" />
            <span className="text-xs">(영문소문자/숫자, 4~16자)</span>
          </div>
          <div className="w-full flex items-center gap-2 text-sm">
            <label className="w-28">비밀번호</label>
            <input type="text" className="border p-2" />
            <span className="text-xs">
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
            </span>
          </div>
          <div className="w-full flex items-center gap-2 text-sm">
            <label className="w-28">비밀번호 확인</label>
            <input type="text" className="border p-2" />
          </div>
          <div className="w-full flex items-center gap-2 text-sm">
            <label className="w-28">이름</label>
            <input type="text" className="border p-2" />
          </div>
        </article>
      </section>
    </>
  );
}

export default Join;
