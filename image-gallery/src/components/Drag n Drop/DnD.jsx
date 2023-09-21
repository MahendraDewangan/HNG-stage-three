import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './DnD.css'

// function upload_img(event, pinDetails, setPinDetails, setShowLable, setShowModalPin) {
//     if (event.target.files && event.target.files[0]) {
//         if (/image\/*/.test(event.target.files[0].type)) {
//             const reader = new FileReader();

//             reader.onload = function () {
//                 setPinDetails({
//                     ...pinDetails,
//                     img_blob: reader.result
//                 });
//                 setShowLable(false);
//                 setShowModalPin(true);
//             }

//             reader.readAsDataURL(event.target.files[0]);
//             console.log('thiis si onk')
//         }
//     }
// }


function upload_img(event){
    console.log(event);

}

const DnD = ({ onUpload }) => {
    const onDrop = useCallback(acceptedFiles => {
        onUpload(acceptedFiles);
    }, [onUpload]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop
    });


    return (
        <div {...getRootProps()} className="dropzone DND_container">
            <input onChange={event => upload_img(event)} {...getInputProps()} />
            <p>Drag & drop images here, or click to select images</p>
        </div>
    );
};

export default DnD;
