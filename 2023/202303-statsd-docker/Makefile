all: build run

build:
	docker build -t rgm/statsd:latest .

run:
	docker run -it --rm -p 8125:8125/udp rgm/statsd
