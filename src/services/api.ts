const DEFAULT_URL = 'https://api.github.com/users/'

export const apiCall = async (query: string) => {
  const request = await fetch(`${DEFAULT_URL}${query}`);
  const response = await request.json();
  return response;
}