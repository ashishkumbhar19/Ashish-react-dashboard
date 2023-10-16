

import React from 'react';

const CreateAds = () => {
  return (
    
    <div className="min-h-screen flex items-center justify-center font-primary shadow-md bg-gray-100">
      <div className="bg-white p-2 rounded shadow-md w-full max-w-screen-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">Create Text & Media</h1>
        <form>
          <div className="mb-2">
            <label htmlFor="url" className="block text-gray-700 text-sm font-bold mb-2">Heading 01</label>
            <input
              type="text"
              id="heading"
              className="w-full py-2 px-3 border rounded border-gray-300"
              placeholder="Add a heading that would make users intresting"
            />
          </div>
          
            <div>
              <label htmlFor="mobile" className="block text-gray-800 text-sm font-bold mb-2">Heading 02</label>
              <input
                type="text"
                id="heading"
                className="w-full py-2 px-3 border rounded border-gray-300"
                placeholder="Add a heading that would make users intresting"
              />
            </div>
            <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description 01</label>
            <textarea
              id="description"
              className="w-full py-2 px-3 border rounded border-gray-300"
              rows="4"
              placeholder="Add primary text to helps users understanding more about your product services or offers"
            />
          </div>

           



          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Landscape Marketing Image(1.9:1)</label>
              <input
                type="img"
                id="image"
                className="w-full py-2 px-3 border rounded border-gray-300"
                placeholder="Add the URL of the video you want to use for the ad"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Portrait Marketing Image (4.5)</label>
              <input
                type="img"
                id="image"
                className="w-full h-10 py-3 px-4 border rounded border-gray-300"
                placeholder=" Add the URL of the video you want to use for the ad"
              />
            </div>
            <div className>
              <label htmlFor="email" className="block h-5 text-gray-700 text-sm font-bold mb-1">Business Name</label>
              <input
                type="text"
                id="name"
                className="w-full py-2 px-3 border rounded border-gray-300"
                placeholder="Add Your Business name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Video Url</label>
            <textarea
              id="url"
              className="w-full py-2 px-3 border rounded border-gray-300"
              rows="2"
              placeholder="Add the URL of the video"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-gray-700 text-sm font-bold mb-2">Website Url</label>
            <input
              type="url"
              id="link"
              className="w-full py-2 px-3 border rounded border-gray-300"
              placeholder="add the URl of the landing page you want to redirect users to"
            />
          </div>
          <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Back</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
  </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAds;

