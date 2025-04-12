import React, { useState } from "react";
import { BiSolidImageAlt } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";

type NewPostModalProps = {
  open: boolean;
  onClose: () => void;
};

const NewPost: React.FC<NewPostModalProps> = ({ open, onClose }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ content, image });

    setContent("");
    setImage(null);
    setPreviewUrl(null);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-[rgb(24,24,24)] w-full max-w-2xl p-6 rounded-xl shadow-lg text-white border border-[rgb(45,45,45)] relative "
            onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl hover:text-[rgb(45,45,45)]">
            <IoIosCloseCircle />
        </button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">New post</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Bạn đang nghĩ gì?"
            className="w-full px-3 py-2 rounded resize-none outline-none border border-[rgb(45,45,45)] mb-2"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div>
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview"
                className="mb-4 rounded max-h-48 object-cover border"
              />
            )}
            <label className="inline-flex items-center gap-2 cursor-pointer">
                <BiSolidImageAlt size={24} />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 text-white border border-[rgb(45,45,45)] rounded-xl"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
