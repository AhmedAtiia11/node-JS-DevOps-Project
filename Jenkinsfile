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
                sh'forever start -o forever-out.log -e forever-err.log --workingDir /home/jenkins/workspace/node-JS-project/ /usr/bin/npx turbo serve'
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



