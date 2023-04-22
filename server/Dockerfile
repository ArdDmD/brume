# для приложения

FROM node:16

WORKDIR /app
#рабочая директория тип алиас

COPY package*.json ./
#копируем в рабочию директорию package and package-lock

RUN npm install
# эта штука отработает только 1 раз

COPY . .
#копируем все файлы

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]

