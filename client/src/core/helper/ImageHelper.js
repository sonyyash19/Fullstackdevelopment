import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `api/product/photo/${product._id}`
    : "https://images.squarespace-cdn.com/content/v1/5c99d270a568270546150423/1554777943714-VI3EMG4FUFYXPVW130KT/ke17ZwdGBToddI8pDm48kOyctPanBqSdf7WQMpY1FsRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwwQIrqN0bcqL_6-iJCOAA0qwytzcs0JTq1XS2aqVbyK6GtMIM7F0DGeOwCXa63_4k/hitesh-choudhary-562332-unsplash+copy.jpg";
  return (
    <div>
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
