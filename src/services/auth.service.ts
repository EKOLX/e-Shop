import db from '../database/db.json';

export const signIn = async (username: string, password: string): Promise<boolean> =>
    await new Promise((resolve, reject) =>
        setTimeout(() => {
            try {
                const isAuth = db.users
                    .some(user => user.username === username && user.password === password);

                resolve(isAuth);
            } catch (error) {
                reject(error);
            }
        }, 2000)
    );