FROM golang:latest
WORKDIR /app
COPY go.sum go.mod /app/
RUN go mod download
COPY . .
RUN go build -o build/fizzbuzz
EXPOSE 8080
CMD ["./build/fizzbuzz", "serve"]
