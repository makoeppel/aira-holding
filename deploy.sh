#!/usr/bin/env sh

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

cd dist
git init --initial-branch=main
git add . -f
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:makoeppel/aira-holding.git main:gh-pages

cd -