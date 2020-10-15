export default function signIn() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'jfasfjalshalgh12hjl',
                user: {
                    name: 'Jefferson',
                    email: 'jefferson_akira@hotmail.com',
                },
            });
        }, 2000); 
    });
}
