import { AppDispatch, RootState } from '../store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = (): boolean =>
  useAppSelector((state) => state.auth).isLogged
