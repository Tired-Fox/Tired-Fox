export const getIcons = (type: string): [string, string] => {
  switch(type) {
    case "fail":
    case "failure":
      return ['fas', 'xmark'];
    case "warn":
    case "warning":
      return ['fas', 'triangle-exclamation'];
    case "question":
        return ['fas', 'circle-question'];
    case "pass":
    case "success":
        return ['fas', 'check'];
    case "note":
        return ['fas', 'pencil'];
    case "tip":
        return ['fas', 'fire-flame-curved'];
    case "danger":
        return ['fas', 'bolt'];
    case "bug":
        return ['fas', 'bug'];
    case "example":
        return ['fas', 'vial'];
    case "quote":
        return ['fas', 'quote-right'];
    case "info":
    default:
      return ['fas', 'circle-info'];
  }
}

export const getType = (type: string): string => {
    type = type.toLocaleLowerCase();
    switch(type) {
        case "fail":
            return "failure";
        case "warn":
            return "warning";
        case "pass":
            return "success";
        default:
            return type;
    }
}

export const getTitle = (title: string): string => {
  title = title.toLocaleLowerCase();
  return title[0].toLocaleUpperCase() + title.slice(1);
}