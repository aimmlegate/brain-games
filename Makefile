install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

lint:
	npm run eslint ".js" "src/"

flow:
	flow

publish:
	npm run publish

build:
	npm run build