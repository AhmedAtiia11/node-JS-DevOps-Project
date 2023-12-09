pipeline {
    agent any
    stages {
        stage('Unit Test') {
            steps {
                // Run unit tests
                sh 'node -v' // Assuming Maven is used for building and testing
            }
        }

        stage('Installation') {
            steps {
                sh'npm ci'
            }
        }
        stage('Building') {
            steps {
                sh'npx turbo serve  app.log 2>&1'
            }
        }
        
    }
    post {
        success {
            echo 'All tests passed...'
        }

        failure {
            echo 'Tests failed. Check the build logs for details.'
        }
    }
}



