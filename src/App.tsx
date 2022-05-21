import React, {useEffect, useState} from 'react';
import {useIncrement, useUserController} from "./cutomHook";
import {useDispatch, useSelector} from "react-redux";
import {actionIncrementUser} from "./store/userReducer";

const fetchData = () => {
  console.log('data')
  return 5

}

const IncrementComponent = () => {

  const [needToFetch, setNeedToFetch] = useState(false)
  const [value, setValue] = useState(0)
  console.log(value)

  useEffect(() => {

    // const initialValue = fetchData()
    // setValue(initialValue)
    const func = () => {
      console.log('listener is workink, '  + value)
    }
    document.addEventListener('click', func)
    return () => {
      document.removeEventListener('click', func)
    }
  }, [value])


  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => {
        setValue(value+1)
      }}>increment</button>
      <button onClick={() => {
        setNeedToFetch(!needToFetch)
      }}>setNeedToFetch</button>
    </div>
  );
}


const UserIncrement = () => {
  const {incrementUserCount, userCount} = useUserController()
  return (<>
    <div>
      <b>Users count: </b>
      <div>
        {userCount}
      </div>
    </div>
    <button onClick={() => {
      incrementUserCount()
    }}>Add new user</button>
  </>)
}

const SetUserCount = () => {
  const [inputVale, setInputValue] = useState('')
  const {setUserCount, userCount} = useUserController()
  return (<>
    <div>
      <b>Another Users count: </b>
      <div>
        {userCount}
      </div>
    </div>
    <input type="text" value={inputVale} onChange={e => setInputValue(e.target.value)}/>
    <button onClick={() => {
      let newUserCount = parseInt(inputVale)
      setUserCount(isNaN(newUserCount) ? 0 : newUserCount)
      setInputValue('')
    }}>SetUserCount</button>
  </>)
}

const TaskIncrement = () => {
  const [user, incrementUser] = useIncrement(0)


  console.log('rerender taks')

  return (<>
    <div>
      <b>Task count: </b>
      <div>
        {user}
      </div>
    </div>
    <button onClick={incrementUser}>Add new user</button>
  </>)
}

type Company = {
  state_id: number
}


const getCompanyFromApi = () => {
  return new Promise<Company>(res => {
    setTimeout(() => {
      const company: Company = {
        state_id: 2
      }
      res(company)
    }, 1000)
  })
}

enum CompanyStateId {
  Active = 1,
  Blocked = 2,

}



function App() {
  const company = {

  }

  useEffect(() => {
    getCompanyFromApi().then(company => {
      if (company.state_id === CompanyStateId.Blocked) {

      }

    })
  })


  return (
    <>
      {/*<IncrementComponent/>*/}
      <TaskIncrement/>
      <UserIncrement/>
      <SetUserCount/>
    </>
  )
}

export default App;
