import config from '../config/config'

export async function loginUser(authKey) {
    let url = `${config.MAIN_URL}/test`
    try {
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        });
        let json = await response.json();
        return json

    }
    catch (error) {
        console.error(error);
        return null
    }
}
