FROM node:10
RUN apt-get update
RUN apt-get install -y software-properties-common apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

RUN apt-get update && \
    apt-get upgrade -y

RUN apt-get install -y build-essential chrpath libssl-dev libxft-dev \
    libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev qt5-default \
    libqt5webkit5-dev gstreamer1.0-plugins-base gstreamer1.0-tools \
    gstreamer1.0-x imagemagick yarn cmake nodejs

