import React, { useState } from "react";
import axios from "axios";

const Createpost = () => {

  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("caption", caption);

    try {
      setLoading(true);

      const res = await axios.post(
        "https://backend-project-production-b12f.up.railway.app/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data);

      alert("Post created successfully 🚀");

      // reset form
      setFile(null);
      setCaption("");

    } catch (err) {
      console.log(err);
      alert("Error uploading post");
    } finally {
      setLoading(false);
    }
  };

  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
  };

  const card = {
    padding: "40px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    width: "350px",
    textAlign: "center",
  };

  const input = {
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
  };

  const button = {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#0072ff",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Create Post</h2>

        <form onSubmit={handleSubmit}>
          
          {/* File Input */}
          <input
            type="file"
            accept="image/*"
            style={input}
            onChange={(e) => setFile(e.target.files[0])}
          />

          {/* Caption */}
          <textarea
            placeholder="Enter caption..."
            style={{ ...input, height: "80px" }}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Button */}
          <button type="submit" style={button}>
            {loading ? "Uploading..." : "Create Post"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Createpost;