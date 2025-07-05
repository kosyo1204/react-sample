import React, { useState, useRef } from 'react';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const UPLOAD_DELAY = 5000;

export const ImageUploader = () => {
    // DOMへの直接アクセス
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    // ファイルの保持
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')
    
    const onClickText = () => {
        if (inputImageRef.current !== null) {
            inputImageRef.current.click();
        }
    }

    const onChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files !== null && files.length > 0) {
            fileRef.current = files[0]
            // setMessage(`Selected file: ${fileRef.current.name}`)
        }
    }

    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            // setMessage(`Uploading ${fileRef.current.name}...`)
            await sleep(UPLOAD_DELAY);
            setMessage(`Uploaded ${fileRef.current.name} successfully!`);
            // fileRef.current = null; // Reset after upload
        }
    }

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                Click here to select an image
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>Upload Image</button>
            {message !== null && <p>{message}</p>}
        </div>
    );
}