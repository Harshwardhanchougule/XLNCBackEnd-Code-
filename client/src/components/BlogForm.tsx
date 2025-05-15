interface Blog {
  id?: number;
  title: string;
  author: string;
  content: string;
}

interface BlogFormProps {
  open: boolean;
  onClose: () => void;
  onSave: () => void;
  blog: Blog;
  setBlog: React.Dispatch<React.SetStateAction<Blog>>;
}

const BlogForm: React.FC<BlogFormProps> = ({ open, onClose, onSave, blog, setBlog }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/2">
        <h2 className="text-xl font-semibold mb-4">{blog.id ? 'Edit Blog' : 'Add Blog'}</h2>
        <input type="text" placeholder="Title" className="border p-2 w-full mb-3"
          value={blog.title} onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
        <input type="text" placeholder="Author" className="border p-2 w-full mb-3"
          value={blog.author} onChange={(e) => setBlog({ ...blog, author: e.target.value })} />
        <textarea placeholder="Content" className="border p-2 w-full mb-3"
          value={blog.content} onChange={(e) => setBlog({ ...blog, content: e.target.value })} />
        <div className="flex justify-end space-x-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
