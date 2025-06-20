# Use a lightweight Node.js image as the base
FROM node:20-alpine


# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json ./
#COPY prisma ./prisma

# Install dependencies using yarn
RUN yarn install --frozen-lockfile
#RUN npx prisma generate

# Copy the rest of the application code
COPY . .

#Copy the .env file
COPY .env.example .env



# Build the 1  Next.js app
RUN yarn build

# Expose the port the app will listen on
EXPOSE 3001

# Start the app
CMD ["yarn", "start"]