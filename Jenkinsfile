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
                sh 'npm run start'
            }
        }
    }
}
