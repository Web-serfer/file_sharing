"use client";

import { useState, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import { app } from "../../../../firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Upload = () => {  

  const [file, setFile] = useState(null); 
  const [progress, setProgress] = useState(null) 
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    
    const storageRef = ref(storage, "file-upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) *   100;
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("link to downloaded file - ", downloadURL);
          setUploadSuccess(true); // Устанавливаем флаг успешной загрузки
        });
      }
    );
  };

  // toast success & toast error
  useEffect(() => {
    if (uploadSuccess) {
      console.log('Файл успешно загружен!');
      toast.success('Файл успешно загружен', {
        hideProgressBar: true,
        autoClose:  3000,
        position: 'top-right'
      });
      setFile(null); // Сброс состояния файла
    } else {
      console.log('Ошибка загрузки файла!');
      toast.error('Ошибка при загрузке файла', {
        hideProgressBar: true,
        autoClose:  3000,
        position: 'top-right'
      });
    }
  }, [uploadSuccess]); 
  


  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-lg text-center m-5">
        Start
        <strong className="text-[#3698f9]"> Uploading </strong> 
        File and Share it
        Uploading File and <strong className="text-[#3698f9]"> Share</strong> it
      </h2>
      <UploadForm 
        uploadBtnClick={(file) => uploadFile(file)}
        progress={progress} 
      />
      <ToastContainer />
    </div>
  );
};

export default Upload;
