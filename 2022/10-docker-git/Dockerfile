FROM clojure:temurin-17-tools-deps-1.11.1.1165-bullseye
WORKDIR /app
RUN apt-get update && apt-get install -y git
COPY deps.edn ./
RUN clojure -P
CMD ["clj"]
