import React from 'react'
import { TODO } from '../types'

type TodoProps = {
  todo: TODO;
}

export default class Todo extends React.Component<TodoProps, {}>{
  render() {
    return (
      <div style={{ margin: '5px 0' }}>
        <span>{this.props.todo.id} {this.props.todo.title} {this.props.todo.content}</span>
      </div>
    )
  }
}