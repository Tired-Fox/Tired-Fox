import { base } from '$app/paths';

export async function load({ fetch }) {
    const projects = await (await fetch(`${base}/api/projects.json`)).json();
    return {
        projects
    };
}