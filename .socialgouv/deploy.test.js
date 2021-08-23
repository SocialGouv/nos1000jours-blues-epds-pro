const child_process = require("child_process");
const { directory } = require("tempy");
const util = require("util");

const TIMEOUT = 1000 * 60;

const exec = util.promisify(child_process.exec);

const GH_DEFAULTS = {
  GITHUB_JOB: "5678",
  GITHUB_REF: "refs/heads/mybranch",
  GITHUB_REPOSITORY: `socialgouv/nos1000jours-web-pro`,
  GITHUB_RUN_ID: "1234",
  GITHUB_SHA: "0123456789abcdefghijklmnopqrstuvwxyz0123",
  SOCIALGOUV_BASE_DOMAIN: "dev2.fabrique.social.gouv.fr",
  SOCIALGOUV_CONFIG_PATH: __dirname + "/../.socialgouv/config.json",
  SOCIALGOUV_PREPRODUCTION: "",
  SOCIALGOUV_PRODUCTION: "",
};

const degitCommand = ({ dir, env }) => `
  npx degit SocialGouv/kosko-charts/templates/autodevops ${dir}/autodevops; \
  yarn --cwd ${dir}/autodevops --silent; \
  cp -r ${__dirname}/../.socialgouv/environments ${dir}/autodevops/; \
  yarn --cwd ${dir}/autodevops --silent generate --env ${env}
`;

const getEnvironmentManifests = async (envName, defaultEnv = {}) => {
  const dir = directory();

  const env = {
    ...GH_DEFAULTS,
    ...defaultEnv,
  };

  Object.assign(process.env, env);

  const cmd = degitCommand({ dir, env: envName });
  console.info(`Generating ${envName} manifests with autodevops template...`);

  const { stdout: manifests } = await exec(cmd, { env: process.env });

  return manifests;
};

test(
  "generate development k8s manifests",
  async () => {
    const manifests = await getEnvironmentManifests("dev");
    expect(manifests).toMatchSnapshot();
  },
  TIMEOUT
);

test(
  "generate preproduction k8s manifests",
  async () => {
    const manifests = await getEnvironmentManifests("preprod", {
      GITHUB_REF: "refs/tags/v1.3.22",
      SOCIALGOUV_PREPRODUCTION: "true",
    });
    expect(manifests).toMatchSnapshot();
  },
  TIMEOUT
);

test(
  "generate production k8s manifests",
  async () => {
    const manifests = await getEnvironmentManifests("prod", {
      GITHUB_REF: "refs/tags/v1.3.22",
      SOCIALGOUV_PRODUCTION: "true",
      SOCIALGOUV_BASE_DOMAIN: "fabrique.social.gouv.fr",
    });
    expect(manifests).toMatchSnapshot();
  },
  TIMEOUT
);
