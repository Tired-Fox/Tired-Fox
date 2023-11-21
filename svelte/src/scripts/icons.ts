const ICON_MAP: Record<string, string> = {
    blog: 'book',
    home: 'house',
    heading: 'hashtag',
    top: 'hand-point-up',
    bottom: 'hand-point-down',
    projects: 'clipboard-list',
    about: 'fingerprint',
}

export function selectIcon(name: string): string {
    name = name.toLowerCase();
    if (name in ICON_MAP) {
        return ICON_MAP[name];
    }
    return name
}