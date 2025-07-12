'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminGuard from '@/components/AdminGuard';


export default function page() {
  const [form, setForm] = useState({ hospitalName: '', city: '', factor7: false, factor8: false, factor9: false });
  const [hospitals, setHospitals] = useState([]);
  const [editingId, setEditingId] = useState(null);


  const fetchHospitals = async () => {
    const res = await axios.get('/api/factors');
    setHospitals(res.data);
  };

  useEffect(() => {
    fetchHospitals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put('/api/factors', {
          _id: editingId,
          hospitalName: form.hospitalName,
          city: form.city,
          factors: {
            factor7: form.factor7,
            factor8: form.factor8,
            factor9: form.factor9
          }
        });
        toast.success('Updated successfully!');
        setEditingId(null);
      } else {
        await axios.post('/api/factors', {
          hospitalName: form.hospitalName,
          city: form.city,
          factors: {
            factor7: form.factor7,
            factor8: form.factor8,
            factor9: form.factor9
          }
        });
        toast.success('Added successfully!');
      }
      setForm({ hospitalName: '', city: '', factor7: false, factor8: false, factor9: false });
      fetchHospitals();
    } catch (err) {
      toast.error('Error saving data');
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setForm({
      hospitalName: item.hospitalName,
      city: item.city,
      factor7: item.factors.factor7,
      factor8: item.factors.factor8,
      factor9: item.factors.factor9
    });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    const confirmation = window.confirm('Are you sure you want to delete this hospital?');
    if (confirmation) {
      try {
        await axios.delete('/api/factors', { data: { _id: id } });
        toast.success('Deleted successfully!');
        fetchHospitals();
      } catch (err) {
        toast.error('Error deleting hospital');
        console.error(err);
      }
    }
  };

  return (
    <AdminGuard>
    <main className="max-w-4xl mt-8 mx-auto p-6 rounded-md shadow-md bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        <span role="img" aria-label="blood drop">🩸</span> Admin Panel
      </h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-sm space-y-4 mb-6">
        <div className="mb-2">
          <label htmlFor="hospitalName" className="block text-gray-700 text-sm font-bold mb-2">Hospital Name:</label>
          <input
            type="text"
            id="hospitalName"
            placeholder="Enter hospital name"
            value={form.hospitalName}
            onChange={(e) => setForm({ ...form, hospitalName: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex gap-4 items-center mb-4">
          <label className="inline-flex items-center text-gray-700 text-sm">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600 rounded focus:ring-red-500" checked={form.factor7} onChange={e => setForm({ ...form, factor7: e.target.checked })} />
            <span className="ml-2">Factor 7</span>
          </label>
          <label className="inline-flex items-center text-gray-700 text-sm">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600 rounded focus:ring-red-500" checked={form.factor8} onChange={e => setForm({ ...form, factor8: e.target.checked })} />
            <span className="ml-2">Factor 8</span>
          </label>
          <label className="inline-flex items-center text-gray-700 text-sm">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-red-600 rounded focus:ring-red-500" checked={form.factor9} onChange={e => setForm({ ...form, factor9: e.target.checked })} />
            <span className="ml-2">Factor 9</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {editingId ? 'Update Hospital' : 'Add Hospital'}
        </button>
      </form>

      <div className="grid gap-4">
        {hospitals.map((item) => (
          <div key={item._id} className="bg-white p-6 rounded-md shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.hospitalName}</h2>
            <p className="text-gray-600 mb-1">City: {item.city}</p>
            <div className="flex gap-4 mb-2 ">
              <span className="text-gray-700">Factor 7: <span className={item.factors.factor7 ? 'text-green-500' : 'text-red-500'}>{item.factors.factor7 ? '✅ ': '❌'}</span></span>
              <span className="text-gray-700">Factor 8: <span className={item.factors.factor8 ? 'text-green-500' : 'text-red-500'}>{item.factors.factor8 ? '✅' : '❌'}</span></span>
              <span className="text-gray-700">Factor 9: <span className={item.factors.factor9 ? 'text-green-500' : 'text-red-500'}>{item.factors.factor9 ? '✅ ': '❌'}</span></span>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    </AdminGuard>
  );
}