pipeline { 

    agent any

    triggers {
        pollSCM('* * * * *')
    }

    stages {

        stage('Source checkout') {
            steps {
                echo 'Cloning source code is finished.'
            }
        }

        stage('Test') {
            steps {
                echo 'Cloning source test is finished.'
            }
        }

        stage('Docker build') {
            steps {
                echo 'Build dokcer image'
                bat ''' docker image build -t user-webapp .'''
            }
        }

        stage('Docker deploy') {
            steps {
                echo '----------------- This is a docker deploment phase ----------'
                bat '''
                
                docker container run --restart always --name user-webapp-container -p 4201:80 -d user-webapp
            '''
            }
        }
    }
}