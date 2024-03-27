import "./App.css";
import Navbar from "/src/components/NavBar";
import DefaultButton, { SignUpButton, LoginButton } from "/src/components/Buttons"

export default function App() {
  return (
    <>
          <DefaultButton { ..."Testing" } />
          <SignUpButton { ..."Sign up!" }/>
          <LoginButton { ..."Login" }/>
          <Navbar />
    </>
  );
}
