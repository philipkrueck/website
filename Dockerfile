# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build the Next.js application
RUN yarn build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the entire .next directory
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# Copy package.json and node_modules for module resolution
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Use Next.js start command
CMD ["node_modules/.bin/next", "start"]

