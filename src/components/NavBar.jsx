import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.png";
import { HeaderItem } from "./HeaderItem";

export const NavBar = () => {
  // Equivalent du 'import logo' au dessus
  // const logo = "/src/assets/img/logo.png";

  return (
    <>
      <header className="px-5 shadow-lg navbar bg-neutral txt-neutral-content">
        <nav className="w-full">
          <Link to={"/"}>
            <img src={logo} className="w-auto h-10"></img>
          </Link>
          <div className="m-auto w-fit">
            <ul className="flex items-center gap-10">
              <li>
                <HeaderItem href="/products">products</HeaderItem>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
