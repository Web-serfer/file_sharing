import { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";
import ProgressBar from "./ProgressBar";
import { IoCloudUploadOutline } from "react-icons/io5";


const UploadForm = ({ uploadBtnClick, progress }) => {
  const [file, setFile] = useState();  
  const [errorMsg, setErrorMsg] = useState();

  

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 2000000) {      
      setErrorMsg("Размер файла не более 2MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);    
  };
  
// Процесс загрузки файла на сервер
const handleUpload = async () => {
  try {
    await uploadBtnClick(file);          
  } catch (error) {
    console.error('Ошибка при загрузке файла:', error);
  }
};


  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col w-full lg:w-2/3 items-center justify-center h-64 border-2 border-blue-300 border-dashed rounded-lg cursor-pointer bg-blue-50 dark:bg-blue-50 hover:bg-blue-100 dark:border-blue-400 dark:hover:border-blue-200 dark:hover:bg-blue-100"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <IoCloudUploadOutline size={40} color="#3698f9" />
            <p className="my-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400 hover:text-[#3698f9]">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong>drag</strong> and <strong>drop</strong>
            </p>
            <p className="text-md text-gray-500 dark:text-gray-500 font-semibold">
              SVG, PNG, JPG or GIF (Max Size: 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => onFileSelect(e.target.files[0])}            
          />
        </label>
      </div>

      {/* ==== alert message ==== */}
      {errorMsg ? <AlertMsg msg={errorMsg} /> : null}

      {/* ==== preview & remove file ==== */}
      <div className="flex justify-center w-full">
        {file ? (
          <FilePreview file={file} removeFile={() => setFile(null)} />
        ) : null}
      </div>
      


      {/* ==== upload preview file ==== */}      
      <div className="flex flex-col items-center">
        {progress >  0 ? (
          <ProgressBar progress={progress} />
        ) : (
          <button
            onClick={handleUpload}
            disabled={!file}
            className="mt-5 p-2 bg-[#3698f9] text-white w-[30%] rounded-full cursor-pointer disabled:bg-gray-400 opacity-50 hover:opacity-100"
          >
            Upload
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadForm;