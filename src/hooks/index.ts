import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store'
import actions, {ActionsType} from "store/actions";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppActions = <TSelected>(selector: (actions: ActionsType) => TSelected): TSelected => selector(actions)