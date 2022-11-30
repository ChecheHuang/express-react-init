import React, { useState, createContext, useContext } from 'react'

const AppContext = createContext(null)

function Context() {
  const [userName, setUserName] = useState('userName')
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        <div>Context</div>
        <Child1 />
        <Child2 />
      </div>
    </AppContext.Provider>
  )
}

export default Context

function Child1() {
  const { userName } = useContext(AppContext)

  return (
    <div>
      <div>Child1</div>
      <div>{userName}</div>
    </div>
  )
}
function Child2() {
  const { setUserName } = useContext(AppContext)

  return (
    <div>
      <div>Child2</div>
      <button
        onClick={() => {
          setUserName('child2')
        }}
      >
        setUserName
      </button>
    </div>
  )
}
