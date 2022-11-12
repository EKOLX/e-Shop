import db from '../database/db.json';
import User from '../models/User';

export const signInAsync = async (username: string, password: string): Promise<User> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            const response = db.users
                .find(user => user.username === username && user.password === password);

            if (response) {
                const user: Partial<User> = response as User;
                delete user.password;

                resolve(user as User);
            }
            else {
                reject(new Error('No such user'));
            }
        }, 2000)
    );