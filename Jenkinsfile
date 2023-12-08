pipeline {
    agent any
    stages {
        stage('Update npm') {
            steps {
                sh 'npm install -g npm'
            }
        }
        stage('Installation') {
            steps {
                sh'npm ci'
            }
        }
        stage('Building') {
            steps {
                sh'npx turbo serve'
            }
        }
        
    }
}