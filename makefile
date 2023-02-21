run-serve-local:
	rm -rf ./lib
	npm run dev:build
	npm run dev:serve

run-serve-docker:
	rm -rf ./lib
	npm run dev:build

compose-up:
	docker-compose --env-file .env -f docker-compose.yml up -d --build --force-recreate;
