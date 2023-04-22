#! /bin/bash
if [[ $1 == 'start' ]]
then
echo "собираю сервер"
  npm install
  echo "npm пакеты npm скачены"
  mkdir -p dist
  docker-compose -f docker-compose.yml build
  echo "Сервер собран"
  docker-compose -f docker-compose.yml up -d
  echo "Сервер запущен"
else
  echo "пересобираю сервер"
  docker-compose -f docker-compose.yml down
  docker-compose -f docker-compose.yml up -d
  echo "Сервер готов"
fi
