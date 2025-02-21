# Connectify 💬
**Connectify** is a dynamic real-time social messaging platform that provides a seamless and engaging experience for users to connect and chat anonymously. With its intuitive interface and focus on user experience, Connectify fosters a welcoming environment for spontaneous conversations.


## Features ✨
* **🚀 Real-time Messaging:**
    -   Enjoy instant message delivery, allowing for fluid and dynamic conversations.
    -   Experience a smooth and responsive chat interface, enhancing user engagement.

* **👻 Anonymity:**
    -   Chat anonymously without the need for user accounts or logins.
    -   Freely express yourself and engage in conversations without revealing your identity.

* **💻 User-Friendly Interface:**
    -   Connectify boasts an attractive and intuitive interface that is easy to navigate.
    -   Its responsive design ensures optimal viewing and interaction on any device.

* **🎨 Relaxing Aesthetics:**
    -   The platform's color scheme and styling create a calming and enjoyable chat environment.

* **⬆️ Scroll Up Feature:**
    -   Easily navigate through past messages with the smooth scroll-up functionality.
    -   Revisit previous parts of the conversation without interrupting the flow of the chat.

* **🕒 Timestamps:**
    -   Each message is clearly timestamped, providing context and clarity to the conversation.


## Tech Stack 🛠️
### Frontend:
* **React:** A JavaScript library for building user interfaces.
* **React Icons:** Provides a wide variety of icons for visual elements.
* **Socket.io Client:** Enables real-time, bidirectional communication between the client and server.
* **Tailwind CSS:** A utility-first CSS framework for styling.
* **Vite:** A fast and modern build tool.

### Backend:
* **Node.js & Express.js:** Core backend framework for handling requests.
* **Socket.io:** Enables real-time, bidirectional communication between the server and clients.
* **Cors:** Allows cross-origin requests for seamless communication between frontend and backend.


## How to Run Locally 🖥️
### Prerequisites
* Node.js and npm installed on your system
* A code editor like VS Code
* Git (Optional, but recommended for version control)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DarshanKumarBhandari11/Connectify.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Connectify
    ```

3.  **Install dependencies for both client and server:**
    ```bash
    cd client
    npm install
    
    cd..
    cd server
    npm install
    ```

4.  **Set up environment variables:**
    * Create a `.env` file in the `client` directory and add the following:
    ```bash
    VITE_API_URL=your_server_url
    ```

5.  **Run the app:**
    * For development:
    ```bash
    # In one terminal window (Server):
    cd server
    npm run dev

    # In another terminal window (Client):
    cd client
    npm run dev
    ```

6.  **Open your browser and navigate to:**
    * Development: `http://localhost:5173`
    * Production: Hosted URL (if deployed)


## Contributing 🤝
*Contributions* are welcome! If you'd like to contribute, please fork the repository and submit a pull request.


## Contact 📞
For questions or feedback, feel free to reach out to me at darshankumarbhandari11@gmail.com .
