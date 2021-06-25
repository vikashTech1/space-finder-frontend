import ReactDOM from 'react-dom';
import { NavBar } from '../../src/components/NavBar';
import { User } from '../../src/model/model';
import {StaticRouter} from 'react-router';
import {getByTestId} from '@testing-library/react'

describe('Navbar test suite', () => {

    let container: HTMLDivElement
    const someUser: User= {
        email: 'someEmail',
        userName: 'someUserName'
    }

    const baseLink = 'http://localhost'

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    test('renders correctly with user', () => {
        container= document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
                <NavBar user={someUser}/>
            </StaticRouter>,
         container)
         const links= container.querySelectorAll('a')
         expect(links[0].href).toBe(baseLink+'/');
         expect(links[1].href).toBe(baseLink+'/profile');
         expect(links[2].href).toBe(baseLink+'/spaces');
         expect(links[3].href).toBe(baseLink+'/logout');
    })

    test('renders correctly with user using data test', () => {
        container= document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
                <NavBar user={someUser}/>
            </StaticRouter>,
         container)
         
         const homeLink= getByTestId(container, 'home-link') as HTMLAnchorElement;
         expect(homeLink.href).toBe(baseLink+'/');

         const profileLink= getByTestId(container, 'profile-link') as HTMLAnchorElement;
         expect(profileLink.href).toBe(baseLink+'/profile');



        //  expect(links[0].href).toBe(baseLink+'/');
        //  expect(links[1].href).toBe(baseLink+'/profile');
        //  expect(links[2].href).toBe(baseLink+'/spaces');
        //  expect(links[3].href).toBe(baseLink+'/logout');
    })

    test('renders correctly without user using data test', () => {
        container= document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
                <NavBar user={undefined}/>
            </StaticRouter>,
         container)
         
         const loginLink= getByTestId(container, 'login-link') as HTMLAnchorElement;
         expect(loginLink.href).toBe(baseLink+'/login');
        
    })

})