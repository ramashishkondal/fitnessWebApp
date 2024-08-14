export type InterestItemProps = {
  title: string;
  icon: HTMLImageElement['src'];
  isSelected: boolean;
  setItemSelected: (title: string) => void;
};
