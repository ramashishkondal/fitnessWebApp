import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { DragAndDropFilesProps } from './types';
import ToastError from '../../Atoms/ToastError';

function DragAndDropFiles({
  fileTypesAllowed,
  photo,
  setPhoto,
  runOnDrop,
}: Readonly<DragAndDropFilesProps>) {
  // functions
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Handle the uploaded files here
      const file = acceptedFiles[0];
      if (file) {
        if (setPhoto) {
          setPhoto('customImage');
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target) {
            if (typeof e.target.result === 'string') {
              if (setPhoto) {
                setPhoto(e.target.result);
              }
              (() => runOnDrop && runOnDrop(fileTypesAllowed))();
            }
          }
        };

        if (file.type.startsWith('image/')) {
          reader.readAsDataURL(file);
        }
      }
    },
    [setPhoto, runOnDrop, fileTypesAllowed]
  );

  const { isDragActive, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:
      fileTypesAllowed === 'image'
        ? { 'image/jpeg': ['.jpeg'], 'image/png': ['.png'] }
        : { 'video/*': [] },
    onDropRejected: () => {
      ToastError('File type invalid');
    },
  });

  return (
    <div>
      {!photo ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded p-6 text-center w-96 w-80 h-96 flex justify-center items-center ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input multiple={false} {...getInputProps()} className="w-80" />
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>
              Drag and drop your file here, or click to select a file from your
              device.
            </p>
          )}
        </div>
      ) : (
        <div>
          <div className="w-full flex justify-center size-96">
            <img src={photo} alt="uploaded story" />
          </div>
        </div>
      )}
    </div>
  );
}

export default DragAndDropFiles;
