export type NavLinkProps = {
  title: string;
  path: string;
};

export type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

export type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  key: number;
  gitUrl: string;
  previewUrl: string;
};

export type TagProps = {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
};
