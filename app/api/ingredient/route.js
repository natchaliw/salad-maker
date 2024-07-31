export default async function getData() {
    try {
        const res = await fetch("/data/ingredient/ingredient.json");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();