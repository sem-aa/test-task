import Button from "../button/Button";
import Icon from "../svg/Icon";
import style from "./Modal.module.css";

const Modal = ({
  title,
  id,
  colorIcon,
  sizeIcon,
  text,
  span,
  iconBtn1,
  clickBtn1,
  clickBtn2,
  sizeIconBtn1,
  nameBtn1,
  iconBtn2,
  sizeIconBtn2,
  nameBtn2,
  styleBtn1,
  styleBtn2,
}) => {
  return (
    <div className={style.container}>
      <div className={style.titleFlex}>
        <h2 className={style.title}>{title}</h2>
        <Icon
          id={id}
          colorIcon={colorIcon}
          width={sizeIcon}
          height={sizeIcon}
        />
      </div>
      <p className={style.text}>
        {text} <span className={style.span}>{span}</span>
      </p>
      <div className={style.flexBtn}>
        <div onClick={clickBtn1}>
        <Button
          sizeIconBtn={sizeIconBtn1}
          icon={iconBtn1}
          nameButton={nameBtn1}
          styleBtn={styleBtn1}
        />
        </div>
        <div onClick={clickBtn2}>
        <Button
          sizeIconBtn={sizeIconBtn2}
          icon={iconBtn2}
          nameButton={nameBtn2}
          styleBtn={styleBtn2}
        />
        </div>
      </div>
    </div>
  );
};

export default Modal;
