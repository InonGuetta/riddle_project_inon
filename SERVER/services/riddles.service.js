const data = [
    { id: 1, name: "Riddle 1", taskDescription: "What has keys but can't open locks?", correctAnswer: "A piano" },
]

export const fetchAllRiddles = async () => {
    // Simulate fetching riddles from a database or file
    console.log(data);
    return data;
}
