import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [memberId, setMemberId] = useState("");

  // 입력값이 변경될 때 호출될 함수입니다.
  const handleMemberIdChange = (event) => {
    setMemberId(event.target.value); // 상태를 업데이트합니다.
  };
  return (
    <>
      <section className="max-w-[90%] h-[70vh] flex flex-col items-center m-auto pb-28">
        <h2 className="sr-only">로그인</h2>
        <div className="w-1/3 flex flex-col items-center m-auto gap-3 text-sm">
          <label className="w-full">
            <input
              id="member_id"
              name="member_id"
              placeholder="ID"
              value={memberId}
              type="text"
              onChange={handleMemberIdChange}
              className="w-full p-2 border-b"
            />
          </label>
          <label className="w-full">
            <input
              id="member_pw"
              name="member_pw"
              placeholder="PASSWORD"
              value={memberId}
              type="text"
              onChange={handleMemberIdChange}
              className="w-full p-2 border-b"
            />
          </label>

          <div className="text-xs self-end">
            <span className="flex gap-1">
              FORGOT
              <Link to="" className="underline">
                ID
              </Link>{" "}
              OR{" "}
              <Link to="" className="underline">
                PASSWORD
              </Link>
              ?
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-6">
          <div className="w-1/6 flex items-center justify-around">
            <Link to="/join" aria-label="회원가입" className="hover:underline">
              JOIN
            </Link>
            <Link to="" aria-label="로그인" className="hover:underline">
              LOGIN
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-around gap-2 text-center text-sm">
            <Link
              to="/"
              aria-label="네이버 로그인"
              className="border border-black-100 p-2 w-full"
            >
              네이버 로그인
            </Link>
            <Link
              to="/"
              aria-label="카카오 로그인"
              className="border border-black-100 p-2 w-full"
            >
              카카오 로그인
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
