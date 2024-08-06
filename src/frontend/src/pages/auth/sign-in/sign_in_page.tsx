import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import { PropsSignIn } from "../../../common/types/auth/auth_types";

const SignInPage: React.FC<PropsSignIn> = (props: PropsSignIn): JSX.Element => {
  const { setEmailOrUsername, setPassword } = props;
  return (
    <>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography component="h1" level="h3">
            Sign in
          </Typography>
          <Typography level="body-sm">
            Not have any account?{" "}
            <Link href="sign-up" level="title-sm">
              Sign up!
            </Link>
          </Typography>
        </Stack>
        <Button
          variant="soft"
          color="neutral"
          fullWidth
          //startDecorator="/src/frontend/src/assets/images/google_logo.svg"
        >
          Continue with Google
        </Button>
      </Stack>
      <Divider>or</Divider>
      <Stack gap={4} sx={{ mt: 2 }}>
        <form>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email or username"
              onChange={(e) => setEmailOrUsername(e.target.value)}
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
          <Stack gap={4} sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link level="title-sm" href="forgot-password">
                Forgot your password?
              </Link>
            </Box>
            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};

export default SignInPage;
