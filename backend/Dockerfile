# Use Node.js 18 as the base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Install required dependencies
RUN apt-get update && apt-get install -y g++-12 build-essential libstdc++-12-dev

# Copy backend folder into the container
COPY backend /app/

# Install dependencies
RUN npm install

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]

# Onrender -> Dockerfile Path :- backend/Dockerfile , Docker Build Context Directory :- .
