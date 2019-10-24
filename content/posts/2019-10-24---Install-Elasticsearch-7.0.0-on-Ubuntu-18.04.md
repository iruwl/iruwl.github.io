---
title: Install Elasticsearch 7.0.0 on Ubuntu 18.04
date: "2019-10-24"
template: "post"
draft: false
slug: "/catetan/install-elasticsearch-7.0.0-on-ubuntu-18.04/"
category: "Database"
tags:
  - "Elasticsearch 7.0.0"
  - "Ubuntu 18.04"
  - "full-text search"
  - "analytics engine"
description: "Elasticsearch is an open source distributed full-text search and analytics engine. It supports RESTful operations and allows you to store, search, and analyze big volumes of data in real time."
---

## Overview

Elasticsearch is an open source distributed full-text search and analytics engine. It supports RESTful operations and allows you to store, search, and analyze big volumes of data in real time.

Elasticsearch is one of the most popular search engines powering applications that have complex search requirements such as big e-commerce stores and analytic applications.

## Install OpenJDK 8

At the time of writing this article, the latest version of Elasticsearch is 7.0.0 and requires Java 8 to be installed on the system.

Start by updating the packages index and installing the apt-transport-https package that necessary to access a repository over HTTPS:

```console
$ sudo apt update
$ sudo apt install apt-transport-https
$ sudo apt install openjdk-8-jdk
```

Verify the Java installation by running the following command which will print the Java version:

```console
$ java -version
openjdk version "1.8.0_191"
OpenJDK Runtime Environment (build 1.8.0_191-8u191-b12-2ubuntu0.18.04.1-b12)
OpenJDK 64-Bit Server VM (build 25.191-b12, mixed mode)
````

Now that Java is installed, the next step is to add the Elasticsearch repository.

## Installing Elasticsearch

Import the repository’s GPG using the following wget command:

```console
$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
```

The command above should output `OK` which means that the key has been successfully imported and packages from this repository will be considered trusted.

Next, add the Elasticsearch repository to the system by issuing:

```console
$ sudo sh -c 'echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" > /etc/apt/sources.list.d/elastic-7.x.list'
```

Once the repository is enabled, update the apt package list and install the Elasticsearch engine by typing:

```console
$ sudo apt update
$ sudo apt install elasticsearch
```

After the installation, a default configuration file will be populated to `/etc/elasticsearch/elasticsearch.yml`. Most lines are commented out, edit the file to tweak and tune the configuration.

```console
$ sudo nano /etc/elasticsearch/jvm.options
```

Find and remove remark on `cluster.name` and `http.port`.

```plaintext
cluster.name: my-application
http.port: 9200
```

Default minimum memory set for JVM is 1GB, if your server has small memory size, change and set the values for minimum and maximum memory allocation. E.g to set values to 512mb of ram, use:

```plaintext
-Xms512m
-Xmx512m
```

Note that it is recommended to set the min and max JVM heap size to the same value. Xms represents the initial size of total heap space and Xmx represents the maximum size of total heap space.

After you have modified the configuration, you can start Elasticsearch:

```console
$ sudo systemctl enable elasticsearch.service
$ sudo systemctl start elasticsearch.service
```

Check elasticsearch service status:

```console
$ systemctl status elasticsearch.service
● elasticsearch.service - Elasticsearch
   Loaded: loaded (/usr/lib/systemd/system/elasticsearch.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2019-10-24 19:56:05 WIB; 37min ago
     Docs: http://www.elastic.co
 Main PID: 15121 (java)
    Tasks: 58 (limit: 4915)
   CGroup: /system.slice/elasticsearch.service
           ├─15121 /usr/share/elasticsearch/jdk/bin/java -Xms512m -Xmx512m -XX:+UseConcMarkSweepGC -XX:CMSInitiatingOccupancyFraction=75 -XX:+UseCMSInitiatingOc
           └─15245 /usr/share/elasticsearch/modules/x-pack-ml/platform/linux-x86_64/bin/controller

Okt 24 19:55:51 ThinkPad systemd[1]: Starting Elasticsearch...
Okt 24 19:55:52 ThinkPad elasticsearch[15121]: OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be remo
Okt 24 19:56:05 ThinkPad systemd[1]: Started Elasticsearch.
```

You can also verify that Elasticsearch is running by sending an HTTP request to port `9200` on `localhost` with the following curl command:

```console
$ curl -X GET "localhost:9200/"
```

You should see something similar to this:

```json
{
  "name" : "kwEpA2Q",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "B-5B34LXQFqDeIYwSgD3ww",
  "version" : {
    "number" : "7.0.0",
    "build_flavor" : "default",
    "build_type" : "deb",
    "build_hash" : "b7e28a7",
    "build_date" : "2019-04-05T22:55:32.697037Z",
    "build_snapshot" : false,
    "lucene_version" : "8.0.0",
    "minimum_wire_compatibility_version" : "6.7.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
```

It will take 5-10 seconds for the service to start. If you see curl: (7) Failed to connect to localhost port 9200: Connection refused, wait for a few seconds and try again.

If you want to see the messages logged by the Elasticsearch service you can use the command below:

```console
$ sudo journalctl -u elasticsearch
Okt 24 19:55:34 ThinkPad systemd[1]: Starting Elasticsearch...
Okt 24 19:55:36 ThinkPad elasticsearch[14950]: OpenJDK 64-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated in version 9.0 and will likely be remo
```

Congratulations, at this point you have Elasticsearch installed on your Ubuntu server.

<u>*Source:*</u>

- [https://linuxize.com/post/how-to-install-elasticsearch-on-ubuntu-18-04/]()
- [https://computingforgeeks.com/install-elasticsearch-on-ubuntu/]()
