pipeline {
    agent any

    stages {
        stage('Check Node & npm Installation') {
            steps {
                script {
                    // Check if Node.js is installed
                    def nodeHome = tool 'NodeJS'
                    def npmExecutable = "${nodeHome}/bin/npm"

                    // Check if npm is installed
                    def npmInstalled = sh(script: "${npmExecutable} -v", returnStatus: true) == 0

                    if (npmInstalled) {
                        echo "npm is installed. Proceeding with the build steps."
                        // Your build steps go here
                    } else {
                        echo "Node & npm are not installed on this clint"
                        echo "Installing NodeJs"
                        sh 'sudo apt install nodejs -y'
                        echo "Installing npm"
                        sh 'sudo apt install npm -y'
                    }
                }
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