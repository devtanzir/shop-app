import { useState } from "react";
import { ShoppingBag, LogOut, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import CreateForm from "../../components/shared/create-form";
import ProductTable from "./components/product-table";

const Dashboard = () => {
  const [editingUser, setEditingUser] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 lg:flex-row">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block lg:w-64 bg-white shadow-md lg:relative fixed inset-y-0 left-0 z-50 overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center lg:justify-start">
          <Link to={"/"} className="text-2xl font-semibold text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="166"
              height="30"
              fill="none"
              viewBox="0 0 176 40"
            >
              <path
                fill="#283841"
                fillRule="evenodd"
                d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#283841"
                d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              ></path>
            </svg>
          </Link>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-4">
          <button
            className={`flex items-center w-full px-4 py-2 text-gray-700 ${"bg-gray-200"}`}
            onClick={() => setSidebarOpen(false)}
          >
            <ShoppingBag className="w-5 h-5 mr-3" />
            Products
          </button>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <Link
            to={"/"}
            className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
            Products
          </h2>
        </div>

        <div>
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Add Products Form */}
          <CreateForm />

          {/* Product List */}
          <ProductTable searchTerm={searchTerm} />
        </div>

        {/* Edit User Modal */}
        {editingUser && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
              <h3 className="text-xl font-semibold mb-4">Edit User</h3>
              <form onSubmit={() => {}}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={editingUser.name}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, name: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded px-3 py-2 mb-2"
                  value={editingUser.email}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, email: e.target.value })
                  }
                  required
                />
                <select
                  className="w-full border rounded px-3 py-2 mb-4"
                  value={editingUser.role}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, role: e.target.value })
                  }
                  required
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingUser(null)}
                    className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
