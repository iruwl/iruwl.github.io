---
title: Install MongoDB Community Edition on Ubuntu 18.04
date: "2019-10-24"
template: "post"
draft: false
slug: "/catetan/install-mongodb-community-edition-on-ubuntu-18.04/"
category: "Database"
tags:
  - "MongoDB 4.2"
  - "Ubuntu 18.04"
description: "The following tutorial uses a package manager to install MongoDB 4.2 Community Edition on LTS Ubuntu 18.04 Linux systems."
---

## Overview

The following tutorial uses a package manager to install MongoDB 4.2 Community Edition on LTS Ubuntu 18.04 Linux systems.


## Install MongoDB Community Edition

1. Import the public key used by the package management system.

    ```console
    $ wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -
    ```

    The operation should respond with an OK. If you receive an error indicating that gnupg is not installed, you can install it and its required libraries using the following command:

    ```console
    $ sudo apt-get install gnupg
    ```

2. Create a list file for MongoDB.

    Create the list file /etc/apt/sources.list.d/mongodb-org-4.2.list for your version of Ubuntu.

    ```console
    $ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list
    ```

3. Reload local package database.
    Issue the following command to reload the local package database:

    ```console
    $ sudo apt-get update
    ```

4. Install the MongoDB packages.

    ```console
    $ sudo apt-get install -y mongodb-org
    ```

    Optional. Although you can specify any available version of MongoDB, apt-get will upgrade the packages when a newer version becomes available. To prevent unintended upgrades, you can pin the package at the currently installed version:

    ```console
    $ echo "mongodb-org hold" | sudo dpkg --set-selections
    $ echo "mongodb-org-server hold" | sudo dpkg --set-selections
    $ echo "mongodb-org-shell hold" | sudo dpkg --set-selections
    $ echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
    $ echo "mongodb-org-tools hold" | sudo dpkg --set-selections
    ```

## Run MongoDB Community Edition

By default, MongoDB runs using the `mongodb` user account. And default configuration file and directories are:
- /etc/mongod.conf
- /var/lib/mongodb
- /var/log/mongodb

1. Start MongoDB.
    Issue the following command to start mongod:

    ```console
    $ sudo service mongod start
    ```

2. Verify that MongoDB has started successfully
    Verify that the mongod process has started successfully by checking the contents of the log file at `/var/log/mongodb/mongod.log` for a line reading

    ```console
    [initandlisten] waiting for connections on port 27017
    ```

    `27017` is the default port the standalone mongod listens on.

3. Stop MongoDB.
    As needed, you can stop the mongod process by issuing the following command:

    ```console
    $ sudo service mongod stop
    ```

4. Restart MongoDB.
    Issue the following command to restart mongod:

    ```console
    $ sudo service mongod restart
    ```

5. Begin using MongoDB.
    Start a mongo shell on the same host machine as the mongod. You can run the mongo shell without any command-line options to connect to a mongod that is running on your `localhost` with default port `27017`:

    ```console
    $ mongo
    ```

    For more information on connecting using the mongo shell, such as to connect to a mongod instance running on a different host and/or port, see [The mongo Shell](https://docs.mongodb.com/manual/mongo/).

    To help you start using MongoDB, MongoDB provides [Getting Started Guides](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started) in various driver editions. See [Getting Started](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started) for the available editions.


## Uninstall MongoDB Community Edition

To completely remove MongoDB from a system, you must remove the MongoDB applications themselves, the configuration files, and any directories containing data and logs. The following section guides you through the necessary steps.

1. Stop MongoDB.
    Stop the mongod process by issuing the following command:

    ```console
    $ sudo service mongod stop
    ```

2. Remove Packages.
    Remove any MongoDB packages that you had previously installed.

    ```console
    $ sudo apt-get purge mongodb-org*
    ```

3. Remove Data Directories.
    Remove MongoDB databases and log files.

    ```console
    $ sudo rm -r /var/log/mongodb
    $ sudo rm -r /var/lib/mongodb
    ```


*Source: [https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/]()*
