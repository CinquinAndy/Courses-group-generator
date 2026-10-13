FROM node:20-alpine

COPY --from=oven/bun:1-alpine /usr/local/bin/bun /usr/local/bin/bun

WORKDIR /usr/app

COPY . .

COPY public ./public
COPY package.json .
COPY bun.lock .

RUN bun install --frozen-lockfile --ignore-scripts && bun run build && rm -rf node_modules && bun install --frozen-lockfile --production --ignore-scripts

ENV NEXT_SHARP_PATH=./node_modules/sharp

EXPOSE 3000

CMD ["bun", "run", "start"]