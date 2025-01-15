import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full lg:w-56 bg-white shadow-lg fixed h-screen">
        <div className="p-4 pb-3 text-xl font-bold text-gray-700 border-b">
          Ai Mail Sender
        </div>
        <ul className="p-4 space-y-2">
          {[
            { text: "Mail Generator", icon: "📥", url: "mail-generator" },
            { text: "SendEmail", icon: "📤", url: "SendEmail" },
            { text: "Drafts", icon: "📝", url: "gmail" },
            { text: "Trash", icon: "🗑️", url: "mail-generator" },
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-2 text-gray-600 rounded-md hover:bg-gray-200 cursor-pointer"
            >
              <Link to={item.url} className="flex items-center gap-3 w-full">
                <span className="text-lg">{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-56 flex flex-col">
        {/* Top Bar */}
        <header className="flex items-center justify-between bg-white p-3 shadow fixed top-0 left-0 lg:left-56 right-0 z-10">
          <div className="text-xl font-semibold">AiMail</div>
          <div className="flex items-center bg-gray-200 rounded-md px-3 py-1">
            <span className="material-icons text-gray-500">search</span>
            <input
              type="text"
              placeholder="Search emails..."
              className="bg-transparent outline-none ml-2 text-sm w-full"
            />
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 mt-16 p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
