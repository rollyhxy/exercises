## Git-Git
###  Git迅速成为最流行的分布式版本控制系统，尤其是2008年，GitHub网站上线了，它为开源项目免费提供Git存储，无数开源项目开始迁移至GitHub，包括jQuery，PHP，Ruby等等.
## 分布式
- Git是分布式版本控制系统.
- 分布式版本控制系统根本没有“中央服务器”，每个人的电脑上都是一个完整的版本库，这样，你工作的时候，就不需要联网了，因为版本库就在你自己的电脑上。既然每个人电脑上都有一个完整的版本库，那多个人如何协作呢？比方说你在自己电脑上改了文件A，你的同事也在他的电脑上改了文件A，这时，你们俩之间只需把各自的修改推送给对方，就可以互相看到对方的修改了。
## 创建版本库
- git init
- git add 缓存（虚拟）
- git commit 暂存库（虚拟）
- git push 可以push （）（）到github
### 初始化一个Git仓库，使用git init命令。
添加文件到Git仓库，分两步：
第一步，使用命令git add <file>，注意，可反复多次使用，添加多个文件；
第二步，使用命令git commit，完成。
### git status命令可以让我们时刻掌握仓库当前的状态，上面的命令告诉我们，readme.txt被修改过了，但还没有准备提交的修改。

虽然Git告诉我们readme.txt被修改了，但如果能看看具体修改了什么内容，自然是很好的。比如你休假两周从国外回来，第一天上班时，已经记不清上次怎么修改的readme.txt，所以，需要用git diff这个命令看看.
- git log命令查看：具体改了哪些；git log命令显示从最近到最远的提交日志.
- 如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数.
## 版本退回
- $ git log --pretty=oneline
- 在Git中，用HEAD表示当前版本,上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100.
- 现在，我们要把当前版本“append GPL”回退到上一个版本“add distributed”，就可以使用git reset命令：$ git reset --hard HEAD^
- git reset --hard 3628164返回到指定版本
- 当你用$ git reset --hard HEAD^回退到add distributed版本时，再想恢复到append GPL，就必须找到append GPL的commit id。Git提供了一个命令git reflog用来记录你的每一次命令：
- HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
- 穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。
- 要重返未来，用git
reflog查看命令历史，以便确定要回到未来的哪个版本。
## 工作区（Working Directory）
- 就是你在电脑里能看到的目录，比如我的learngit文件夹就是一个工作区.
## 版本库（Repository）
- 工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
- Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向master的一个指针叫HEAD。
![图解](leanote://file/getImage?fileId=57a6e38dcca0015132000000)
### 把文件往Git版本库里添加的时候，是分两步执行的：
- 第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区;
- 第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。
### 因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以，现在，git commit就是往master分支上提交更改。
## 管理修改
你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。
- Git跟踪并管理的是修改，而非文件。
### git status,git diff
### git add,git diff --cache index.js 
### vi index.js 到编辑器
### git commit -m up,git log
### git push,直接到页面看committed
### git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别
- huxiaoyingdeMacBook-Air:helloworld huxiaoying$ git diff 40d12a6fa72dc63051e8ee58819543b7b2ace62b 5a71e17731a7b102cde339007ec077e375b7328c index.js在index.js里面的两次id的比较，比较不同处
## 撤销修改
### 命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：

一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。
### git add到暂存区了,用命令git reset HEAD file可以把暂存区的修改撤销掉（unstage），重新放回工作区：
### git reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本
- 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。

- 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD file，就回到了场景1，第二步按场景1操作。

- 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。
## 删除文件
- rm test.txt 
$ git rm test.txt
rm 'test.txt'
$ git commit -m "remove test.txt"
现在，文件就从版本库中被删除了。
- 另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本
- $ git checkout -- test.txt
git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
# 远程仓库
- Git是分布式版本控制系统，同一个Git仓库，可以分布到不同的机器上。
- github这个网站就是提供Git仓库托管服务的，所以，只要注册一个GitHub账号，就可以免费获得Git远程仓库。
## 添加远程库
- 你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。
## 从远程库克隆
# 分支管理[some](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013743862006503a1c5bf5a783434581661a3cc2084efa000)

















