interface LoginProps {
    email: string,
    password: string
}

export const loginApi = ({email, password}: LoginProps) => {
    return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    })
        .then(res => res.json())
}