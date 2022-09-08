import React from 'react'
import LoginForm from '../client/src/components/loginForm/LoginForm.js';
import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";

import renderer from 'react-test-renderer';

describe('Login Form Tests', () => {
    let container = '';
    const onClick = jest.fn();
    const onChange = jest.fn();
    const onSubmit = jest.fn();
    // create a root before each test
    beforeEach(() => {
        container = document.createElement("div");
        container.id = 'root';
        document.body.appendChild(container);
    })

    // rest the dom after each test
    afterEach(() => {
        unmountComponentAtNode(document);
        container.remove();
        container = null;
    })


    it('Should render a login form with Email, Password Fields, and a message ', () => {
        act(() => {
            render(
                <LoginForm
                    mode="login"
                    setMessage={onClick}
                    handleSignIn={onSubmit}
                    handleSignUp={onSubmit}
                    message="Test Message"
                />, container);
        })
        expect(container.querySelector('#email')).toBeTruthy();
        expect(container.querySelector('#password')).toBeTruthy();
        expect(container.querySelector('span').textContent).toBe('Test Message');
    })

    it('Should render a sign up form with Email, Password, and Confirm Password Fields, and a message ', () => {
        act(() => {
            render(
                <LoginForm
                    mode="create"
                    setMessage={onClick}
                    handleSignIn={onSubmit}
                    handleSignUp={onSubmit}
                    message="Test Message"
                />, container);
        })
        expect(container.querySelectorAll('input').length).toBe(3);
        expect(container.querySelector('span').textContent).toBe('Test Message');
    });

    it('Should trigger mode switch when "dont have account" is clicked', () => {
        act(() => {
            render(
                <LoginForm
                    mode="login"
                    setMode={onClick}
                    setMessage={onClick}
                    handleSignIn={onSubmit}
                    handleSignUp={onSubmit}
                />, container);
        })
        const button = container.querySelectorAll('button')[1];
        expect(button.textContent).toBe("Don't have an account yet?");
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("Should trigger a new message when the submit button is clicked", () => {
        act(() => {
            render(
                <LoginForm
                    mode="login"
                    setMode={onClick}
                    setMessage={onClick}
                    handleSignIn={onSubmit}
                    handleSignUp={onSubmit}
                />, container);
        })
        const button = container.querySelectorAll('button')[0];
        expect(button.textContent).toBe("Login");
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
        expect(onClick).toHaveBeenCalledTimes(2);
    });

    it('Should trigger a new message when the Sign up button is clicked', () => {
        act(() => {
            render(
                <LoginForm
                    mode="create"
                    setMode={onClick}
                    setMessage={onClick}
                    handleSignIn={onSubmit}
                    handleSignUp={onSubmit}
                />, container);
        })
        const button = container.querySelectorAll('button')[0];
        expect(button.textContent).toBe("Create Account");
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        })
        expect(onClick).toHaveBeenCalledTimes(3);
    });

});