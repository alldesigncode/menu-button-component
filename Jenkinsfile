pipeline {
  agent any

  tools { nodejs 'node' }

  stages {
    stage ('checkout') {
      steps {
        checkout scm
      }
    }
    stage ('install modules') {
      steps {
        sh '''
          npm install
        '''
      }
    }
    stage ('build') {
      steps {
        sh '''
          npm run ng build
        '''
      }
    }
  }
}
