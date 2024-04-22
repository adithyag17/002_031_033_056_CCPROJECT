pipeline {
    agent any
    environment {
        DOCKER_CREDENTIALS = credentials('docker-credentials')
        DOCKER_USERNAME = DOCKER_CREDENTIALS_USR
        DOCKER_PASSWORD = DOCKER_CREDENTIALS_PSW
    }
    stages {
        stage('Build') {
            steps {
                script {
                    
                    bat 'docker build -t uc1 ./uc1'
                    bat 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD} docker.io'
                    bat 'docker tag uc1 ${DOCKER_USERNAME}/uc1:latest'
                    bat 'docker push ${DOCKER_USERNAME}/uc1:latest'
                    bat 'docker build -t uc2 ./uc2'
                    bat 'docker tag uc2 ${DOCKER_USERNAME}/uc2:latest'
                    bat 'docker push ${DOCKER_USERNAME}/uc2:latest'
                    bat 'docker build -t uc3 ./uc3'
                    bat 'docker tag uc3 ${DOCKER_USERNAME}/uc3:latest'
                    bat 'docker push ${DOCKER_USERNAME}/uc3:latest'
                    bat 'docker build -t frontend ./frontend'
                    bat 'docker tag frontend ${DOCKER_USERNAME}/frontend:latest'
                    bat 'docker push ${DOCKER_USERNAME}/frontend:latest'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                 bat 'kubectl apply -f kubernetes.yaml'
            }
        }
    }
    
    post {
        failure {
            echo 'Pipeline failed'
        }
    }
}
