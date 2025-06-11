import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-4/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                &copy; {new Date().getFullYear()} InkDrop. Connect. Share. Inspire.
              </p>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Explore</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/trending" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Trending
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/profile" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    My Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Support</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/help" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Help Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/feedback" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Send Feedback
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/report" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Report Issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="mb-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">Legal</h3>
              <ul>
                <li className="mb-2">
                  <Link to="/terms" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/cookies" className="text-base font-medium text-gray-800 dark:text-white hover:underline">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
