import Icon from "../svg/Icon";
import style from "./Button.module.css";
import { colors, varStyle } from "../../helpers/constants";

const Button = ({
  icon,
  nameButton,
  colorIcon = colors.darkText,
  sizeIconBtn = varStyle.iconSize,
  styleBtn = {background: colors.greenColor},
}) => {
  return (
    <div style={styleBtn} className={style.button}>
      <Icon id={icon} colorIcon={colorIcon} width={sizeIconBtn} height={sizeIconBtn} />
      <p className={style.text}>{nameButton}</p>
    </div>
  );
};

export default Button;
