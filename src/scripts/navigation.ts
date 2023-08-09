export type Link = {
  name?: string;
  src: string;
  display: string;
  title?: string;
};

export type Section = {
  name: string;
  links: Array<Link>;
};
