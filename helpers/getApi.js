const baseUrl = "http://localhost:1337/api";

export async function getData() {
  const response = await fetch(`${baseUrl}/galleries/?populate=*`);

  if (!response.ok) {
    // ! Recommended to handle errors
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export async function getMediaData() {
  const response = await fetch(`${baseUrl}/galleries/?populate=*`);

  if (!response.ok) {
    // ! Recommended to handle errors
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
