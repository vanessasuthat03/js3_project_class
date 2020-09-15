import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import EventKit from "../data/EventKit"

const LabelStyle = styled.label`
  color: #70adb5;
  margin-right: 10px;
`

const InputStyle = styled.input`
  background: #ffcbcb;
`

export default function LoginForm() {
  const [email, setEmail] = useState("test.user@willandskill.se")
  const [password, setPassword] = useState("js-lesson-10")
  const history = useHistory()

  const eventKit = new EventKit()

  function login() {
    eventKit
      .login(email, password)
      .then(res => res.json())
      .then(data => {
        eventKit.setToken(data.token)
        history.push("/event-list")
      })
  }
  return (
    <div>
      <h3>Login Form</h3>
      <div>
        <LabelStyle htmlFor="email">Email</LabelStyle>
        <InputStyle
          type="email"
          name="email"
          placeholder="user@hotmail.com"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
        ></InputStyle>
      </div>
      <div>
        <LabelStyle htmlFor="password">Password</LabelStyle>
        <InputStyle
          type="password"
          name="password"
          placeholder="Enter your password here"
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        ></InputStyle>
      </div>
      <button onClick={login}>Login</button>
    </div>
  )
}
