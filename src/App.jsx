import "./App.css";
import Navbar from "/src/components/NavBar";
import DefaultButton, { SignUpButton, LoginButton } from "/src/components/Buttons"

export default function App() {
  return (
    <>
          <DefaultButton text="Hello!" />
          <LoginButton text="Login" />
          <SignUpButton text="Sign up!" />
          <Navbar />
    </>
  );
}
