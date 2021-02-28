export const apiRequest = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    return response.json();
}