const Menu = ({ showMenu }) => {
  return (
    <div
      className={`fixed ${
        showMenu ? "" : "translate-x-[100vw]"
      } top-24 right-0 w-screen h-[calc(100dvh_-_6rem)] px-2 py-4 text-2xl bg-slate-50 transition ease-in-out duration-300`}
    >
      <div className="flex flex-col justify-between gap-8 ">
        {/* Top links */}
        <ul className="flex flex-col items-center gap-4 h-[65dvh] overflow-y-auto">
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
          <li className="w-full">
            <a
              href="/"
              className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-full"
            >
              Link
            </a>
          </li>
        </ul>

        {/* Bottom links */}
        <div className="flex gap-4">
          <a
            href="/"
            className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-[50%]"
          >
            Link
          </a>
          <a
            href="/"
            className="inline-flex justify-center items-center rounded-full p-2 text-slate-300 font-semibold bg-slate-600 w-[50%]"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
