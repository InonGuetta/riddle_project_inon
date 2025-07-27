export async function sendToServer(new_data){
    try{
        const response = await fetch("http://localhost:3000/players" ,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_data)
        });

        console.log(response);
        
        if(!response.ok){
            throw new Error(`server error ${response.status}`)
        }
    }catch(e){
        console.error(e);
        
    }
}


export async function insert_new_riddle(new_riddle) {
    try{
        const response = await fetch('http://localhost:3000/add-riddle',{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },

            body: JSON.stringify(new_riddle)
        });
        console.log(response);
        
        if(!response.ok){
            throw new Error(`server error ${response.status}`)            
        }

    }catch(e){
        console.error(e);
        
    }
    
}