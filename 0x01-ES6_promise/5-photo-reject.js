export default function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
        // Simulating some processing logic
        const isProcessed = Math.random() < 0.5; // Randomly deciding if processing is successful

        if (isProcessed) {
            resolve(`Photo ${fileName} has been successfully processed`);
        } else {
            reject(new Error(`Error: ${fileName} cannot be processed`));
        }
    });
}
