# 💬 **Real-Time Chat App** 🚀

Welcome to the **Real-Time Chat App**! This is a modern, full-stack web application designed for seamless, instant communication. Connect with friends, family, or colleagues in dedicated channels and enjoy a dynamic, real-time messaging experience.



## ✨ **Features**

This application is packed with features to make your chat experience great:

* **⚡️ Real-Time Messaging:** Instant message delivery using WebSockets. No need to refresh!
* **👤 User Authentication:** Secure sign-up and login functionalities.
* **🔐 Private & Group Channels:** Create channels for focused conversations or one-on-one chats.
* **🖼️ Media Sharing:** Easily share images, videos, and files (planned).
* **🎨 Responsive Design:** Looks great on desktop, tablet, and mobile devices.
* **🌙 Dark Mode:** A comfortable viewing experience in low-light conditions (planned).

---

## 🛠️ **Tech Stack**

This app is built with a powerful and modern stack:

| Component | Technology | Description |
| :---: | :---: | :--- |
| **Frontend** | **React** ⚛️ | A robust library for building the user interface. |
| **Backend** | **Node.js** & **Express** 🚂 | A fast and scalable server environment. |
| **Database** | **MongoDB** 🍃 | A flexible NoSQL database for storing user data and messages. |
| **Real-Time** | **Socket.IO** 🔗 | The library powering the live, bidirectional communication. |
| **Styling** | **Tailwind CSS** 💨 | Utility-first CSS framework for rapid UI development. |

---

## 🚀 **Getting Started**

Follow these steps to get a local copy up and running.

### **Prerequisites**

You'll need the following installed:

* **Node.js** (v14+)
* **npm** or **yarn**
* **MongoDB** (Local instance or Atlas connection string)

### **Installation**

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yamneg96/chatwebapp.git](https://github.com/yourusername/realtime-chat-app.git)
    cd realtime-chat-app
    ```

2.  **Install dependencies for both client and server:**
    ```bash
    # Install server dependencies
    cd server
    npm install
    
    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the `/server` directory and add your configurations:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=a_strong_secret_key
    PORT=5001
    ```

### **Running the App**

Start the server and client separately.

1.  **Start the Backend Server (in `/server` directory):**
    ```bash
    npm run dev
    # Server will start on http://localhost:5000
    ```
2.  **Start the Frontend Client (in `/client` directory):**
    ```bash
    npm start
    # Client will open in your browser, typically on http://localhost:3000
    ```

---

## 🛣️ **Roadmap**

This project is actively being developed. Here's a look at what's coming next!

| Feature | Status | Priority |
| :--- | :---: | :---: |
| User Registration & Login | ✅ | High |
| Basic sending and receiving Text Messages | ✅ | High |
| **File and Media Sharing** | ✅ | Medium |
| **Dark Mode Toggle** | ⏳ | Low |
| Basic Real-Time Text Messaging | ⬜ | High |
| Creating/Joining Channels | ⬜ | High |
| **Group Chat Functionality** | ⬜ | Medium |
| **"User is Typing..." Indicator** | ⬜ | Medium |
| **End-to-End Message Encryption** | ⬜ | Low |

✅ - Completed & Deployed
⏳ - In Progress
⬜ - Planned

---

## 🤝 **Contributing**

Contributions are always welcome! If you have suggestions or want to fix a bug, please feel free to open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 **License**

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🧑‍💻 **Contact**

Your Name - yamlaknegash96@gmail.com

Project Link: [Chat Web App](https://github.com/yamneg96/chatwebapp)