pipeline {
  agent any
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
          npm run test:dist
        '''
      }
    }
    stage ('build') {
      steps {
        sh '''
          npm run build
        '''
      }
    }
  }
}
