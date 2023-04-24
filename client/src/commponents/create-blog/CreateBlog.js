import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CreateBlog.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files(0));
    ev.preventDefault();
    console.log(files);
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
    });
    console.log(await response.json());
  }
  return (
    <form className="createblog-form" onSubmit={createNewPost}>
      <h2 className="heading-secondary">Create New Blog Post</h2>
      <input
        type="title"
        placeholder={"Title"}
        className="input"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder={"Summary"}
        className="input"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        className="input"
        onChange={(ev) => setFiles(ev.target.files)}
      />
      <ReactQuill
        value={content}
        onChange={(newValue) => setContent(newValue)}
        modules={modules}
        formats={formats}
      />
      <button className="button">Create Post</button>
    </form>
  );
}

export default CreateBlog;