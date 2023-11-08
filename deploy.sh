#!/usr/bin/env sh

# build
# use gh-pages vite.config
mv vite.config.ts vite.config.local.ts
mv vite.config.gh-pages.ts vite.config.ts

npm run build

# use local vite.config again
mv vite.config.ts vite.config.gh-pages.ts
mv vite.config.local.ts vite.config.ts

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