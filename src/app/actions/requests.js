export async function GetTopicCard() {
    try {
        const response = await fetch('http://localhost:4000/categories', {
            next: {
                revalidate: 0
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetch! Error: ${error}`)
    }
}

export async function GetUser() {
    try {
        const response = await fetch('http://localhost:4000/user', {
            next: {
                revalidate: 0
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(`Error fetch! Error: ${error}`)
    }
}