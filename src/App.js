import Header from "./components/header/Header";
import Container from "./components/container/Container";
import ChooseRole from "./views/ChooseRole";
import ActiveRole from "./views/ActiveRole";
import { useState, useEffect } from "react";
import { btnBorrower, btnLender } from "./helpers/constants";

function App() {
  const [role, setRole] = useState();
  useEffect(() => {
    if (localStorage.getItem("role") === btnBorrower.name) {
      setRole(btnBorrower);
    }
    if (localStorage.getItem("role") === btnLender.name) {
      setRole(btnLender);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        {role === false ? null : role ? (
          <ActiveRole role={role} setRole={setRole} />
        ) : (
          <ChooseRole setRole={setRole} />
        )}
      </Container>
    </>
  );
}

export default App;
