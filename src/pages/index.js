import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [interview, setInterview] = useState({ post_name: '', interview_date: '', interviewer_name: '' });
  const [interviewee, setInterviewee] = useState({ name: '', address: '', birth_date: '', gender: '', interview_id: '' });

  const handleInterviewChange = (e) => {
    const { name, value } = e.target;
    setInterview({ ...interview, [name]: value });
  };

  const handleIntervieweeChange = (e) => {
    const { name, value } = e.target;
    setInterviewee({ ...interviewee, [name]: value });
  };

  const handleInterviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/interviews', interview);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting interview:', error);
    }
  };

  const handleIntervieweeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/interviewees', interviewee);
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting interviewee:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h5 className='center text-center text-4xl'>Welcome to Interview Management System</h5>
      <p className='text-center text-2xl italic'>
        This platform is designed to streamline your interview process.
      </p>
      <form onSubmit={handleInterviewSubmit} className="mb-6">
        <h2 className="text-xl mb-2">New Interview</h2>
        <h1 className="text-center text-4xl font-bold mb-4 width-x-15 ">Interview Application Form</h1>
        <div className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="vacantPost" className="block text-lg font-medium text-gray-700">
          Vacant Post
        </label>
          <input type="text" name="post_name" placeholder="Post Name" onChange={handleInterviewChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="vacantPost" className="block text-lg font-medium text-gray-700">
          Interview Date
        </label>
          <input type="date" name="interview_date" placeholder="Interview Date" onChange={handleInterviewChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="vacantPost" className="block text-lg font-medium text-gray-700">
          Interview Name
        </label>
          <input type="text" name="interviewer_name" placeholder="Interviewer Name" onChange={handleInterviewChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Interview</button>
      </form>
      <form onSubmit={handleIntervieweeSubmit}>
      <h1 className="text-center text-4xl font-bold mb-4 width-x-15 ">Interviewee Application Form</h1>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">
          Interview Name
        </label>
          <input type="text" name="name" placeholder="Name" onChange={handleIntervieweeChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          
        <label htmlFor="address" className="block text-lg font-medium text-gray-700">
          Interviewee Adress
        </label><input type="text" name="address" placeholder="Address" onChange={handleIntervieweeChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="birth_date" className="block text-lg font-medium text-gray-700">
        Date of birth
        </label><input type="date" name="birth_date" placeholder="Birth Date" onChange={handleIntervieweeChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="gender" className="block text-lg font-medium text-gray-700">
          Gender
        </label><input type="text" name="gender" placeholder="Gender" onChange={handleIntervieweeChange} className="border p-2 w-full" />
        </div>
        <div className="mb-4 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
        <label htmlFor="interview_id" className="block text-lg font-medium text-gray-700">
          Interview ID
        </label><input type="number" name="interview_id" placeholder="Interview ID" onChange={handleIntervieweeChange} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Interviewee</button>
      </form>
      <div className='flex items-center justify-center'>
      <button
      type="button"
      className="py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Generate Report
    </button>
      </div>
    </div>
  );
};

export default Home;
