module.exports = shipit => {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/home/ec2-user/test',
      repositoryUrl: 'https://github.com/user/super-project.git',
    },
    staging: {
      servers: 'ec2-user@ec2-18-216-37-123.us-east-2.compute.amazonaws.com',
    }
  })
}
