export type GenderCardComponentProps = {
  title: 'Male' | 'Female';
  icon: HTMLImageElement['src'];
  isSelected: boolean;
  setSelectedGender: (gender: 'Male' | 'Female') => void;
};
