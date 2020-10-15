interface Response{
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'jfasfjalshalgh12hjlsdsdaaad',
                user: {
                    name: 'Jefferson',
                    email: 'jefferson_akira@hotmail.com',
                },
            });
        }, 2000); 
    });
}
