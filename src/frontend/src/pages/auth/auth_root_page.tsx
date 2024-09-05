import { useLocation } from "react-router-dom";
import SignInPage from "./sign-in/sign_in_page";
import SignUpPage from "./sign-up/sign_up_page";
import "./auth_root_page.css";
import { Box } from "@mui/joy";
import { useState } from "react";
import signInImage from "../../assets/images/sign_in.png";
import signUpImage from "../../assets/images/sign_up.jpg";

const AuthRootPage: React.FC = (): JSX.Element => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const location = useLocation();
  return location.pathname === "/sign-in" ? (
    <div className="root">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        margin="auto"
        padding="14px 0"
      >
        <SignInPage
          setEmailOrUsername={setEmailOrUsername}
          setPassword={setPassword}
        />
      </Box>
      <img src={signInImage} alt="sign in" />
    </div>
  ) : location.pathname === "/sign-up" ? (
    <div className="root">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        margin="auto"
        py={5}
      >
        <SignUpPage
          setEmail={setEmail}
          setUsername={setUsername}
          setName={setName}
          setPassword={setPassword}
          setPasswordRepeat={setPasswordRepeat}
        />
      </Box>
      <img src={signUpImage} alt="sign up" />
    </div>
  ) : (
    <></>
  );
};

export default AuthRootPage;
