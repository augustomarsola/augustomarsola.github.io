import { useState } from "react";
import { Content } from "./HeaderMenu.styles";

export function HeaderMenu() {
  const [menuMobileActive, setMenuMobileActive] = useState("");

  function handleMenuMobileClick() {
    setMenuMobileActive((status) => (status ? "" : "isActive"));
  }

  return (
    <Content>
      <div>
        <svg
          width="50"
          height="52"
          viewBox="0 0 50 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6164 27.538L0 46.4085L19.0742 33.6169L26.6012 49.2901L42.3193 31.2732V52L49.92 43.269V11.4985L27.9295 36.7662L22.6164 27.538Z"
            fill="#EBEBEB"
          />
          <path
            d="M22.1736 0L0 43.8145L15.5322 29.5888L22.1736 15.9662L28.6675 29.5888L33.7593 23.6564L22.1736 0Z"
            fill="#BDC3C7"
          />
        </svg>
      </div>
      <div className={`menuMobileContainer ${menuMobileActive}`}>
        <button
          className="menuMobileButton"
          type="button"
          onClick={handleMenuMobileClick}
        >
          Menu
          <span className="menuMobileButton__icon">
            <i></i>
          </span>
        </button>
        <ul className="menuMobileContent">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Quem Sou</a>
          </li>
          <li>
            <a href="#">O Que Faço</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
    </Content>
  );
}
