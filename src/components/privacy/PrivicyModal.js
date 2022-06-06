import Icon from "../svg/Icon";
import style from "./PrivacyModal.module.css";
import { colors, varStyle, numbers } from "../../helpers/constants";
import { useEffect, useState } from "react";
import { btnAgree, API_LINK } from "../../helpers/constants";
import Button from "../button/Button";

const PrivacyModal = ({ setRole }) => {
  const [html, setHtml] = useState();
  const [scrollEnd, setScrollEnd] = useState(false);

  const listenerScroll = (e) => {
    if (e.target.scrollHeight - e.target.scrollTop < numbers.heightDivHtml) {
      setScrollEnd(true);
    }
  };

  const handleBtn = () => {
    setRole(false);
  };

  useEffect(() => {
    fetch(API_LINK).then((response) =>
      response.json().then((data) => setHtml(data[0].text))
    );
  }, []);

  const title = "Tersm & Conditions";
  const text =
    "You should obliged to apply the Tersm & Conditions to use the service.";
  return (
    <div className={style.container}>
      <div onClick={handleBtn} className={style.iconClose}>
        <Icon
          id={"close"}
          colorIcon={colors.greyText}
          width={varStyle.sizeIcon10px}
          height={varStyle.sizeIcon10px}
        />
      </div>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      <div className={style.htmlContainer}>
        <div
          onScroll={listenerScroll}
          className={style.html}
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
        {!scrollEnd && <div className={style.gradientDiv}></div>}
      </div>
      {scrollEnd ? (
        <div onClick={handleBtn}>
          <Button nameButton={btnAgree.name} icon={btnAgree.icon} />
        </div>
      ) : (
        <Button
          styleBtn={{ background: colors.greyBg, color: colors.whiteColor }}
          colorIcon={colors.whiteColor}
          nameButton={btnAgree.name}
          icon={btnAgree.icon}
        />
      )}
    </div>
  );
};

export default PrivacyModal;
