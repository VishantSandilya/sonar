# SonarQube Sample with Intentional Issues

This tiny Node.js project contains deliberate code smells so that SonarQube/SonarCloud can flag them during CI.

## Run locally

```bash
npm install
npm start
```

## SonarQube config

See `sonar-project.properties`. Adjust `sonar.projectKey` and other fields as needed.

## GitHub Actions (SonarQube)

Create repo secrets:
- Option A (Docker in CI): no secrets needed. The workflow starts `sonarqube:lts-community` locally and generates a token automatically.
- Option B (External SonarQube): set `SONAR_HOST_URL` and `SONAR_TOKEN` repository secrets and adjust the workflow accordingly.

Use the workflow in `.github/workflows/sonar.yml`.


