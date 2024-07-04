import { Link } from "react-router-dom";

export const NavBar = () => {
  // adresse du logo
  const logo = "../assets/img/logo.png";

  return (
    <>
      <header className="px-5 shadow-lg navbar bg-neutral txt-neutral-content">
        <nav className="w-full">
          <Link to={"/"}>
            <img src={logo} className="w-auto h-10"></img>
          </Link>
          <div className="m-auto w-fit">
            <ul className="flex items-center gap-10"></ul>
          </div>
        </nav>
      </header>
    </>
  );
};
