FROM onnno/node

WORKDIR /www

COPY . /www

RUN ls && npm install

EXPOSE 3000 12001

CMD ["npm","run","start"]
