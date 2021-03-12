import styled from 'styled-components/macro'
import React, { useState, useEffect } from 'react'
import ImageUploading from 'react-images-uploading'

export default function Upload() {
  const [images, setImages] = useState(loadFromLocal('images') ?? [])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  useEffect(() => {
    saveToLocal('images', images)
  }, [images])

  return (
    <UploadContainer>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div>
            <UploadLabel
              htmlFor="button"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here 📷
            </UploadLabel>
            &nbsp;
            <RemoveAllButton onClick={onImageRemoveAll}>
              Remove all images
            </RemoveAllButton>
            {imageList.map((image, index) => (
              <div key={index}>
                <img
                  src={image['data_url']}
                  alt=""
                  width="100"
                  height="auto"
                  style={{ margin: '10px auto auto ' }}
                />
                <div>
                  <UpdateButton onClick={() => onImageUpdate(index)}>
                    Update
                  </UpdateButton>
                  <RemoveButton onClick={() => onImageRemove(index)}>
                    Remove
                  </RemoveButton>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </UploadContainer>
  )
  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  function loadFromLocal(key) {
    const jsonString = localStorage.getItem(key)
    const data = JSON.parse(jsonString)
    return data
  }
}

const UploadContainer = styled.form`
  text-align: center;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 1px 6px 11px 9px #eee;
  padding: 30px;
  h2 {
    font-size: 16px;
    margin: 25px 0 0 0;
    color: grey;
  }

  input {
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 1px grey;
    padding: 5px;
    width: 100%;
    margin: 0;
  }
`
const RemoveAllButton = styled.button`
  background-color: #eee;
  color: grey;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 16px;
  width: 100%;
  padding: 5px;
  margin-top: 15px;
`
const UploadLabel = styled.label`
  font-size: 18px;
`

const UpdateButton = styled.button`
  background-color: #eee;
  color: grey;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 14px;
  width: 50%;
  padding: 5px;
  margin-top: 2px;
`
const RemoveButton = styled.button`
  background-color: #eee;
  color: grey;
  border-radius: 20px;
  border: none;
  box-shadow: 3px 3px 3px darkgrey;
  font-size: 14px;
  width: 50%;
  padding: 5px;
  margin-top: 2px;
`
const imageItem = styled.div`
  margin: 200px;
`
