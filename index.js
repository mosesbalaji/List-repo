const fs = require('fs')
  , path = require('path')
  , core = require('@actions/core')
  , io = require('@actions/io')
  , json2csv = require('json2csv')
  , githubClient = require('./src/githublib/githubClient')
  , OrgsssActivity = require('./src/githublib/Organization')
;

async function run() {
  const token = getRequiredInput('token')
    , outputDir = getRequiredInput('outputDir')
    , organizationinp = getRequiredInput('organization')
    , maxRetries = getRequiredInput('octokit_max_retries')
  ;
}