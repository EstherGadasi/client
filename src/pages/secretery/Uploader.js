import { useEffect, useState } from "react"
import axios from "axios"
import { Button } from "@mui/material"
import { Chip } from "@mui/material";
import {FileUploadOutlined,ImageOutlined} from '@mui/icons-material'

const Uploader = ({ file, setFile, label }) => {
  const [selectFile, setSelectFile] = useState(null)

  useEffect(() => {
    if (selectFile) {
      console.log("selectFile ",selectFile);
      const formData = new FormData()
      formData.append("file", selectFile)
      console.log("formData ",formData);
      console.log("before");
      axios.post("http://localhost:3600/api/upload", formData, {headers: {"Content-Type": 'multipart/form-data'}}).then(({ data }) => {
        console.log(data.statusText)
        if (data?.name) {
          setFile(data.name)
        }
      }).catch(err => {
        console.log("error", err)
      })
    }

  }, [selectFile])


  const onSelectFile = (e) => {
    console.log(e.target.files[0])
    setSelectFile(e.target.files[0])
  }
  return (
    <>
     {!selectFile &&
      <>
       <Button variant="outlined" component="label" sx={{height:55, width:'100%'}}>
        {label ? label : "File  "}
        <FileUploadOutlined />
        <input type="file" onChange={onSelectFile} id="file" hidden />
      </Button></>}
      {selectFile && <Chip variant="outlined" color="primary" onDelete={() => { setFile(null);setSelectFile(null) }} icon={<ImageOutlined />} label={selectFile.name} />}
    </>
  )
}

export default Uploader