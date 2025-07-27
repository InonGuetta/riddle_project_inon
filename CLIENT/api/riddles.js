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

