interface Blog {
  id: number;
  title: string;
  author: string;
  date: string;
}

interface BlogTableProps {
  blogs: Blog[];
  onEdit: (blog: Blog) => void;
  onDelete: (id: number) => void;
}

const BlogTable: React.FC<BlogTableProps> = ({ blogs, onEdit, onDelete }) => {
  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Title</th>
          <th className="p-3 text-left">Author</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id} className="border-b">
            <td className="p-3">{blog.title}</td>
            <td className="p-3">{blog.author}</td>
            <td className="p-3">{blog.date}</td>
            <td className="p-3 space-x-2">
              <button className="text-blue-600" onClick={() => onEdit(blog)}>Edit</button>
              <button className="text-red-600" onClick={() => onDelete(blog.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogTable;
