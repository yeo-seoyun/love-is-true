import { Link } from "react-router-dom";
import JoinFrom from "../components/molecule/JoinFrom";

function Join() {
  return (
    <>
      <section className="max-w-[90%] flex flex-col gap-10 items-center m-auto py-28 whitespace-nowrap  text-sm">
        <h2 className="sr-only">회원가입</h2>
        <JoinFrom />

        <article className="w-[300px]">
          <div className="w-full flex items-center justify-around gap-2 text-center text-sm">
            <Link
              to="/"
              aria-label="네이버 로그인"
              className="border border-black-100 p-2 w-full"
            >
              JOIN
            </Link>
            <Link
              to="/"
              aria-label="카카오 로그인"
              className="border border-black-100 p-2 w-full"
            >
              CANCEL
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

export default Join;
