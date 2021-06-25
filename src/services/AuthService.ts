import { User, UserAttribute } from '../model/model';



export class AuthService {

    public async login(userName: string, password: string): Promise<User | undefined> {

        if(userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: 'someOne@email.com'
            }
        }
        else {
            return undefined;
        }
    }

    public async getUserAttribute(user: User):Promise<UserAttribute[]>{
        const result: UserAttribute[]= [];
        result.push({
            Name: 'description',
            Value: 'Best User Ever!'
        })
        result.push({
            Name: 'job',
            Value: 'Engineer'
        })
        result.push({
            Name: 'age',
            Value: '25'
        })
        result.push({
            Name: 'experience',
            Value: '3 Years'
        })
        return result;
    }
}