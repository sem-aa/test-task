import style from "./MenuMobile.module.css";
import { colors, arrNavigate } from "../../helpers/constants";
import Button from "../button/Button";

const MenuMobile = () => {
  let id = 0;
  return (
    <div className={style.menu}>
      <div className={style.btnContainer}>
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
        <Button icon={"signup"} nameButton={"Sign Up"} />
        <ul className={style.list}>
          {arrNavigate.map((item) => (
            <li key={(id += 1)} className={style.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
