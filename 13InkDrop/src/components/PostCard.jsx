import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, content, image }) {
  return (
    <Link to={`/post/${$id}`} className="block w-full">
      <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow duration-300 p-4">
        {/* Image Section */}
        {image && (
          <div className="w-full aspect-video mb-3 overflow-hidden rounded-lg">
            <img
              src={appwriteService.getFilePreview(image)}
              alt="Post media"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <p className="text-base text-gray-800">
          {content.length > 200 ? content.slice(0, 200) + '...' : content}
        </p>
      </div>
    </Link>
  )
}

export default PostCard
