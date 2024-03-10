// import { useState } from 'react';
// import { BlobServiceClient, StorageSharedKeyCredential } from '@azure/storage-blob';

// const UploadFile = () => {
//     const [selectedFile, setSelectedFile] = useState<string|null>();
//     const [blobName, setBlobName] = useState('');
//     const [uploadStatus, setUploadStatus] = useState<string|null>();

//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };

//     const handleBlobNameChange = (e) => {
//         setBlobName(e.target.value);
//     };

//     const handleUpload = async () => {
//         if (!selectedFile || !blobName) {
//             alert('Please select a file and provide a blob name.');
//             return;
//         }

//         const accountName = 'your_account_name';
//         const accountKey = 'your_account_key';
//         const containerName = 'your_container_name';

//         const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
//         const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net`, sharedKeyCredential);
//         const containerClient = blobServiceClient.getContainerClient(containerName);
//         const blockBlobClient = containerClient.getBlockBlobClient(blobName);

//         try {
//             const uploadBlobResponse = await blockBlobClient.uploadBrowserData(selectedFile);
//             setUploadStatus(`Uploaded ${blobName} successfully. ETag: ${uploadBlobResponse.etag}`);
//         } catch (error) {
//             setUploadStatus(`Error uploading ${blobName}: ${error.message}`);
//         }
//     };

//     return (
//         <div>
//             <h1>Upload File to Azure Blob Storage</h1>
//             <input type="file" onChange={handleFileChange} />
//             <br />
//             <input type="text" placeholder="Blob Name" onChange={handleBlobNameChange} />
//             <br />
//             <button onClick={handleUpload}>Upload</button>
//             {uploadStatus && <p>{uploadStatus}</p>}
//         </div>
//     );
// };

// export default UploadFile;
