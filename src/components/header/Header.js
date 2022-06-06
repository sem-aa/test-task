import style from "./Header.module.css";
import Button from "../button/Button";
import logo from "../../img/logo-generic.svg";
import { colors, arrNavigate, varStyle } from "../../helpers/constants";
import Icon from "../svg/Icon";
import { useState } from "react";
import MenuMobile from "../menu/MenuMobile";
import { freeTimeDoctor } from "../../helpers/functions";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const showFreeTimeDoctor = () => {
    console.log(freeTimeDoctor());
  } 

  let id = 0;
  return (
    <div className={style.container}>
      <img className={style.logo} src={logo} alt="logo" />
      {isOpen && (
        <>
          <div className={style.menu}>
            <MenuMobile />
          </div>
        </>
      )}
      <ul className={style.list}>
        {arrNavigate.map((item) => (
          <li key={(id += 1)} className={style.item}>
            {item}
          </li>
        ))}
        <div className={style.down}>
          <Icon
            id={"down"}
            width={"10px"}
            height={"10px"}
            colorIcon={colors.greenColor}
          />
        </div>
      </ul>
      <div  onClick={showFreeTimeDoctor} className={style.btnSign}>
        <Button
          styleBtn={{
            background: colors.darkText,
            marginRight: "10px",
            color: colors.greenColor,
          }}
          colorIcon={colors.greenColor}
          icon={"lock"}
          nameButton={"Sign Ip"}
        />
        <Button icon={"signup"} nameButton={"Sign Up"}/>
      </div>

      <div  onClick={openMenu} className={style.menuIcon}>
        <Icon
          id={"menu"}
          width={varStyle.sizeIcon25x}
          height={varStyle.sizeIcon25x}
        />
      </div>
    </div>
  );
};

export default Header;
