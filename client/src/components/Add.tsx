import { useState } from "react";

interface formData {
  title: string;
  description: string;
  category: string;
}

function BlogWritePage() {
  const initialFormData: formData = {
    title: "",
    description: "",
    category: "web dev",
  };
  const [formData, setFormData] = useState<formData>(initialFormData);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlogSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex min-h-screen items-center justify-center '>
      <div className=' p-8 rounded-lg  w-full'>
        <h2 className='text-2xl font-semibold mb-4'>Share Your Thought</h2>
        <form onSubmit={handleBlogSubmit}>
          <div className='mb-4'>
            <label htmlFor='title' className='block text-sm font-medium '>
              Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='mt-1 p-2 w-full bg-slate-200 text-slate-800 border rounded-md'
              placeholder='Enter your blog title'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='description' className='block text-sm font-medium '>
              Description
            </label>
            <textarea
              id='description'
              name='description'
              value={formData.description}
              onChange={handleChange}
              className='mt-1 p-2 w-full bg-slate-200 text-slate-800 border rounded-md'
              placeholder='Write your blog description'
              rows={10}
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='category' className='block text-sm font-medium '>
              Category
            </label>
            <select
              id='category'
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='mt-1 p-2 w-full bg-slate-200 text-slate-800 border rounded-md'>
              <option value='web dev'>Web Development</option>
              <option value='cloud computing'>Cloud Computing</option>
              <option value='cybersecurity'>Cybersecurity</option>
              <option value='ai'>Artificial Intelligence</option>
              <option value='databases'>Databases</option>
              <option value='ui/ux'>UI/UX</option>
            </select>
          </div>

          <div className='mb-4'>
            <label htmlFor='image' className='block text-sm font-medium '>
              Image
            </label>
            <input
              type='file'
              id='image'
              name='image'
              accept='.jpg, .jpeg, .png'
              className='mt-1 p-2 w-full border text-slate-800 bg-slate-200 rounded-md'
            />
          </div>

          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded-md hover-bg-blue-600 transition-colors'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogWritePage;
