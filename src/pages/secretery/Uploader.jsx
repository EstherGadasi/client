import { useEffect, useState } from "react"
import axios from "axios"
const Uploader = ({ file, setFile, label }) => {
  const [selectFile, setSelectFile] = useState()
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (selectFile) {
      const formData = new FormData()
      formData.append("file", selectFile)
      console.log(selectFile)
      axios.post("http://localhost:4000/api/upload",formData ).then(({ data }) => {
        if (data?.name) {
          setFile(data.name)
        }
      }).catch(err => {
        console.log("error")
      })
    }

  }, [selectFile])

  async function handleFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    let url
    reader.onload = (e) => {
      setImageSrc(e.target.result);
      setFile(e.target.result)
      url = e.target.result
      console.log(url)
    };

    reader.readAsDataURL(file);
    // await axios.post("http://localhost:4000/images", url).then(({ data }) => {
    //   if (data?.name) {
    //     setFile(data.name)
    //   }
    // }).catch(err => {
    //   console.log("error")
    // })
  };


  const onSelectFile = (e) => {
    setSelectFile(e.target.files[0])
    // handleFileSelected(e)

  }
  return (
    <>
      <label htmlFor="file"> {label ? label : "File"} </label>
      <input type="file" onChange={onSelectFile} name="file" />
      {imageSrc && <img src={imageSrc} alt="Uploaded Image" style={{ display: 'block', height: '20vh', maxWidth: '20vw' }} />}

    </>
  )
}

export default Uploader