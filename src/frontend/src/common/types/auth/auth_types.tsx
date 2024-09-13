export interface PropsSignIn {
  handleSubmit: (e: { preventDefault: () => void }) => Promise<void>
  setEmailOrUsername: (value: string) => void
  setPassword: (value: string) => void
}

export interface PropsSignUp {
  handleSubmit: (e: { preventDefault: () => void }) => Promise<void>
  setEmail: (value: string) => void
  setUsername: (value: string) => void
  setName: (value: string) => void
  setPassword: (value: string) => void
  setPasswordRepeat: (value: string) => void
}
