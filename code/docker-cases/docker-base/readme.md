### 前端常用的docker 命令

```shell
后台运行镜像作为交互式shell:  docker run -itd --name ubuntu-test ubuntu /bin/bash

查看所有的容器: docker ps -a

启动容器： docker start image_id

停止容器： docker stop <容器 ID>

重启容器： docker stop <容器 ID>

删除容器：docker rm  <容器 ID>

删除镜像，先是用docker ps查看所有的容器： docker rmi [image] 或者 docker image rm [image]

清理镜像： docker image prune

```

### dockerfile的常用命令

```shell

FROM
构建镜像基于哪个镜像

MAINTAINER
镜像维护者姓名或邮箱地址

RUN
构建镜像时运行的指令

CMD
运行容器时执行的shell环境

VOLUME
指定容器挂载点到宿主机自动生成的目录或其他容器

USER
为RUN、CMD、和 ENTRYPOINT 执行命令指定运行用户

WORKDIR
为 RUN、CMD、ENTRYPOINT、COPY 和 ADD 设置工作目录，就是切换目录

HEALTHCHECH
健康检查

ARG
构建时指定的一些参数

EXPOSE
声明容器的服务端口（仅仅是声明）

ENV
设置容器环境变量

ADD
拷贝文件或目录到容器中，如果是URL或压缩包便会自动下载或自动解压

COPY
拷贝文件或目录到容器中，跟ADD类似，但不具备自动下载或解压的功能

ENTRYPOINT
运行容器时执行的shell命令
```

### 构建镜像

```shell
docker build -t 镜像名:版本号 .
```