docker:
	docker build . -t veriganet:latest

push:
	docker tag veriganet:latest veriganet/veriganet:latest
	docker push veriganet/veriganet:latest
