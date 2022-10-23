import React, { Component } from 'react'
import {Button} from 'antd-mobile'
import { AntOutline } from 'antd-mobile-icons'
import appstyle from './styles/app.module.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <Button color='primary' fill='none' className={appstyle.login}>
          <AntOutline fontSize={12} />
          <span>登录</span>
          </Button>
        <Button color='success' fill='none'>2</Button>
        <Button color='danger' fill='none'>3</Button>
        <Button color='warning' fill='none'>4</Button>
        <Button color='Default' fill='none'>5</Button>
      </div>
    )
  }
}
