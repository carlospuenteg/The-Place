const MAX_PIXELS = 300;

const database = {
    pixels: Array.from({length: MAX_PIXELS**2}, ()=> ({ 
        color: '#ffffff',
        user: '',
    })),
    selColor: '#000000',
    user: '',
}

// export both constants
export { MAX_PIXELS, database };