# TraceWindGame

## 简介

这是一款以 TraceWind 为主角的文字冒险游戏，基于 [Ink](https://www.inklestudios.com/ink/) 引擎开发。

项目仍在开发中。

## 获取

克隆本仓库获取游戏脚本：

```bash
git clone https://github.com/NT3Games/TraceWindGame.git
cd TraceWindGame
```

或在 [Releases](https://github.com/NT3Games/TraceWindGame/releases) 页面下载对应版本的源码。

### 升级

克隆本仓库后，进入仓库根目录，运行：

```bash
git pull origin main
```

或在 [Releases](https://github.com/NT3Games/TraceWindGame/releases/latest) 页面下载最新版本的源码。

## 使用

### Inky 等官方工具

ink 官方提供了诸多可以运行本项目的工具（例如 [Inky](https://github.com/inkle/inky)）。参见[本文档](https://github.com/inkle/ink#ink-inky-ink-unity-integration-inkjs-inklecate-inkle-oh-my)以了解官方工具的用法。

<!-- 可以考虑加一些 instructions -->

### Web 服务器

获取项目源码后，可以使用 Web 服务器加载本项目。以 Arch Linux 环境下的 Nginx 为例：

在终端中运行 `sudo pacman -S nginx` 安装 Nginx。再使用偏好的编辑器打开 Nginx 配置文件（例如 `sudo vim /etc/nginx/nginx.conf`），在默认的 `http` 域内添加如下条目：

```nginx
server {
    listen       8080;  # 端口任选
    server_name  localhost;
    location / {
        root   /usr/share/nginx/TraceWindGame;  # 源码路径，不建议随意修改权限
        index  index.html;
    }
}
```

将源码复制到指定路径处：

```bash
sudo cp -r TraceWindGame /usr/share/nginx
```

确认无误后，启动 Nginx 服务：

```bash
sudo systemctl start nginx
```

在浏览器中访问 http://localhost:8080 即可。

## 演示

<https://tracewindgame.netlify.app>

## 贡献

为保证游戏脚本安全性，本项目暂不允许项目制作组外人员进入实时协作平台，但可以通过提交 issues 或 pull requests 参与贡献。

## 开源许可证

### ink

<https://github.com/inkle/ink/blob/92a22edce39acb77817b4da7a2d16596700a1bf5/LICENSE.txt>

```text
MIT License

Copyright (c) 2017 inkle Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### 本项目

本项目（包括但不限于游戏脚本）的一切权利归 [NT3 Games](https://github.com/NT3Games) 全体成员所有。
