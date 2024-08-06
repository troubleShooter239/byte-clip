export interface PropsSignIn {
  setEmailOrUsername: (value: string) => void;
  setPassword: (value: string) => void;
}

export interface PropsSignUp {
  setEmail: (value: string) => void;
  setUsername: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setPasswordRepeat: (value: string) => void;
}
