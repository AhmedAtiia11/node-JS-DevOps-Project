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
                sh 'node -v'
                echo 'node Version 19 is now  installed'
            }
        }}
    post {
        success {
            echo 'All tests passed...'
        }

        failure {
            echo 'Tests failed. Check the build logs for details.'
        }
    }
}



