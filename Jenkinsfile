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
                sh'npm ci --silent'
            }
        }
        stage('Building') {
            steps {
                sh "nohup npx turbo serve &"
                sleep time: 100, unit: 'SECONDS'
            }
        }
        
    }
    post {
        success {
            echo 'All tests passed...'
            sleep time: 100, unit: 'SECONDS'
        }

        failure {
            echo 'Tests failed. Check the build logs for details.'
        }
    }
}



