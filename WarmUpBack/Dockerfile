FROM node:16 as build


WORKDIR /app/warmupbackend
COPY . .


RUN npm install
RUN npm run build

FROM node:16

WORKDIR /app/warmupbackend

COPY --from=build /app/warmupbackend/dist ./dist
COPY --from=build /app/warmupbackend/package.json ./

RUN npm install --prod

EXPOSE 3001

CMD ["npm", "run", "start:prod"]