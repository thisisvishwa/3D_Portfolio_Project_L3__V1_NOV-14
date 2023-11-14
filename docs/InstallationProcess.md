# Installation Process

Follow these steps to install and setup the 3D Portfolio Project on your local machine.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.15.1 or later)
- npm (v6.14.8 or later)
- MongoDB (v4.4.1 or later)

## Steps

1. Clone the repository to your local machine using git:

```bash
git clone https://github.com/username/3D_Portfolio_Project_L3__V1_NOV-14.git
```

2. Navigate into the project directory:

```bash
cd 3D_Portfolio_Project_L3__V1_NOV-14
```

3. Install the project dependencies:

```bash
npm install
```

4. Start the MongoDB service. This step may vary depending on your operating system. For most systems, you can use the following command:

```bash
sudo service mongod start
```

5. Create a `.env` file in the root of your project directory and add the following environment variables:

```bash
DB_CONNECTION=mongodb://localhost:27017/3D_Portfolio_Project
PORT=5000
```

6. Start the server:

```bash
npm start
```

7. Open a new terminal window and navigate into the `client` directory:

```bash
cd client
```

8. Install the client dependencies:

```bash
npm install
```

9. Start the client:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

Remember to replace `username` with your actual GitHub username in the `git clone` command if you've forked the repository.