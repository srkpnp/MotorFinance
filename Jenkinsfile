pipeline {
    agent any 
    stages {
        stage('Checkout') { 
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                }
        }
       stage('Deploy') {
            steps {
                sh '''kill $(ps aux | grep 'app.js' | awk '{print $2}')
                export JENKINS_NODE_COOKIE=dontKillMe
nohup npm run start &
'''
            }
        }
    }
}
