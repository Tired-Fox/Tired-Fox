export async function load({ fetch }) {
    const projects = await (await fetch('/api/projects.json')).json();
    return {
        projects
    };
}