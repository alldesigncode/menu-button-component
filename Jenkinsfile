pipeline {
 agent any

  tools {nodejs "node"}

  stages {
    stage ('checkout') {
      steps {
        checkout scm
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
