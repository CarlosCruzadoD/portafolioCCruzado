import { Language } from "./Header/Language";
import ThemeSelection from "./Header/ThemeSelection";
import "./styles/header.css";

interface HeaderProps {
  home: string;
  about: string;
  portafolio: string;
  contact: string;
}

const Header = ({home, about, portafolio, contact}: HeaderProps) => {
  return (
    <header className="fixed w-full">
      <div className="lg:hidden menu-container flex justify-end p-3">
        <input type="checkbox" id="menu" className="hidden" />
        <label htmlFor="menu" className="hamburguer-menu">
          <div className="menu-top"></div>
          <div className="menu-middle"></div>
          <div className="menu-bottom"></div>
        </label>
        <div className="list-menu-container">
          <div className="list-menu-hamburguer">
            <ul className="min-w-[400px] text-center flex flex-col gap-10 overflow-auto p-4">
              <li>
                <a className="z-50" href="/">
                  {home}
                </a>
              </li>
              <li>
                <a href="/">{about}</a>
              </li>
              <li>
                <a href="/">{portafolio}</a>
              </li>
              <li>
                <a href="/">{contact}</a>
              </li>
            </ul>
            <div className="flex mt-4">
              <ThemeSelection />
              <Language />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex py-4">
        <Language />
        <div className="backdrop-blur-lg list-header w-full flex justify-between shadow-xl rounded-4xl items-center py-6 px-6 max-w-[1200px] mx-10">
          <h1 className="text-2xl">Carlos Cruzado</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="/">{home}</a>
              </li>
              <li>
                <a href="/">{about}</a>
              </li>
              <li>
                <a href="/">{portafolio}</a>
              </li>
              <li>
                <a href="/">{contact}</a>
              </li>
            </ul>
          </nav>
        </div>
        <ThemeSelection />
      </div>
    </header>
  );
};

export default Header;
