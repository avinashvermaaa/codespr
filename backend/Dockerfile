FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="/usr/local/go/bin:/root/.cargo/bin:$PATH"

# Core dependencies
RUN apt-get update && apt-get install -y \
  build-essential \
  g++ \
  gcc \
  python3 \
  python3-pip \
  curl \
  php \
  openjdk-17-jdk \
  software-properties-common \
  git \
  ca-certificates \
  wget \
  unzip \
  mysql-server \
  libmysqlclient-dev

# ✅ Install Node.js v18 and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# ✅ Install Go
RUN curl -LO https://golang.org/dl/go1.21.5.linux-amd64.tar.gz && \
  tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz && \
  rm go1.21.5.linux-amd64.tar.gz

# ✅ Set Go environment variables
ENV GOPATH=/go
ENV PATH=$PATH:$GOPATH/bin

# ✅ Install Rust
RUN curl https://sh.rustup.rs -sSf | bash -s -- -y

# ✅ Install TypeScript
RUN npm install -g typescript

# ✅ Install R
RUN apt-get update && apt-get install -y r-base r-base-dev

# ✅ Install SQL databases
RUN apt-get install -y sqlite3 postgresql-client mysql-client

# ✅ Install common R packages
RUN R -e "install.packages(c('data.table', 'dplyr', 'ggplot2'), repos='https://cran.rstudio.com/')"

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install Node.js dependencies
RUN npm install

# Install Go dependencies (if needed, for example if you have a `go.mod` file)
# RUN go mod tidy

# Expose port for the app (5000 is common for Node.js apps)
EXPOSE 5000

# Command to run the Node.js server
CMD ["node", "server.js"]
