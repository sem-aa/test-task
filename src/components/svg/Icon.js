import sprite from "../../img/sprite.svg";
import { varStyle } from "../../helpers/constants";

const Icon = ({
  id,
  colorIcon,
  width = varStyle.iconSize,
  height = varStyle.iconSize,
}) => {
  return (
    <svg fill={colorIcon} width={width} height={height}>
      <use href={sprite + `#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
