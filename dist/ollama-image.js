import { arrayBufferToBase64 } from './utils/arrayBufferToBase64.js';
export async function OllamaImage({ url, useFetch = false }) {
    if (!useFetch && !url.startsWith('http')) {
        const fs = await import("fs/promises");
        return await fs.readFile(url, { encoding: 'base64' });
    }
    else {
        const response = await fetch(url);
        return arrayBufferToBase64(await response.arrayBuffer());
    }
}
