import { useLocation, useNavigate } from 'react-router-dom'
import SignInPage from './sign-in/sign_in_page'
import SignUpPage from './sign-up/sign_up_page'
import './auth_root_page.css'
import { Box } from '@mui/joy'
import { useState } from 'react'
import signInImage from '../../assets/images/sign_in.png'
import signUpImage from '../../assets/images/sign_up.jpg'
import { instance } from '../../utils/axios/instances'
import { useAppDispatch } from '../../hooks/auth'
import { signIn } from '../../store/auth/auth'

const AuthRootPage: React.FC = (): React.JSX.Element => {
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const pathname = useLocation().pathname

  if (pathname === '/sign-in') {
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault()

      try {
        const user = await instance.post(pathname, {
          emailOrUsername,
          password,
        })
        dispatch(signIn(user.data))
        navigate('/')
      } catch (e) {
        console.log(e)
      }
    }

    return (
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
            handleSubmit={handleSubmit}
            setEmailOrUsername={setEmailOrUsername}
            setPassword={setPassword}
          />
        </Box>
        <img src={signInImage} alt="sign in" />
      </div>
    )
  } else if (pathname === '/sign-up') {
    const handleSubmit = async (e: { preventDefault: () => void }) => {
      e.preventDefault()

      try {
        const user = await instance.post(pathname, {
          email,
          username,
          name,
          password,
          passwordRepeat,
        })
        console.log(user.data)
        navigate('/')
      } catch (e) {
        console.log(e)
      }
    }

    return (
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
            handleSubmit={handleSubmit}
            setEmail={setEmail}
            setUsername={setUsername}
            setName={setName}
            setPassword={setPassword}
            setPasswordRepeat={setPasswordRepeat}
          />
        </Box>
        <img src={signUpImage} alt="sign up" />
      </div>
    )
  } else return <></>
}

export default AuthRootPage
