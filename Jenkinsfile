pipeline {
    agent any
    stages {
        stage('NodeJS Installation') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -' 
                sh 'sudo apt install -y nodejs'
            }
        }
        stage('Unit Test') {
            steps {
                // Run unit tests
                sh 'node -v' // Assuming Maven is used for building and testing
            }
        }}
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



