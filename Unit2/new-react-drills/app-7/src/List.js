import React from 'react'
import Todo from './Todo'

function List(props) {

  const list = props.tasks.map((element, index) => {
    return <Todo task={element} key={index} />
  })
  return (
    <div>
      {list}
    </div>
  )
}

export default List
