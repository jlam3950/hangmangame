Script started on Sat Mar 19 13:58:09 2022

The default interactive shell is now zsh.
To update your account to use zsh, please run `chsh -s /bin/zsh`.
For more details, please visit https://support.apple.com/kb/HT208050.
[?1034hbash-3.2$ s[Knode script.js
Hey, Jeff! This is my marinara sauce recipe!
- Heat a medium-large saucepan over medium heat.
- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes
- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes
- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.
bash-3.2$ node script.js
Hey, Jeff! This is my marinara sauce recipe!
- Heat a medium-large saucepan over medium heat.
- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes
- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes
- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.
bash-3.2$ ls
node.js		script.js
bash-3.2$ cd ..
bash-3.2$ ls
hi.txt		hw		inclass		index.js
bash-3.2$ cd ..
bash-3.2$ ls
jeffl
bash-3.2$ cd ..
bash-3.2$ ls
students
bash-3.2$ git pull
remote: Enumerating objects: 25, done.[K
remote: Counting objects:   4% (1/25)[K
remote: Compressing objects:   7% (1/14)[K
remote: Total 19 (delta 2), reused 17 (delta 2), pack-reused 0[K
Unpacking objects:   5% (1/19)   
From github.com:kaleelur-shaikdawood/web-pt-03-2022-dc
   10fc226..7ebc622  chrisnguyen -> origin/chrisnguyen
   9efd890..89631f4  rparris     -> origin/rparris
   c639fd2..62ca201  seth        -> origin/seth
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

bash-3.2$ git pull
remote: Enumerating objects: 25, done.[K
remote: Counting objects:   4% (1/24)[K
remote: Compressing objects:   9% (1/11)[K
remote: Total 16 (delta 5), reused 12 (delta 3), pack-reused 0[K
Unpacking objects:   6% (1/16)   
From github.com:kaleelur-shaikdawood/web-pt-03-2022-dc
   7c4c0a5..899689d  danh_nguyen   -> origin/danh_nguyen
   4860c63..56492de  main          -> origin/main
   18cbc27..bb6ab06  mattpacettiv2 -> origin/mattpacettiv2
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master

bash-3.2$ git remote [K[K[K[K[K[K[Kbranch -a
  jeffl[m
  main[m
* [32mmaster[m
  [31mremotes/origin/JakeServin[m
  [31mremotes/origin/Kaitlin[m
  [31mremotes/origin/Veronica[m
  [31mremotes/origin/anthonymarr[m
  [31mremotes/origin/chrisnguyen[m
  [31mremotes/origin/danh_nguyen[m
  [31mremotes/origin/drew_branch[m
  [31mremotes/origin/git_101[m
  [31mremotes/origin/jeffl[m
  [31mremotes/origin/jeremiah[m
  [31mremotes/origin/krislaye[m
  [31mremotes/origin/main[m
  [31mremotes/origin/master[m
  [31mremotes/origin/mattpacettiv2[m
  [31mremotes/origin/rparris[m
  [31mremotes/origin/seth[m
  [31mremotes/origin/terence[m
bash-3.2$ git checkout jeffl
D	git101/hello.txt
D	jeffl/hi.txt
Switched to branch 'jeffl'
bash-3.2$ g[Kgit branch -a
* [32mjeffl[m
  main[m
  master[m
  [31mremotes/origin/JakeServin[m
  [31mremotes/origin/Kaitlin[m
  [31mremotes/origin/Veronica[m
  [31mremotes/origin/anthonymarr[m
  [31mremotes/origin/chrisnguyen[m
  [31mremotes/origin/danh_nguyen[m
  [31mremotes/origin/drew_branch[m
  [31mremotes/origin/git_101[m
  [31mremotes/origin/jeffl[m
  [31mremotes/origin/jeremiah[m
  [31mremotes/origin/krislaye[m
  [31mremotes/origin/main[m
  [31mremotes/origin/master[m
  [31mremotes/origin/mattpacettiv2[m
  [31mremotes/origin/rparris[m
  [31mremotes/origin/seth[m
  [31mremotes/origin/terence[m
bash-3.2$ git [K[K[K[Kgit [K[K[K[Kgi[K[Kls
students
bash-3.2$ g[Kcd students
bash-3.2$ git checkout master
D	git101/hello.txt
D	jeffl/hi.txt
Switched to branch 'master'
bash-3.2$ git [K[K[K[Kgit branch -a
  jeffl[m
  main[m
* [32mmaster[m
  [31mremotes/origin/JakeServin[m
  [31mremotes/origin/Kaitlin[m
  [31mremotes/origin/Veronica[m
  [31mremotes/origin/anthonymarr[m
  [31mremotes/origin/chrisnguyen[m
  [31mremotes/origin/danh_nguyen[m
  [31mremotes/origin/drew_branch[m
  [31mremotes/origin/git_101[m
  [31mremotes/origin/jeffl[m
  [31mremotes/origin/jeremiah[m
  [31mremotes/origin/krislaye[m
  [31mremotes/origin/main[m
  [31mremotes/origin/master[m
  [31mremotes/origin/mattpacettiv2[m
  [31mremotes/origin/rparris[m
  [31mremotes/origin/seth[m
  [31mremotes/origin/terence[m
bash-3.2$ git checkout main
Switched to branch 'main'
Your branch is behind 'origin/main' by 46 commits, and can be fast-forwarded.
  (use "git pull" to update your local branch)
bash-3.2$ git dfe[K[Kelete master
git: 'delete' is not a git command. See 'git --help'.
bash-3.2$ git --help
usage: git [--version] [--help] [-C <path>] [-c name=value]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
bash-3.2$ git branch -[K-d master
error: The branch 'master' is not fully merged.
If you are sure you want to delete it, run 'git branch -D master'.
bash-3.2$ git branch -d[KD master
Deleted branch master (was 819f1ed).
bash-3.2$ git pull
Updating 47c51e5..56492de
Fast-forward
 .DS_Store                                             | Bin [31m0[m -> [32m6148[m bytes
 hello.txt                                             |   1 [32m+[m
 students/.DS_Store                                    | Bin [31m0[m -> [32m6148[m bytes
 students/danh/add.js                                  |  10 [32m++++++++++[m
 students/danh/isthisworking.txt                       |   0
 students/danh/pleasework.txt                          |   0
 students/danh/recipe-exercises/script.js              |  13 [32m+++++++++++++[m
 students/danh/testing.txt                             |   0
 students/danh/touchfirstthenaddthencommitthenpush.txt |   0
 students/drewb/hello.txt                              |   0
 students/jakeservin/add.js                            |   3 [32m+++[m
 students/jakeservin/hello.txt                         |   1 [32m+[m
 web-pt-03-2022-dc                                     |   1 [32m+[m
 13 files changed, 29 insertions(+)
 create mode 100644 .DS_Store
 create mode 100644 hello.txt
 create mode 100644 students/.DS_Store
 create mode 100644 students/danh/add.js
 create mode 100644 students/danh/isthisworking.txt
 create mode 100644 students/danh/pleasework.txt
 create mode 100644 students/danh/recipe-exercises/script.js
 create mode 100644 students/danh/testing.txt
 create mode 100644 students/danh/touchfirstthenaddthencommitthenpush.txt
 create mode 100644 students/drewb/hello.txt
 create mode 100644 students/jakeservin/add.js
 create mode 100644 students/jakeservin/hello.txt
 create mode 160000 web-pt-03-2022-dc
bash-3.2$ git ad [K[K[K[K[K[K[Kgit add [K[K[K[K[K[K[K[Kls [K
danh		drewb		jakeservin	jeffl
bash-3.2$ git checkout jeffl
error: Your local changes to the following files would be overwritten by checkout:
	.DS_Store
	students/.DS_Store
Please commit your changes or stash them before you switch branches.
Aborting
bash-3.2$ git stash
Saved working directory and index state WIP on main: 56492de Merge pull request #16 from kaleelur-shaikdawood/danh_nguyen
bash-3.2$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	[31mjeffl/[m

nothing added to commit but untracked files present (use "git add" to track)
bash-3.2$ git branch -a
  jeffl[m
* [32mmain[m
  [31mremotes/origin/JakeServin[m
  [31mremotes/origin/Kaitlin[m
  [31mremotes/origin/Veronica[m
  [31mremotes/origin/anthonymarr[m
  [31mremotes/origin/chrisnguyen[m
  [31mremotes/origin/danh_nguyen[m
  [31mremotes/origin/drew_branch[m
  [31mremotes/origin/git_101[m
  [31mremotes/origin/jeffl[m
  [31mremotes/origin/jeremiah[m
  [31mremotes/origin/krislaye[m
  [31mremotes/origin/main[m
  [31mremotes/origin/master[m
  [31mremotes/origin/mattpacettiv2[m
  [31mremotes/origin/rparris[m
  [31mremotes/origin/seth[m
  [31mremotes/origin/terence[m
bash-3.2$ git [K [K[K[K[Kgit [K[K[K[Kgit add 