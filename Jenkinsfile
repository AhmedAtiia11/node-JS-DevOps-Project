pipeline {
    agent any
    stages {
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