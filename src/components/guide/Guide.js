import Button from "../button/Button";
import style from "./Guide.module.css";

const Guide = ({click}) => {
  const btnGuide = {
    icon: "guide",
    name: "Guide Flow",
  };
  const text = "Study the guide flow for the convenience of using the service.";
  return (
    <div onClick={click} className={style.container}>
      <Button icon={btnGuide.icon} nameButton={btnGuide.name} />
      <p className={style.text}>{text}</p>
    </div>
  );
};

export default Guide;
