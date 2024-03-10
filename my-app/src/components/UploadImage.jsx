import React, { useState } from "react";
import "./uploadImage.css";
import { BlobServiceClient } from "@azure/storage-blob";

const UploadImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");

  const connectionString = 'https://smartlok.unitedstates.communication.azure.com/;accesskey=x75TZDQKgetjT7OTkeyDAzM4eJviQpUVqRiw2Uy5zXp+GPQlt35nV7ArRdxDjjjFPpq8fqb+CLEpttGJMi14Dw==';
  const containerName = "profiles";

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image to upload");
      return;
    }

    setUploadStatus("uploading");

    try {
      const blobServiceClient = new BlobServiceClient(connectionString);
      const containerClient =
        blobServiceClient.getContainerClient(containerName);

      const blobName = selectedFile.name;
      const blobClient = containerClient.getBlockBlobClient(blobName);

      const uploadResponse = await blobClient.uploadData(selectedFile);

      console.log("Image uploaded successfully:", uploadResponse.url);
      setUploadStatus("success");
      setSelectedFile(null);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("error");
    }
  };

  const renderUploadStatus = () => {
    switch (uploadStatus) {
      case "idle":
        return "Ready to upload";
      case "uploading":
        return "Uploading...";
      case "success":
        return "Image uploaded successfully!";
      case "error":
        return "Error uploading image.";
      default:
        return "";
    }
  };

  return (
    <div className="upload-container">
      <input
        className="upload-input"
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={handleFileChange}
      />
      <button
        className="upload-button"
        onClick={handleUpload}
        disabled={uploadStatus !== "idle"}
      >
        Upload Image
      </button>
      <br />
      <p className="upload-status"> {renderUploadStatus()}</p>
    </div>
  );
};

export default UploadImage;
