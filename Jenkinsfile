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
                sh '''export JENKINS_NODE_COOKIE=dontKillMe
nohup npm run start &
'''
            }
        }
    }
}
