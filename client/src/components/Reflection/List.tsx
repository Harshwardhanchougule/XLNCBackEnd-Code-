import { useEffect, useState } from 'react';
import useApi from '../../hooks/useApi';
import { IReflection } from '../../types/reflection';

const ReflectionList = () => {
  const [reflections, setReflections] = useState<IReflection[]>([]);
  const { get, loading, error } = useApi();

  useEffect(() => {
    const fetchReflections = async () => {
      try {
        const data = await get('/reflections');
        // Ensure data is an array before setting it
        setReflections(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Error fetching reflections:', err);
        setReflections([]); // Set to empty array on error
      }
    };

    fetchReflections();
  }, []);

  const handleNewReflection = (newReflection: IReflection) => {
    setReflections(prev => [newReflection, ...prev]);
  };

  if (loading && reflections.length === 0) {
    return <div className="text-center py-8">Loading reflections...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Reflections</h2>
      {!reflections || reflections.length === 0 ? (
        <p className="text-gray-500">No reflections yet. Add one to get started!</p>
      ) : (
        <div className="space-y-4">
          {reflections.map((reflection) => (
            <div key={reflection._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900">{reflection.aiModel}</h3>
                <span className="text-sm text-gray-500">
                  {new Date(reflection.createdAt).toLocaleString()}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{reflection.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReflectionList;