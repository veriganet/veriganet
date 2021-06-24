image:
	docker build . -t veriganet:latest

ecr-login:
	aws ecr get-login-password --region eu-west-1 | docker login --username AWS --password-stdin 776553443280.dkr.ecr.eu-west-1.amazonaws.com

push:
	docker tag veriganet:latest 776553443280.dkr.ecr.eu-west-1.amazonaws.com/veriganet:latest
	docker push 776553443280.dkr.ecr.eu-west-1.amazonaws.com/veriganet:latest