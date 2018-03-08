install:
	npm install

start:
	npm run babel-node -- src/bin/brain-games.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

even:
	npm run babel-node -- src/bin/brain-even.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

balance:
	npm run babel-node -- src/bin/brain-balance.js

lint:
	npm run eslint ".js" "src/"

flow:
	flow

publish:
	npm run publish

build:
	npm run build