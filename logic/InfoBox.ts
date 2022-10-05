export const getIcons = (type: string): [string, string] => {
  switch(type) {
    case "error":
      return ['fas', 'ban'];
    case "warning":
      return ['fas', 'triangle-exclamation'];
    default:
      return ['far', 'circle-question'];
  }
}

export const getTitle = (title: string): string => {
  if (['error', 'warning'].includes(title)) {
    return title[0].toLocaleUpperCase() + title.slice(1);
  } else {
    return 'Info'
  }
}