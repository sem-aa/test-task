import Modal from "../components/modal/Modal";
import { btnBorrower, btnLender } from "../helpers/constants";

const Role = ({setRole}) => {
    const title = "Chose your role";
  const text = "Please chose your role in service";
  const handleBorrower = () => {
    localStorage.setItem("role", btnBorrower.name) 
    setRole(btnBorrower);

  } 
  const handleLender = () => {
    localStorage.setItem("role", btnLender.name);
    setRole(btnLender)
  } 

  return (
    <Modal
      title={title}
      text={text}
      clickBtn1={handleBorrower}
      clickBtn2={handleLender}
      iconBtn1={btnBorrower.icon}
      nameBtn1={btnBorrower.name}
      nameBtn2={btnLender.name}
      iconBtn2={btnLender.icon}
    />
  );
};

export default Role;
