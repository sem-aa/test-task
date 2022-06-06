import Modal from "../components/modal/Modal";
import Guide from "../components/guide/Guide";
import Privacy from "../components/privacy/PrivicyModal";
import { useState } from "react";
import { colors, varStyle, btnClose } from "../helpers/constants";

const Borrower = ({ role, setRole }) => {
  const [isPrivacy, setIsPrivacy] = useState(false);

  const btnCancel = () => {
    localStorage.removeItem("role");
    setRole(false);
  };

  const hundleBtn = () => {
    setIsPrivacy(!isPrivacy)
  };

  const text = "You have chosen the role - ";

  return (
    <>
      {isPrivacy ? (
        <Privacy setRole={setRole} />
      ) : (
        <>
          <Modal
            title={role.name}
            id={role.icon}
            clickBtn1={hundleBtn}
            clickBtn2={btnCancel}
            sizeIcon={varStyle.sizeIcon25x}
            colorIcon={colors.greyBg}
            text={text}
            span={role.name}
            iconBtn1={role.icon}
            nameBtn1={role.name}
            nameBtn2={btnClose.name}
            sizeIconBtn2={varStyle.sizeIcon10px}
            iconBtn2={btnClose.icon}
            styleBtn2={{ background: colors.greyBg }}
          />
          <Guide click={hundleBtn} />
        </>
      )}
    </>
  );
};

export default Borrower;
