import { updateRiddleCall } from '../api/riddles.js';

export async function updateRiddle(updatedRiddle) {
    try {
        const response = await updateRiddleCall(updatedRiddle);
        return response;
    } catch (e) {
        console.error(e);
    }
}
