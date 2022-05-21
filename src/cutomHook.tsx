import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actionIncrementUser, actionSetUserCount} from "./store/userReducer";

export const useIncrement = (initialValue?: number) => {
  const [value, setValue] = useState(initialValue ?? 2)

  const increment = () => {
    setValue(value + 1)
  }

  return [
    value,
    increment,
  ] as const
}


export const useUserController = () => {
  const dispatch = useDispatch()
  const userCount = useSelector((state: any) => state.user.userCount)

  const incrementUserCount = () => {
    dispatch(actionIncrementUser())
  }

  const setUserCount = (userCount: number) => {
    dispatch(actionSetUserCount(userCount))
  }

  return {
    userCount,
    incrementUserCount,
    setUserCount
  }
}
