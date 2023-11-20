export async function fetchGreeting() {
  try {
    const response = await fetch("http://localhost:5555/");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching greeting:", error);
    return {}; // Return an empty object in case of error
  }
}

export default async function fetchData() {
  try {
    const response = await fetch("http://localhost:5555/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of error
  }
}
