pipeline {
 agent any

  tools {nodejs "node"}

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
    stage ('test') {
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
