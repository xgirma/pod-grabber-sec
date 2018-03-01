# Security Podcast Grabber

Grabs security podcasts and post them to db.

# Heroku setup

docs: 

https://devcenter.heroku.com/articles/scheduler

http://www.spacjer.com/blog/2014/02/10/defining-node-dot-js-task-for-heroku-scheduler/

Steps:

    $ heroku login
    $ heroku addons:create scheduler:standard
    $ creat bin/cron.js
    $ git push heroku master
    $ heroku run cron.js
    
    open heroku.com
    open warm-bastion-21302
    dashboard -> Installed add-ons -> Heroku Scheduler
    add a new job
    
    
Abc ...
