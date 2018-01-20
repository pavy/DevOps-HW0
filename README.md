# DevOps: HW0
#### Screencast([link](https://youtu.be/atX1i56iOVk))

#### Slack profile 
![Alt text](Images/Slack.png?raw=true "Click here")

#### Moodle profile 
![Alt text](Images/Moodle.png?raw=true "Click here")

## Computing Environment

[Workshop Guide](https://github.com/chrisparnin/ComputingEnvironmentsWorkshop/blob/master/VM.md)
* Install git, vagrant and Virtual Box
* vagrant init ubuntu/trusty64
* Enabled private network, synced folder(clone git ComputingEnvironmentWorkshop repository) and fix DNS
* vagrant up
* vagrant status
* vagrant ssh
* hostname -i
* Install node.js in VM
* Run npm install from the synced directory
* npm run forever
* See the message in browser - private_ip:3000 [link](http://192.168.18.23:3000/)
* npm run stop


## Hooks
[Workshop Guide](https://github.com/CSC-DevOps/Course/blob/master/Workshops/PipelineBasics.md)
#### A simple hook

* Create a local git repository (using `git init`)
* cd .git/hooks
* Create `post-commit` file with the following content:

    `#!/bin/sh`
    
    `xdg-open https://www.google.com`

## Pipeline
[Workshop Guide](https://github.com/CSC-DevOps/Course/blob/master/Workshops/PipelineBasics.md)
* Clone App repository
* Create deploy/production-www and deploy/production.git directories outside App
* Configure post-receive hook in production.git and check that the file is executable

    `#!/bin/sh`
    
    `GIT_WORK_TREE=/home/vagrant/workshop/Pipeline/deploy/production-www git checkout -f`
    
    `echo "Pushed to production"`
    
    `cd /home/vagrant/workshop/Pipeline/deploy/production-www && npm install`
    
    `node main.js 9000`

* Establish a name for remote mirror

    `git remote add prod file:///home/vagrant/workshop/Pipeline/deploy/production.git`

* Do a simple Commit
* Push your changes

    `git push prod master`

 You can check your modification in the production-www directory and app can be viewed at VM_IP:9000([link](http://192.168.18.23:9000/)) in the browser. 
