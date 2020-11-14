import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'
import arrow from '../../assets/right-arrow.svg'
import SignInApi from "../../helpers/SignInApi";


const SignIn = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (localStorage.getItem('accessToken')) props.history.push('/home')
    })

    const handleSubmit = event => {
        event.preventDefault()

        let signInClient = new SignInApi()

        signInClient
            .signIn({
                username: username,
                password: password
            })
            .then(response => {
                let accessToken = response.headers['x-access-token']

                localStorage.setItem('accessToken', accessToken)
                // eslint-disable-next-line react/prop-types
                props.history.push('/home')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const validateForm = () => {
        return username.length > 0 && password.length > 0
    }

    return (
        <div>
            <Header/>
            <SignInLayout>
                <SignInContainer>
                    <SignInTitle>Sign In to the marvel pro App</SignInTitle>
                    <SignInForm onSubmit={handleSubmit}>
                        <FormInput
                            autoFocus
                            type='email'
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder={'Email'}
                        />
                        <FormInput
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={'Password'}
                        />
                        <FormButton disabled={!validateForm()} type={'submit'}>
                            Continue
                            <span>
              <StyledArrow src={arrow} />
            </span>
                        </FormButton>
                    </SignInForm>
                </SignInContainer>
            </SignInLayout>
        </div>
    );
};

const SignInLayout = styled.div`
  height: 94.6vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignInTitle = styled.h4`
  font-family: 'Poppins-SemiBold', serif;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  margin: 0 0 17px;
`

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 242px;
`

const FormInput = styled.input`
  width: 208px;
  height: 31px;
  margin: 0 0 5px 0;
  border: none;
  background: hsla(0,0%,100%,.1);
  font-family: 'Poppins-SemiBold', serif;
  padding-left: 29px;
  color: #ffffff;
  outline: none;
`

const FormButton = styled.button`
  background: none;
  color: #ffffff;
  font-family: 'Poppins-SemiBold', serif;
  font-size: 14px;
  text-align: right;
  border: none;
  outline: none;
`

const StyledArrow = styled.img`
  width: 19px;
  height: 9px;
`
export default SignIn
