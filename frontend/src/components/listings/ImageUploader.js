import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const ImageUploader = ({ setSelectedImages }) => {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const MAX_IMAGES = 10;
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",
  ];
  const ACCEPTED_IMAGE_EXTENSIONS = ".jpg,.jpeg,.jfif,.png,.webp,.avif";

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter((file) =>
      ACCEPTED_IMAGE_TYPES.includes(file.type)
    );

    if (imageFiles.length !== fileArray.length) {
      toast.error("Only JPG/JFIF, PNG, WEBP, or AVIF images are supported");
    }

    if (!imageFiles.length) return;

    if (images.length + imageFiles.length > MAX_IMAGES) {
      toast.error("You can upload up to 10 images");
      return;
    }
    const newPreviews = imageFiles.map((file) =>
      URL.createObjectURL(file)
    );
    const updatedImages = [...images, ...imageFiles];

    setImages(updatedImages);
    setPreviews((prev) => [...prev, ...newPreviews]);
    setSelectedImages(updatedImages);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreviews(updatedPreviews);
    setSelectedImages(updatedImages);
    URL.revokeObjectURL(previews[index]);
  };

  useEffect(() => {
    return () => {
      previews.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previews]);

  return (
    <div className="mt-3">
      <div className="upload-box text-center p-4 mb-3"
        onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>

        <p className="mb-2">Drag & drop images</p>

        <input
          type="file"
          multiple
          accept={ACCEPTED_IMAGE_EXTENSIONS}
          onChange={handleChange}
          style={{ display: "none" }}
          id="fileInput"
        />

        <div className="row g-2">
          {previews.map((src, index) => (
            <div className="col-4 position-relative" key={index}>

              <img src={src} alt="preview" className="img-fluid rounded"
                style={{ height: "120px", width: "100%", objectFit: "cover" }}
              />

              {/* Remove */}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="btn btn-danger btn-sm position-absolute top-0 end-0"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {/* Cover */}
              {index === 0 && (
                <span className="badge bg-dark position-absolute bottom-0 start-0">
                  Cover
                </span>
              )}
            </div>
          ))}
        </div>

        <label htmlFor="fileInput" className="btn btn-dark mt-3">
          Upload Images
        </label>

      </div>
    </div>
  );
};
