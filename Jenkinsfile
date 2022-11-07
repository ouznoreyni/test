pipeline {
   agent {
           docker {
            image 'papesambandour/docker-node-alpine-16-git:1.1'
            args '-u root:root'
           }
       }
    stages {
        stage('Install caprover CLI') {
          steps {
             echo "START INSTALL CAPROVER CLI"
             sh 'npm install -g caprover jest  ts-jest'
             echo "END INSTALL CAPROVER CLI"
             
          }
        }
       stage('Run test') {
          steps {
              echo "run test"
              sh 'npm run test'
          }
        }
        stage('Deployment') {
            steps {
                echo 'Start deploy'
                sh 'caprover deploy -h ${CAPTAIN_URL} -p ${PASSWORD_CAPROVER} -b $GIT_BRANCH -a test'
                echo 'END DEPLOY'
            }
        }
    }
     post {
        always {
            echo 'I will always say Hello again!'
            
            emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
                recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']],
                subject: "Jenkins Build ${currentBuild.currentResult}: Job ${env.JOB_NAME}"
            
        }
    }
}