import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { PropsSignUp } from "../../../common/types/auth/auth_types";

const SignUpPage: React.FC<PropsSignUp> = (props: PropsSignUp): JSX.Element => {
  const { setEmail, setUsername, setName, setPassword, setPasswordRepeat } =
    props;
  return (
    <>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Sign up
          </Typography>
          <Typography level="body-sm">
            Have already account?{" "}
            <Link href="sign-in" level="title-sm">
              Sign in!
            </Link>
          </Typography>
        </Stack>
        <Button
          variant="soft"
          color="neutral"
          fullWidth
          //startDecorator="/src/frontend/src/assets/images/google_logo.svg"
        >
          Sign up with Google
        </Button>
      </Stack>
      <Divider>or</Divider>
      <Stack gap={4} sx={{ mt: 2 }}>
        <form>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="repeat password"
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </FormControl>
          <Stack gap={4} sx={{ mt: 2 }}>
            <Button type="submit" fullWidth>
              Sign up
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default SignUpPage;
