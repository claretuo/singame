export default function api(graphql: string) {
  return fetch('http://localhost:3030/graphql', {
    method: 'POST',
    body: JSON.stringify({ graphql }),
  }).then((response: Response) => response.json());
}