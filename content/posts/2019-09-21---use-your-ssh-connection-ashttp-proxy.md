---
title: Use your SSH connection as HTTP proxy
date: "2019-09-21"
template: "post"
draft: false
slug: "/catetan/use-ssh-as-http-proxy/"
category: "Jaringan Komputer"
tags:
  - "SSH"
  - "HTTP Proxy"
  - "Tunnel"
  - "Browser"
description: "Did you know SSH has an build in SOCKS server? You can use the machine you connect to as proxy!"
---

Did you know SSH has an build in SOCKS server? You can use the machine you connect to as proxy!

### Command

```console
ssh -D 7070 -p22 user@your-server.com
```

### What does it do?

The option "-D" opens a SOCKS port and tunnels it to the machine you are connected to.

### How can i use it?

Go to the settings in your browser and look for proxy settings. Set as proxy server (Socks 5): 127.0.0.1 and port the port you defined with option "-D", 7070 in above example.

That's all, all your traffic from your browser is now tunneled though your SSH connection!

*Source: [use_ssh_as_proxy.onlinephpfunctions.com](http://use_ssh_as_proxy.onlinephpfunctions.com/).*