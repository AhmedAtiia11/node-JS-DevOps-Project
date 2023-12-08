pipeline {
    agent any
    stages {
        stage('Installation') {
            steps {
                npm ci
            }
        }
        stage('Building') {
            steps {
                npx turbo serve
            }
        }
       
    }
}