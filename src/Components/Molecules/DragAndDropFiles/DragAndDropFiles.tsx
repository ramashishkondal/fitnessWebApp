import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DragAndDropFilesProps } from './types';
import CustomButton from '../../Atoms/CustomButton';

function DragAndDropFiles({ fileTypesAllowed }: DragAndDropFilesProps) {
  // state es
  const [story, setStory] = useState<string>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle the uploaded files here
    const file = acceptedFiles[0];
    if (file) {
      setStory('customImage');
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          if (typeof e.target.result === 'string') {
            setStory(e.target.result);
          }
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      }
    }
  }, []);

  const { isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {!story ? (
        <div
          // {...getRootProps()}
          className={`border-2 border-dashed rounded p-6 text-center w-80 h-96 flex justify-center items-center ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input
            multiple={false}
            accept={fileTypesAllowed}
            // {...getInputProps()}
            className="w-80"
          />
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
          {story ? (
            <div>
              <img
                src={story}
                alt="uploaded story"
                className="max-h-[600px] max-w-[900px] border"
              />
              <div className="mb-4 mt-12">
                <CustomButton text="Upload" />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default DragAndDropFiles;
