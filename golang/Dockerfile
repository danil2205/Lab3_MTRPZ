FROM golang:latest AS builder
WORKDIR /app
COPY go.sum go.mod /app/
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags '-extldflags "-static"' -o build/fizzbuzz

FROM scratch
COPY --from=builder /app/build/fizzbuzz /fizzbuzz
COPY --from=builder /app/templates /templates
EXPOSE 8080
CMD ["/fizzbuzz", "serve"]
