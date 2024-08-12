import { useLocation } from "react-router-dom";
import SignInPage from "./sign-in/sign_in_page";
import SignUpPage from "./sign-up/sign_up_page";
import "./auth_root_page.css";
import { Box } from "@mui/joy";
import { useState } from "react";

const AuthRootPage: React.FC = (): JSX.Element => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const location = useLocation();
  return (
    <div className="root">
      {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxWidth={640}
        margin="auto"
        padding={5}
        borderRadius={5}
      > */}
      {location.pathname === "/sign-in" ? (
        <SignInPage
          setEmailOrUsername={setEmailOrUsername}
          setPassword={setPassword}
        />
      ) : location.pathname === "/sign-up" ? (
        <SignUpPage
          setEmail={setEmail}
          setUsername={setUsername}
          setName={setName}
          setPassword={setPassword}
          setPasswordRepeat={setPasswordRepeat}
        />
      ) : null}
      {/* </Box> */}
      <img
        src="../../assets/images/signin_image.png"
        alt="background"
        width={100}
        height={100}
      />
    </div>
  );
};

export default AuthRootPage;
