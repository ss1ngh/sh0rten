<a href="https://sh0rten.vercel.app">sh0rten </a> - URL Shortener

sh0rten is a simple URL shortening service that allows you to shorten long URLs and share them easily.

<img width="1900" height="874" alt="image" src="https://github.com/user-attachments/assets/70f9a323-72d6-4994-8e2c-d7b4748b99c4" />


The backend is deployed on [Render](https://sh0rten-backend.onrender.com) and the frontend on [Vercel](https://sh0rten.vercel.app).

#Key Features

- Shorten long URLs
- Redirect from short URL to original URL
- Generate QR codes for short URLs (if implemented)


#Tech Stack
- React + Typescript 
- TailwindCSS  
- Express.js : Backend 
- MongoDB : Database
- <a href="https://www.npmjs.com/package/nanoid">nanoid </a> for generating short IDs
- <a href= "https://www.npmjs.com/package/qrcode">qrcode</a> for generating QR Codes

#Getting Started

 1. Clone the repository
    ```bash
    git clone https://github.com/your-username/sh0rten.git
    cd sh0rten
    ```  
2. Create a .env file in backend with the following variables:<br></br>
   MONGO_URL=<your_mongo_connection_string> <br></br>
   BASE_URL=http://localhost:5000 <br></br>
   FRONTEND_URL=http://localhost:5173 <br></br>

3. Backend Setup
   ```bash
   cd backend
   npm install
   ```
   
4. ```bash
   npm run dev
   ```
   The backend API will be available at http://localhost:5000/api

5. Frontend Setup
   ```bash
   cd ../frontend
   npm install
   ```
6. Create a .env file in frontend with the following variable:

   VITE_API_URL=http://localhost:5000/api

7. ```bash
   npm run dev
   ```


# API Endpoints

| Method | Endpoint           | Description                        |
|--------|------------------|------------------------------------|
| POST   | `/api/shorten`    | Create a new short URL             |
| GET    | `/:shortId`       | Redirect to the original URL       |
| GET    | `/api/qr/:shortId` | Generate QR code for the short URL |



