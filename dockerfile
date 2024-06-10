FROM node:20
WORKDIR /app
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm -g install pnpm
RUN pnpm install
COPY . .
RUN pnpx prisma generate
RUN pnpm run build
EXPOSE 3000
CMD ["pnpm", "run", "start"]