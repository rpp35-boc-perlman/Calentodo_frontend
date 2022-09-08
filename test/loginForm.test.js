import React from 'react'
import LoginForm from '../client/src/components/loginForm/LoginForm.js';


import renderer from 'react-test-renderer';

describe('Login Form Tests', () => {

    // create a root before each test
    beforeEach(() => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);
    })

    // rest the dom after each test
    afterEach(() => {
        document.body.innerHTML = '';
    })

    it('Should render a login form', () => {
        const form = renderer.create(<LoginForm />).toJSON();
        expect(form).toMatchSnapshot();
    })

    it('Should render a login form with a username and password field', () => {
        // render the form
        const form = renderer.create(<LoginForm />)
        const email = form.root.find(el => el.testContent === 'Email')
        console.log(email)
    })

});