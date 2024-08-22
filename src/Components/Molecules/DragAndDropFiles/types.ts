import { Dispatch } from 'react';

export type DragAndDropFilesProps = {
  fileTypesAllowed: 'image' | 'video';
  photo?: string;
  setPhoto?: Dispatch<React.SetStateAction<string>>;
  runOnDrop?: (type: 'image' | 'video') => void;
};
