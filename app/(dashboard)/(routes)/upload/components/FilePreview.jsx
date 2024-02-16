import Image from 'next/image'
import { RxCrossCircled } from "react-icons/rx";

const FilePreview = ({file, removeFile}) => {

  // ==== ПРОВЕРКА НА ТИП ЗАГРУЖАЕМОГО ФАЙЛА ==== // 
  // Получаем расширение файла
  const extension = file.name.split('.').pop().toLowerCase();

  let previewImage;  
  switch (extension) {
    // Изображение с расширением .png
    case 'png':    
      previewImage = "/img/file(png).png";
      break;
    // Изображение с расширением .jpg  
    case 'jpg':
    case 'jpeg':
      previewImage = "/img/file(jpg).png";
      break;
    // Изображение для текстовых документов
    case 'odt':
    case 'txt':
    case 'doc':
    case 'docx':     
      previewImage = "/img/file(txt).png";
      break;
    default:
      // Общее изображение для всех иных файлов(создать иконку)
      previewImage = "/img/file-x.png";
  }


  return (
    <div className='flex items-center justify-between gap-2 mt-5 p-2 border border-blue-300 rounded-md'>
      <div className='flex items-center p-2'>
          <Image           
            src={previewImage}  
            width={50}
            height={50}
            alt="file"
          />
          <div className='ml-2 text-left'>
            <h2>{file.name}</h2>
            <h2 className='text-[14px] text-gray-400'>{file?.type} / {(file.size/1024/1024).toFixed(2)} MB</h2>
          </div>
      </div>      
        <RxCrossCircled
          size={30}
          className="text-red-400 cursor-pointer hover:text-red-500"
          onClick={() => removeFile()}
        />
    </div>
  )
}

export default FilePreview