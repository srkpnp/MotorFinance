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
                sh '''npm install
                npm run build'''
            }
        }
       stage('Deploy') {
            steps {
                sh "npm run start"
            }
        }
    }
}
