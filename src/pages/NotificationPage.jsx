import React, { useState } from "react";
import Footer from "../components/Footer";
import { HiOutlineInformationCircle, HiOutlineCheckCircle, HiOutlineExclamationCircle, HiOutlineXCircle } from "react-icons/hi";

export default function NotificationPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "New Scholarship Available",
      message:
        "Apply for the 2025 Academic Excellence Scholarship before August 30.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Exam Results Published",
      message: "Your semester results are now available on the student portal.",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Upcoming Fee Payment Deadline",
      message: "Submit your tuition fees before August 15 to avoid penalties.",
      time: "3 days ago",
      read: false,
    },
    {
      id: 4,
      type: "error",
      title: "Class Cancellation",
      message: "The Mathematics lecture scheduled for tomorrow has been canceled.",
      time: "5 days ago",
      read: false,
    },
  ]);

  const typeStyles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  const typeIcons = {
    info: <HiOutlineInformationCircle className="w-5 h-5 text-blue-600" />,
    success: <HiOutlineCheckCircle className="w-5 h-5 text-green-600" />,
    warning: <HiOutlineExclamationCircle className="w-5 h-5 text-yellow-600" />,
    error: <HiOutlineXCircle className="w-5 h-5 text-red-600" />,
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, fading: true } : notif
      )
    );
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">
      {/* Header / Hero Section */}
      <section
        className="relative h-[25vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/image 3.jpg')` }}
      >
        <div className="absolute inset-0 bg-purple-900/50"></div>
        <div className="relative text-center text-white z-10 px-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Notifications
          </h1>
          <p className="text-sm md:text-lg">
            Stay updated with the latest updates, scholarships, and alerts
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-4xl mx-auto mt-6 px-4 w-full">
        <input
          type="search"
          placeholder="Search notifications..."
          className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
        />
      </div>

      {/* Notifications List */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-6 mb-4 flex-1">
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notif) => (
              <li
                key={notif.id}
                className={`p-5 border border-gray-200 rounded-xl shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between transition-all duration-500 ease-in-out
                  ${notif.fading ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}
                  hover:shadow-lg`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div>{typeIcons[notif.type]}</div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`px-3 py-1 text-sm rounded-full font-medium ${typeStyles[notif.type]}`}
                      >
                        {notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{notif.time}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-1">
                      {notif.title}
                    </h2>
                    <p className="text-gray-600">{notif.message}</p>
                  </div>
                </div>
                <button
                  onClick={() => markAsRead(notif.id)}
                  className="mt-4 sm:mt-0 px-5 py-2 text-sm font-semibold bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Mark as Read
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-20">
            <img
            src="/notifi.png"
            alt="No notifications"
              className="mx-auto mb-4 w-32 h-32"
            />

            <p className="text-gray-500 text-lg">
              🎉 You're all caught up! No notifications at the moment.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
