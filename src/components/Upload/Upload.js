import styled from 'styled-components/macro'
import React, { useState } from 'react'
import ImageUploading from 'react-images-uploading'

export default function Upload({ onImage }) {
  const [images, setImages] = useState([])
  const maxNumber = 69

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList)
    onImage(imageList)
  }

  return (
    <UploadContainer>
      <ImageUploading
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
          <div>
            <UploadLabel
              htmlFor="button"
              title="uploadButton"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here 📷
            </UploadLabel>
            &nbsp;
            <RemoveAllButton title="removeButton" onClick={onImageRemoveAll}>
              Remove all images
            </RemoveAllButton>
            {imageList.map((image, index) => (
              <div key={index}>
                <img
                  src={image['data_url']}
                  alt=""
                  width="100"
                  height="auto"
                  style={{ margin: '10px auto auto' }}
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
}

const UploadContainer = styled.div`
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
