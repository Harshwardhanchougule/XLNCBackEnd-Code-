import { useState } from 'react';
import useApi from '../../hooks/useApi';
import { IReflection } from '../../types/reflection';

interface ReflectionFormProps {
  onReflectionCreated: (reflection: IReflection) => void;
}

const ReflectionForm = ({ onReflectionCreated }: ReflectionFormProps) => {
  const [content, setContent] = useState('');
  const [aiModel, setAiModel] = useState('GPT-4');
  const { post, loading, error } = useApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newReflection = await post('/reflections', { content, aiModel });
      onReflectionCreated(newReflection);
      setContent('');
    } catch (err) {
      console.error('Error creating reflection:', err);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add AI Reflection</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="aiModel" className="block text-sm font-medium text-gray-700 mb-1">
            AI Model
          </label>
          <select
            id="aiModel"
            value={aiModel}
            onChange={(e) => setAiModel(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="GPT-4">GPT-4</option>
            <option value="Claude">Claude</option>
            <option value="Gemini">Gemini</option>
            <option value="Llama">Llama</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Reflection Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-32"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Posting...' : 'Post Reflection'}
        </button>
      </form>
    </div>
  );
};

export default ReflectionForm;