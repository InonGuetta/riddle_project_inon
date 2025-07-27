export const fetchRiddles = async () => {
    try {
        const response = await fetch("http://localhost:3000/riddles", { method: 'GET' })
        if (!response.ok) throw new Error(`server error ${response.status}`)
        return await response.json();
    } catch (e) { console.error(e) }
}

export const updateRiddleCall = async (updatedRiddle) => {
    try {
        const response = await fetch("http://localhost:3000/update-riddle", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRiddle)
        });
        if (!response.ok) throw new Error(`server error ${response.status}`);
        return await response.json();
    } catch (e) { console.error(e) }
}


export async function sendPlayerToServer(new_data) {
    try {
        const response = await fetch("http://localhost:3000/players", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_data)
        });
        console.log(response);
        if (!response.ok) {
            throw new Error(`server error ${response.status}`)
        }
    } catch (e) {
        console.error(e);
    }
}

export async function allPlayers() {
    try {
        const response = await fetch("http://localhost:3000/get",{
            method: 'GET',
        })

    if(!response.ok){
        throw new Error(`server error: ${response.status}`);
    }
    const data = await response.json();
    return data;
    } catch (e) {
        console.error(e);
    }
}

export async function insert_new_riddle(new_riddle) {
    try {
        const response = await fetch('http://localhost:3000/add-riddle', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_riddle)
        });
        console.log(response);
        if (!response.ok) {
            throw new Error(`server error ${response.status}`)
        }
    } catch (e) {
        console.error(e);
    }
}

export async function getRiddle() {
    return await fetchRiddles();
}

export async function delete_riddle(taskDescriptionToDelete) {
    try {
        const response = await fetch("http://localhost:3000/delete-riddle", {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ taskDescription: taskDescriptionToDelete })
        })
        console.log(response);
        if (!response.ok) {
            throw new Error(`server error ${response.status}`);
        }
    } catch (e) {
        console.error(e);
    }
}

export async function updateRiddle(updatedRiddle) {
    return await updateRiddleCall(updatedRiddle);
}


