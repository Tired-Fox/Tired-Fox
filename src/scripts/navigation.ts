export type Link = {
  icon: string;
  src: string;
  display: string;
  title?: string;
};

export type Section = {
  name: string;
  links: Array<Link>;
};
