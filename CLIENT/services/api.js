export async function sendToServer(new_data){
    try{
        const response = await fetch("http://localhost:3000" ,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_data)
        });

        if(!response.ok){
            throw new Error(`server error ${response.status}`)
        }
    }catch(e){
        console.error(e);
        
    }
}