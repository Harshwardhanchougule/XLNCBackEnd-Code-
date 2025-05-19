import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import BlogTable from '../components/BlogTable';
import BlogForm from '../components/BlogForm';
import DeleteModal from '../components/DeleteModal';
import Navbar from '../components/Navbar'; // Add this import

export interface Blog {
    id: number;
    title: string;
    author: string;
    content: string;
    date: string;
}

const AdminDashboard: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<Partial<Blog>>({ title: '', author: '', content: '' });
    const [deleteId, setDeleteId] = useState<number | null>(null);

    const handleSave = () => {
        if (currentBlog.id) {
            setBlogs(blogs.map((b) => (b.id === currentBlog.id ? currentBlog as Blog : b)));
        } else {
            setBlogs([...blogs, { ...currentBlog, id: Date.now(), date: new Date().toLocaleDateString() } as Blog]);
        }
        setShowForm(false);
        setCurrentBlog({ title: '', author: '', content: '' });
    };

    const handleDelete = () => {
        if (deleteId !== null) {
            setBlogs(blogs.filter((b) => b.id !== deleteId));
        }
        setShowDelete(false);
    };

    return (
        <div className="min-h-screen bg-gray-400">
            <Navbar /> {/* Add the Navbar component */}
            <div className="flex">
                <div className="fixed top-16 left-0 h-[calc(150vh-84px)] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 ml-64 mt-16">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h1 className="text-2xl font-bold mb-4 text-gray-800">Manage Blogs</h1>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mb-4 transition duration-200"
                            onClick={() => setShowForm(true)}
                        >
                            Add Blog
                        </button>
                        <BlogTable
                            blogs={blogs}
                            onEdit={(b) => { setCurrentBlog(b); setShowForm(true); }}
                            onDelete={(id) => { setDeleteId(id); setShowDelete(true); }}
                        />
                        {/* <BlogForm open={showForm} onClose={() => setShowForm(false)} onSave={handleSave} blog={currentBlog} setBlog={setCurrentBlog} /> */}
                        <DeleteModal
                            open={showDelete}
                            onClose={() => setShowDelete(false)}
                            onConfirm={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;