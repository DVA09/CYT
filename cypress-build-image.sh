 #!/bin/sh

 # DOCKER_REGISTRY_HOST, DOCKER_REGISTRY_USERNAME, DOCKER_REGISTRY_PASSWORD : all must be set as environmental variables in teamcity

 set -eu
 #create temorary directory
 mkdir -p tmp
 rm -rf tmp/*
 # copy required files to temp directory
 cp -R ./cypress-build-image.sh tmp/
 cp -R ./cypress.dockerfile tmp/
 cp -R ./package.json tmp/
 cp -R ./cypress tmp/cypress
 cp -R ./cypress.config.js tmp/
 #login to docker regitry 
 docker login -u "${DOCKER_REGISTRY_USERNAME}" -p "${DOCKER_REGISTRY_PASSWORD}" "${DOCKER_REGISTRY_HOST}"
 #pull cypress image
 docker pull cypress/included:12.8.1

 _image_name=cypress-parallel:1.0.0

 docker build -f tmp/cypress.dockerfile -t ${_image_name} tmp/

 docker image push ${_image_name}
 #
 docker-compose up
 # code below will ensure that if one of containers crashes the process will exit with error code in teamcity
 EXITCODES=$(docker-compose ps -q | xargs docker inspect -f '{{ .State.ExitCode }}' | grep -v '^0' | wc -l | tr -d ' ')
 if [ ${EXITCODES} -ne 0 ]; then
   echo "!!!!!!!!!!!!!!!!Some tests failed!!!!!!!!!!!!!!!!!!"
   exit ${EXITCODES}
 else
   echo "!!!!!!!!!!!!!!!All tests passed!!!!!!!!!!!!!!!!!!"
 fi
 #shut down docker-compose
 docker-compose down
 #remove temp directory
 rm -rf tmp/
